import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const EntryModal = () => {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
  
    useEffect(() => {
      // Code to show the modal on page entry
      setShow(true);
    }, []);
  
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to My Website</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a message or introduction you want to show to the user.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
    export default EntryModal;