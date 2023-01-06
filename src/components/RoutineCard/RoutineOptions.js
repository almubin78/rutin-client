import React from 'react';

const RoutineOptions = ({ routineOptions, setRoutine }) => {
    // console.log('routineOptions', routineOptions);
    const { name, slots } = routineOptions;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="">
                    <button
                        disabled={slots.length === 0}
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModal'
                        className="btn btn-primary text-white"
                        onClick={() => setRoutine(routineOptions)}
                    >
                        Book Appointment
                    </button>
                   
                </div>
            </div>
        </div>
    );
};

export default RoutineOptions;