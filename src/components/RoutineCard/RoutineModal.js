import { format } from 'date-fns';
import React from 'react';

const RoutineModal = ({ selectedDate, routine, setRoutine, refetch }) => {
    const date = format(selectedDate, 'PP')
    console.log('From Routine modal', routine.name, date);
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{routine.name}</h5>
                        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div class="modal-body">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={setRoutine()} class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoutineModal;