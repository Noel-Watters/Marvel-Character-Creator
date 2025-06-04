import { useEffect } from 'react';
import {Link} from 'react-router-dom';
//import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import DeleteOffCanvas from './DeleteOffCanvas'; 

import { fetchCharacters } from '../Firebase/FetchFirestone';
import {useQuery} from '@tanstack/react-query';
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner component
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { SetCharacter } from '../redux/slices/CharacterSlice'; // Import the action to set characters in Redux store
import CharacterCard from './CharacterCard';
import NavBar from './NavBar';

function Characters() {
  const dispatch = useDispatch(); // Initialize Redux dispatch
  //const [showModal, setShowModal] = useState(false); // Modal visibility state
  //const [selectedCharacter, setSelectedCharacter] = useState(null); // Selected character state
  //const [showDeleteOffCanvas, setShowDeleteOffCanvas] = useState(false); // Control DeleteOffCanvas visibility
  //const [characterToDelete, setCharacterToDelete] = useState(null); 

//Fetch Characters
const {data:charactersData, isLoading} = useQuery({
  queryKey: ['characters'],
  queryFn: fetchCharacters,
});

const characters = charactersData || [];



//Dispatch the fetched charaters to Redux store
useEffect (() => {
  if (charactersData) {
    dispatch(SetCharacter(charactersData)); 
  }
}, [charactersData, dispatch]);

// Show loading spinner while fetching characters 
if (isLoading) return <LoadingSpinner />; 
if (!characters || characters.length === 0) {
  return (
    <Container className="text-center mt-5">
      <h3>No characters found</h3>
      <p>Please create a character to get started.</p>
      <Button as={Link} to='/create' className="bg-danger">Create Character</Button>
    </Container>
  )};


/*
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

*/
  return (
    <Container>
      <NavBar />
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
           <CharacterCard character={character} />
          </Col>
        ))}
      </Row>

      {/* Modal for displaying character details 
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
      />*/}
    </Container> 
    
  );
}

export default Characters;