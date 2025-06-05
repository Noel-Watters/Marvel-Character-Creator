import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Character } from "../types/types";

interface CharacterModalProps {
  show: boolean;
  selectedCharacter: Character | null;
  handleCloseModal: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  show,
  selectedCharacter,
  handleCloseModal,
}) => {
  if (!selectedCharacter) return null;

  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedCharacter.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={
            selectedCharacter.img ||
            "https://www.shutterstock.com/image-vector/gender-neutral-profile-avatar-front-260nw-1994872016.jpg"
          }
          alt={selectedCharacter.name}
          style={{ width: "100%", marginBottom: "15px" }}
        />
        <p><strong>Class:</strong> {selectedCharacter.class}</p>
        <p><strong>Race:</strong> {selectedCharacter.race}</p>
        <p><strong>Alignment:</strong> {selectedCharacter.alignment}</p>
        <p><strong>Age:</strong> {selectedCharacter.age}</p>
        <p><strong>Level:</strong> {selectedCharacter.level}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CharacterModal;