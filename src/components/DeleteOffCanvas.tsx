import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const DeleteOffCanvas = ({ onDelete, characterName, show, onHide }) => {
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Confirm Deletion</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Are you sure you want to delete <strong>{characterName}</strong>?</p>
        <Button variant="danger" onClick={onDelete} className="me-2">
          Delete
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default DeleteOffCanvas; // Add this line