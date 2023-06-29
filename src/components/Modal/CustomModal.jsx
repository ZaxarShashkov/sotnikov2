import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ onVisible, removeGroup }) => {


    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog style={{ position: 'absolute', width: '25rem', height: '15rem', top: '150px', left: '15%' }}>
                <Modal.Header closeButton onClick={() => onVisible()}>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onVisible()}>Close</Button>
                    <Button variant="primary" onClick={removeGroup} >Remove</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default CustomModal