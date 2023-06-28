import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyModal = ({ onRemove, id }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRemove = (e) => {
        setShow(false)
        onRemove(e)
    }

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Remove
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" data-id={id} onClick={handleRemove}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModal