import { useAthletesContext } from "../context/athletesContext";
import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AthleteModal from "./AthleteModal";
import { useNavigate } from 'react-router-dom';

const Athletes = () => {
  const { athletes } = useAthletesContext();
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSelection = (athlete) => {
    setSelectedAthlete(athlete)
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleClickNew = () => {
    navigate("/add");
  }
  return (
    <>
      <ListGroup className="my-4 list-group-flush">
        {athletes.map((a) => (
          <ListGroup.Item
            key={a.id}
            onClick={() => handleSelection(a)}
            className={`list-group-item-action`}
            style={{ cursor: 'pointer' }}
          >
            {a.first_name} {a.last_name}
          </ListGroup.Item>
        ))}
      </ListGroup>

      {showModal && (<AthleteModal athlete={selectedAthlete} handleClose={handleCloseModal} />)}
      <Col>
        <Button onClick={handleClickNew}>Lisää</Button>
      </Col>
    </>
  );
};

export default Athletes;
