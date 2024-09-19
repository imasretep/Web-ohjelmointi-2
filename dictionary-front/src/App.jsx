import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WordSearch from "./Components/WordSearch";
import AddWords from "./Components/AddWords";
import Navigation from "./Components/Navigation";

const App = () => {

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<WordSearch />} />
          <Route path="/add" element={<AddWords />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
