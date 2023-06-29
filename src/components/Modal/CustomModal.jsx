import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ onVisible, removeGroup, onElected }) => {


    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog style={{ position: 'absolute', width: '25rem', height: '15rem', top: '150px', left: '15%' }}>
                <Modal.Header closeButton onClick={() => onVisible()}>
                    <Modal.Title>Are you sure ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onVisible()}>Close</Button>
                    <Button variant="primary" onClick={(e) => { removeGroup(); onElected(e) }} >Accept</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default CustomModal