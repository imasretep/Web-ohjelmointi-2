import Container from 'react-bootstrap/Container';
import Athletes from "./components/Athletes"
import AthleteOptions from './components/AthleteOptions';
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'

const App = () => {

  return (
    <Container>
      <Row>
        <h1>Urheilijat</h1>
        <Row>
          <Router>
            <Routes>
              <Route path="/" element={<Athletes />} />
              <Route path="/add" element={<AthleteOptions />} />
              <Route path="/:id" element={<AthleteOptions />} />
            </Routes>
          </Router>
        </Row>
      </Row>
    </Container>
  )
}

export default App
