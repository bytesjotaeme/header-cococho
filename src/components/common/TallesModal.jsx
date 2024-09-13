// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TallesImage from '../../assets/images/Talles/Guia_de_talles.jpeg';
import './TallesModal.css';

function TallesModal({show, handleClose}) {

  return (
    <>
      <Modal className='modal-talles' show={show} onHide={handleClose}>
        <Modal.Header className='modal-talles-header' closeButton>
          <Modal.Title>Guía de talles</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body-talles'>
           <img src={TallesImage} alt="Guía de talles" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TallesModal;