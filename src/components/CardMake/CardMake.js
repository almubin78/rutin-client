import React, { useState } from 'react';
import { Button, Card, Form, Row } from 'react-bootstrap';
import CreateModal from '../routineModal/CreateModal';

const CardMake = ({ allGets }) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true);
    return (


        <Row className=''>
            {
                allGets.map(single =>
                    <Card className='col-sm-12 col-md-6 col-lg-4 py-1'>
                        <Card.Header>{single.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                are available
                            </Card.Text>
                        </Card.Body>

                        <Form.Select aria-label="Default select example">
                            <option>Select Time</option>
                            {
                                single.slots.map(slot => <option value={slot}>{slot}</option>)
                            }


                        </Form.Select>

                        <Button variant="primary" onClick={handleShow} className='mt-2'>
                            Create Routine
                        </Button>
                        <CreateModal
                            show={show}
                            setShow={setShow}
                            allGets={allGets}
                            single={single}
                        ></CreateModal>
                    </Card>
                )
            }
        </Row>


    );
};

export default CardMake;