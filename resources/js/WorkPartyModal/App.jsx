import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';

export default function App() {

    const [modalVisible, setModalVisible] = useState(false)
    const [workers, setWorkers] = useState([]);
    const [party, setParty] = useState([]);


    //-------this section displays and hides the modal----------
    const showModal = () => {
        setModalVisible(true)
    }

    const hideModal = (e) => {
        const modal = document.getElementById("modal_work_party");
        const button = document.getElementById("button_add_party");
        if (e.target == modal) {
            setModalVisible(false)
        } else if (e.target == button) {
            setModalVisible(false)
        }
    }
    //-------this section displays and hides the modal----------

    //---------fetch to get data to display workers------------
    const loadWorkers = async () => {

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
    //---------fetch to get data to display workers------------


    //-------add and remove function-----------
    const addParty = (temp) => {

        const newParty = {
            id: temp.id,
            name: temp.first_name,
            last_name: temp.last_name,
        };

        let new_arr = party;

        setParty(new_arr.concat(newParty));
        const new_workers = workers.filter((worker) => worker.id !== newParty.id);

        setWorkers(new_workers)
    };

    const deleteParty = (id) => {
        const newParty = party.filter((temp2) => temp2.id !== id);

        setParty(newParty);
    };
    //-------add and remove function-----------



    //---------POST request---------------
    const handleSubmit = async (event) => {

        event.preventDefault();

        // with axios
        const response = await fetch('/api/new-work-party', {
            method: 'POST',
            body: JSON.stringify(party),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        // parse the response as JSON
        const response_data = await response.json();

        // if the response code is not 2xx (success)
        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', response_data.errors);
                    break;
                default:
                    console.log('UNKNOWN ERROR', response_data);
                    break;
            }
        }
    }
    //---------POST request---------------



    return (
        <>
            < a href='#' id='modalTrigger' onClick={showModal} > Create Work Party</a >
            {
                modalVisible ?
                    <div id='modal_work_party' className='modal' onClick={hideModal}>
                        <div className='modal__content'>
                            <h1 >Work Party</h1>
                            <div>
                                <div>Job: <input type="text" name="job" /></div>
                                <div>Date: <input type="date" name="work_date"></input></div>
                                <ul>
                                    {party.map(user => {
                                        return <li key={user.id}>
                                            <p>{user.name} {user.last_name}</p>
                                            <button onClick={() => deleteParty(user.id)}>&times;</button>
                                        </li>
                                    })}
                                </ul>

                                {/* below is POST request to send data to database */}
                                <form action="/api/new-work-party" method="post" >
                                    <button id='button_add_party'
                                        onClick={handleSubmit}
                                    >Create Work Party</button>
                                </form>
                            </div>
                            {
                                workers.map(worker => {
                                    return <div className='users_display' key={worker.id}>
                                        <p>{worker.first_name} {worker.last_name}</p>
                                        <button onClick={() => addParty(worker)
                                        }>Add</button>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}