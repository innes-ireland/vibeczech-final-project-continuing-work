import React from 'react';

import { useState, useEffect } from 'react';

export default function App() {

    const [modalVisible, setModalVisible] = useState(false)
    const [workers, setWorkers] = useState([]);

    //-------this section displays and hides the modal----------
    const showModal = () => {
        // const modal = document.getElementById("modal_work_party");
        // modal.style.display = "block";
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
    //------------------


    //fetch to get data to display workers

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
            {
                modalVisible ?
                    <div id='modal_work_party' class='modal' onClick={hideModal}>
                        <div className='modal__content'>
                            <h1 >Work Party</h1>

                            {
                                workers.map(worker => {
                                    return <div>{worker.first_name} {worker.last_name}</div>
                                })
                            }
                            <button id='button_add_party' onClick={hideModal}>Create Work Party</button>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>


    )
}