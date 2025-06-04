import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import DeleteOffCanvas from './DeleteOffCanvas'; 

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Selected character state
  const [showDeleteOffCanvas, setShowDeleteOffCanvas] = useState(false); // Control DeleteOffCanvas visibility
  const [characterToDelete, setCharacterToDelete] = useState(null); // 

  // Fetch characters from the Flask API
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/characters')
      .then(response => {
        setCharacters(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Failed to fetch characters: ${error.message}`);
        setLoading(false);
      });
  }, []);

  // Open the DeleteOffCanvas and set the character to delete
  const handleDeleteClick = (character) => {
    setCharacterToDelete(character);
    setShowDeleteOffCanvas(true);
  };

  // Handle delete confirmation
  const handleDeleteConfirm = () => {
    if (characterToDelete) {
      axios.delete(`http://127.0.0.1:5000/characters/${characterToDelete.id}`)
        .then(() => {
          alert(`${characterToDelete.name} has been deleted.`);
          setCharacters(characters.filter(c => c.id !== characterToDelete.id)); // Remove the deleted character from the list
          setShowDeleteOffCanvas(false); // Close the DeleteOffCanvas
          setCharacterToDelete(null); // Clear the character to delete
        })
        .catch(error => {
          console.error('Error deleting character:', error);
        });
    }
  };

  // Open the modal and set the selected character
  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCharacter(null);
  };

  if (loading) {
    return (
      <Container>
        <h3>
          <Spinner
            animation="border"
            variant="info"
            style={{ marginRight: '15px' }}
            role="status"
          />
          Loading Characters...
        </h3>
      </Container>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Row className="align-items-center mb-3">
        <Col>
          <h3>Character List</h3>
        </Col>
        <Col className="text-end">
          <Button as={Link} to='/create' className="bg-danger">Create Character</Button>
        </Col>
      </Row>

      <Row>
        {characters.map(character => (
          <Col key={character.id} className="mt-4">
            <Card
              style={{ width: '18rem', cursor: 'pointer' }}
              onClick={() => handleCardClick(character)} // Open modal on card click
            >
              <Card.Img variant="top" src={character.image_url || 'https://www.shutterstock.com/image-vector/gender-neutral-profile-avatar-front-260nw-1994872016.jpg'} alt={character.name} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Alias: {character.alias}</Card.Subtitle>
                <div className='mt-2'>
                  <strong>Powers:</strong>
                  <ul>
                    {character.powers.split(',').map((power, index) => (
                      <li key={index}>{power.trim()}</li>
                    ))}
                  </ul>
                </div>
                <Card.Text>Alignment: {character.alignment}</Card.Text>
                <Button
                    as={Link}
                    to={`/edit/${character.id}`} // Navigate to the Edit page with the character ID
                    className="me-2 bg-secondary text-white"
                    onClick={(e) => e.stopPropagation()} // Prevent modal from opening
                    >
                        Edit
                </Button>
                <Button
                  className="bg-danger"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent modal from opening
                     handleDeleteClick(character);
                    }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for displaying character details */}
      {selectedCharacter && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCharacter.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedCharacter.image_url ||'https://www.shutterstock.com/image-vector/gender-neutral-profile-avatar-front-260nw-1994872016.jpg' }
              alt={selectedCharacter.name}
              style={{ width: '100%', marginBottom: '15px' }}
            />
            <p><strong>Alias:</strong> {selectedCharacter.alias}</p>
            <p><strong>Alignment:</strong> {selectedCharacter.alignment}</p>
            <p><strong>Powers:</strong></p>
            <ul>
              {selectedCharacter.powers.split(',').map((power, index) => (
                <li key={index}>{power.trim()}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
 <DeleteOffCanvas
        onDelete={handleDeleteConfirm} // Handle delete confirmation
        characterName={characterToDelete?.name} // Pass the character's name
        show={showDeleteOffCanvas} // Control visibility
        onHide={() => setShowDeleteOffCanvas(false)} // Close the DeleteOffCanvas
      />
    </Container>
  );
}

export default Characters;