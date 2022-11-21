import React from 'react';

import { useState, useEffect } from 'react';

export default function App() {

    const [modalVisible, setModalVisible] = useState(false)
    const [successMessage, setSuccessMessage] = useState(null);

    const [values, setValues] = useState({
        name: '',
        manufacturer: '',
        vibration_rating: '',
        noise_rating: ''
    })






    //--------opening and closing modals----------
    const showModal = () => {
        // const modal = document.getElementById("modal_add_tool");
        setModalVisible(true)
        // modal.style.display = "block";
    }

    const hideModal = (e) => {
        e.preventDefault()
        const modal = document.getElementById("modal_add_tool");
        const button = document.getElementById("button_add_tool");
        // modal.style.display = "none";
        if (e.target == modal) {
            // Should remove some comments
            // modal.style.display = "none";
            // Hides modal if you click outside of the modal__content box
            setModalVisible(false)
        } else if (e.target == button) {
            setModalVisible(false)
        }

    }
    //--------opening and closing modals----------



    const handleSubmit = async (event) => {

        event.preventDefault();

        // making the AJAX request
        const response = await fetch('/api/tools/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        // parsing the response as JSON
        const response_data = await response.json();

        setSuccessMessage('Tool was successfully added');

        // if the response code is not 2xx(success)
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

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }



    return (
        <>
            < a href='#' id='modalTrigger' onClick={showModal} > Add tools</a >
            {
                successMessage
                    ? <div className="success-message">{successMessage}</div>
                    : ''
            }


            {
                modalVisible ?
                    <div id='modal_add_tool' className='modal' onClick={hideModal}>
                        <div className='modal__content'>
                            <h1 >Add Tools</h1>
                            <form action="/api/tools/add" method="post" >

                                Name:<br />
                                <input type="text" name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                <br />

                                Manufacturer:<br />
                                <input type="text" name="manufacturer"
                                    value={values.manufacturer}
                                    onChange={handleChange}
                                />
                                <br />

                                Vibration magnitude:<br />
                                <input type="text" name="vibration_rating"
                                    value={values.vibration_rating}
                                    onChange={handleChange}
                                />
                                <br />

                                Noise level:<br />
                                <input type="text" name="noise_rating"
                                    value={values.noise_rating}
                                    onChange={handleChange}
                                />
                                <br />
                                <button id='button_add_tool' onClick={(e) => {
                                    handleSubmit(e)
                                    hideModal(e)
                                }}>Add tool</button>

                            </form>
                        </div>
                    </div>
                    :
                    <></>
            }
            {/* <div id='modal_add_tool' className='modal'>
                <div className='modal__content'>
                    <h1 >Add Tools</h1>
                    <form action="/api/tools/add" method="post" onSubmit={handleSubmit} >

                        Name:<br />
                        <input type="text" name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <br />

                        Manufacturer:<br />
                        <input type="text" name="manufacturer"
                            value={values.manufacturer}
                            onChange={handleChange}
                        />
                        <br />

                        Vibration magnitude:<br />
                        <input type="text" name="vibration_rating"
                            value={values.vibration_rating}
                            onChange={handleChange}
                        />
                        <br />

                        Noise level:<br />
                        <input type="text" name="noise_rating"
                            value={values.noise_rating}
                            onChange={handleChange}
                        />
                        <br />
                        <button >Add tool</button>

                    </form>
                </div>
            </div> */}
        </>


    )
}