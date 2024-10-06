/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import athletesService from "../services/athletes";

const AthletesContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "setAthletes":
      return action.payload;
    case "addAthlete":
      return [...state, action.payload]
    case "removeAthlete":
      return state.filter(a => a.id !== action.payload);
    case "updateAthlete":
      return state.map(a => a.id === action.payload.id ? action.payload : a);
    default:
      return state;
  }
}

export const AthletesProvider = ({ children }) => {
  const [athletes, dispatch] = useReducer(reducer, []);

  const fetchData = async () => {
    const result = await athletesService.getAll();
    dispatch({ type: "setAthletes", payload: result });
  };

  const removeAthlete = async (id) => {
    await athletesService.deleteAthlete(id)
    dispatch({ type: "removeAthlete", payload: id });
  };

  const addAthlete = async (athlete) => {
    const result = await athletesService.addAthlete(athlete);
    const newAthlete = { ...athlete, id: result.data.result.insertId }
    dispatch({ type: "addAthlete", payload: newAthlete });
  };

  const updateAthlete = async (athlete) => {
    await athletesService.updateAthlete(athlete);
    dispatch({ type: "updateAthlete", payload: athlete });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AthletesContext.Provider value={{ athletes, fetchData, removeAthlete, addAthlete, updateAthlete }}>
      {children}
    </AthletesContext.Provider>
  )
};

export const useAthletesContext = () => useContext(AthletesContext);
