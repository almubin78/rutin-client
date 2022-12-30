import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const CreateModal = ({ show, setShow, single }) => {
    // console.log(single);
    const {name,slots}=single;
    console.log('x and y',name,slots);
    const handleClose = () => {
        setShow(false)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {single.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{single.name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        back
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        WOW Make
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default CreateModal;