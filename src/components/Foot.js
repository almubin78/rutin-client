import React from 'react';
import { Card } from 'react-bootstrap';

const Foot = () => {
    return (
        <Card>
            <Card.Header>Footer</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Foot;