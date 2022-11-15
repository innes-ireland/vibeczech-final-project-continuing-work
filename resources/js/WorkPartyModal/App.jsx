import React from 'react';

import { useState, useEffect } from 'react';

export default function App() {


    //-------this section displays and hides the modal----------
    const showModal = () => {
        const modal = document.getElementById("modal_work_party");
        modal.style.display = "block";
    }

    const hideModal = (e) => {
        const modal = document.getElementById("modal_work_party");
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }
    //------------------


    //fetch to get data to display workers
    const [workers, setWorkers] = useState([]);
    const loadWorkers = async () => {
        // Getting data with fetch:
        // const response = await fetch('/api/work-party');
        // const data = await response.json();

        // Getting data with axios
        try {
            const response = await axios.get('/api/work-party');
            setWorkers(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadWorkers();
    }, [])


    return (
        <>
            < a href='#' id='modalTrigger' onClick={showModal} > Create Work Party</a >
            <div id='modal_work_party' class='modal' onClick={hideModal}>
                <div className='modal__content'>
                    <h1 >Work Party</h1>

                    {
                        workers.map(worker => {
                            return <div>{worker.first_name} {worker.last_name}</div>
                        })
                    }
                </div>
            </div>
        </>


    )
}