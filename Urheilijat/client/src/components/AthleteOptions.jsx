import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAthletesContext } from '../context/athletesContext';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const AthleteOptions = () => {
  const { athletes } = useAthletesContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addAthlete, updateAthlete } = useAthletesContext();
  const [athlete, setAthlete] = useState({
    first_name: "",
    last_name: "",
    nickname: "",
    birth_year: "",
    weight: "",
    image_url: "",
    sport: "",
    achievements: "",
  });

  useEffect(() => {
    if (id) {
      const updateAthlete = athletes.find((a) => a.id.toString() === id);
      if (updateAthlete) {
        const formattedAthlete = {
          ...updateAthlete,
          birth_year: updateAthlete.birth_year.split('T')[0],
        };
        setAthlete(formattedAthlete);
      }
    }
  }, [id, athletes, updateAthlete.birth_year]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAthlete((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addAthlete(athlete);
    } else {
      updateAthlete(athlete);
    }
    navigate("/");
  };

  const onSubmitBack = () => {
    navigate("/");
  };

  return (
    <Container className="mt-2">
      <Col>
        <Row>
          <h2 className='mb-4'>{id ? "Päivitä urheilija" : "Lisää uusi urheilija"}</h2>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Etunimi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Anna urheilijan etunimi"
                name="first_name"
                value={athlete.first_name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sukunimi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Anna urheilijan sukunimi"
                name="last_name"
                value={athlete.last_name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Lempinimi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Anna urheilijan lempinimi"
                name="nickname"
                value={athlete.nickname}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Syntymäaika</Form.Label>
              <Form.Control
                type="text"
                placeholder="Anna urheilijan syntymäaika"
                name="birth_year"
                value={athlete.birth_year}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Paino</Form.Label>
              <Form.Control
                type="number"
                placeholder="Anna urheilijan paino kiloina"
                name="weight"
                value={athlete.weight}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kuva</Form.Label>
              <Form.Control
                type="url"
                placeholder="Anna linkki urheilijan kuvaan"
                name="image_url"
                value={athlete.image_url}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Urheilulaji</Form.Label>
              <Form.Control
                type="text"
                placeholder="Anna urheilijan urheilulaji"
                name="sport"
                value={athlete.sport}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Saavutukset</Form.Label>
              <Form.Control
                type="text"
                placeholder="Anna urheilijan saavutukset"
                name="achievements"
                value={athlete.achievements}
                onChange={handleChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Button onClick={onSubmit} variant="primary" type="submit">
                  {id ? "Päivitä" : "Lisää"}
                </Button>

                <Button className='mx-5' onClick={onSubmitBack} variant="primary" type="button">
                  Takaisin
                </Button>
              </Col>
            </Row>

          </Form>
        </Row>
      </Col>
    </Container>
  );
};

export default AthleteOptions;
