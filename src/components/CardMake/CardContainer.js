import { format } from 'date-fns';
import React from 'react';
import { Container } from 'react-bootstrap';
import CardMake from './CardMake';

const CardContainer = ({ allGets, selected }) => {
    console.log(allGets);
    return (
        <div className='mt-5'>
            <h2>You have selected: {format(selected, 'PP')}</h2>
            <h4>You can Create a Routine For this date</h4>
            <Container>
                <CardMake
                    allGets={allGets}
                ></CardMake>
            </Container>
        </div>
    );
};

export default CardContainer;