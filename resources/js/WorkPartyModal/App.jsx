import React from 'react';

export default function App() {



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


    return (
        <>
            < a href='#' id='modalTrigger' onClick={showModal} > Create Work Party</a >
            <div id='modal_work_party' class='modal' onClick={hideModal}>
                <div className='modal__content'>
                    <h1 >Work Party</h1>
                </div>
            </div>
        </>


    )
}