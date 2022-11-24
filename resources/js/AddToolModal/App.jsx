import React from 'react';
import icon from '../../../public/icons/chain-saw.png';
import icon2 from '../../../public/icons/circular-saw.png';
import icon3 from '../../../public/icons/road-drill.png';
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
        setModalVisible(true)
    }

    const hideModal = (e) => {
        e.preventDefault()
        const modal = document.getElementById("modal_add_tool");
        const button = document.getElementById("button_add_tool");
        if (e.target == modal) {
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
            < a href='#' id='modalTrigger' onClick={showModal} > Add tool</a >
            {
                successMessage
                    ? <div className="success-message-tool"><p>{successMessage}</p></div>
                    : ''
            }


            {
                modalVisible ?
                    <div id='modal_add_tool' className='modal modal_add_tool' onClick={hideModal}>
                        <div className='modal__content-add-tool'>

                            <h1 >Add Tools</h1>
                            <div className='icons_display'>
                                <img className='icons_display-img' src={icon} alt="chain-saw" />
                                <img className='icons_display-img' src={icon2} alt="circular-saw" />
                                <img className='icons_display-img' src={icon3} alt="road-drill" /></div>

                            <form className='modal_add_tool-form' action="/api/tools/add" method="post" >

                                Name:<br />
                                <input className='modal_add_tool-form-input' type="text" name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                <br />

                                Manufacturer:<br />
                                <input className='modal_add_tool-form-input' type="text" name="manufacturer"
                                    value={values.manufacturer}
                                    onChange={handleChange}
                                />
                                <br />

                                Vibration magnitude:<br />
                                <input className='modal_add_tool-form-input' type="text" name="vibration_rating"
                                    value={values.vibration_rating}
                                    onChange={handleChange}
                                />
                                <br />

                                Noise level:<br />
                                <input className='modal_add_tool-form-input' type="text" name="noise_rating"
                                    value={values.noise_rating}
                                    onChange={handleChange}
                                />
                                <br />
                                <button className='modal_add_tool-form-button' id='button_add_tool' onClick={(e) => {
                                    handleSubmit(e)
                                    hideModal(e)
                                }}>Add tool</button>

                            </form>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>


    )
}
