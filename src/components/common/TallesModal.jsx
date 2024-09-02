// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TallesImage from '../../assets/images/Talles/Guia_de_talles.jpeg';

function TallesModal({show, handleClose}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Guía de talles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <img src={TallesImage} alt="Guía de talles" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TallesModal;