import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import imgRoutine from '../img/rutineImg.jpg'
import CardContainer from './CardMake/CardContainer';

const DatePic = () => {
    const [selected, setSelected] = useState(new Date());
    const [allGets, setAllGets] = useState([]);

    useEffect(() => {
        fetch('dataSlots.json')
        .then(res => res.json())
        .then(data => setAllGets(data))
    }, [])
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p className='text-warning'>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div>
            <Container>
                <Row className='mx-auto'>
                    <Col><img src={imgRoutine} style={{ width: '300px' }} alt="Routine Img" className='align-center' /></Col>
                    <Col>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                            className='w-full p- bg-success rounded'
                        />
                    </Col>
                    
                </Row>
            </Container>
            <CardContainer
                allGets={allGets}
                selected={selected}
            ></CardContainer>


        </div>
    );
};

export default DatePic;