import React from 'react';
import { Modal } from 'react-bootstrap';

const ImageModal = ({ showModal, handleModalClose, imageSrc, altText, title }) => {
  return (
    <Modal show={showModal} onHide={handleModalClose} centered>
      <Modal.Header closeButton style={{ fontSize: '.5rem' }}>
        <Modal.Title style={{ fontSize: '.5rem' }}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageSrc} alt={altText} className="w-100 h-auto" />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
