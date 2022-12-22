import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const DatePic = () => {
    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p className='text-warning'>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div>
            <h3 className='text-center'>Select a date and Make your Routine</h3>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
                className='w-50 text-center mx-auto bg-success rounded'
            />
        </div>
    );
};

export default DatePic;