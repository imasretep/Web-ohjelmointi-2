/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useAthletesContext } from '../context/athletesContext';
import { useNavigate } from 'react-router-dom'

const AthleteModal = ({ athlete, handleClose }) => {
  const { removeAthlete } = useAthletesContext();
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fi-FI");
  };

  const handleDelete = (id) => {
    removeAthlete(id);
    handleClose();
  };

  const handleUpdate = (id) => {
    handleClose();
    navigate(`/${id}`)
  }

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{athlete.first_name} &quot;{athlete.nickname}&quot; {athlete.last_name}</Modal.Title>
      </Modal.Header>


      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
              <Image
                src={athlete.image_url}
                fluid
                style={{ height: "auto" }}
              />
            </Col>

            <Col xs={12} md={8}>
              <Row className="mb-2">
                <Col>
                  <strong>Syntymävuosi:</strong> {formatDate(athlete.birth_year)}
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <strong>Paino:</strong> {athlete.weight} kg
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <strong>Laji:</strong> {athlete.sport}
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <strong>Saavutukset:</strong> {athlete.achievements}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>


      <Modal.Footer>
        <Button variant="danger" onClick={() => handleDelete(athlete.id)}>Poista</Button>
        <Button variant="primary" onClick={() => handleUpdate(athlete.id)}>Päivitä</Button>
        <Button variant="primary" onClick={handleClose}>Sulje</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AthleteModal;
