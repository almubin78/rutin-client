import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import RoutineModal from './RoutineModal';
import RoutineOptions from './RoutineOptions';

const AvailableRoutine = ({ selectedDate }) => {
    const [routine, setRoutine] = useState(null);
    // console.log('availableRoutine:', routine);
    const date = format(selectedDate, 'PPPP');
    const { data: routineOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['routineOptions', date],
        queryFn: async () => {
            const res = await fetch('dataSlots.json');
            const data = await res.json();
            // console.log('AvailableRoutine', data);
            return data;
        }
    });
    if (isLoading) {
        return 'Loading from useQuery'
    }
    return (
        <div>
            <div>
                {
                    routineOptions.map(option => <RoutineOptions
                        key={option._id}
                        routineOptions={option}
                        setRoutine={setRoutine}
                    ></RoutineOptions>)
                }
            </div>
            {
                routine &&
                <RoutineModal
                    selectedDate={selectedDate}
                    routine={routine}
                    setRoutine={setRoutine}
                    refetch={refetch}
                ></RoutineModal>
            }
            
        </div>
    );
};

export default AvailableRoutine;