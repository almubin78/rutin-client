import React, { useState } from 'react';
import AvailableRoutine from './AvailableRoutine';
import RoutineBannar from './RoutineBannar';

const RoutineCard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate);
    return (
        <div>
            <RoutineBannar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></RoutineBannar>
            <AvailableRoutine
                selectedDate={selectedDate}
            ></AvailableRoutine>
        </div>
    );
};

export default RoutineCard;