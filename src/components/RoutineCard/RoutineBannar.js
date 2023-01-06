import React from 'react';
import { DayPicker } from 'react-day-picker';
import img from '../../img/rutineImg.jpg'

const RoutineBannar = ({selectedDate,setSelectedDate}) => {
    return (
        <div className='d-flex'>
            <img src={img} style={{width:'450px',height:'300px'}} alt="images" />
            <div>
                <DayPicker
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
            </div>
        </div>
    );
};

export default RoutineBannar;