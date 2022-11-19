import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const Modal = (props) => {
    return (
        <Modal centered show={props.showModal} onHide={props.handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.children}</p>
                <ButtonGroup>
                    <Button>Paciente</Button>
                    <Button>Médico</Button>
                </ButtonGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={props.confirmOperation}>
                    {props.confirmTitle}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modal