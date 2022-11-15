import React from 'react';

export default function App() {




    const showModal = () => {
        const modal = document.getElementById("modal_add_tool");
        console.log(modal);
        modal.style.display = "block";
    }

    const hideModal = (e) => {
        const modal = document.getElementById("modal_add_tool");
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }


    return (
        <>
            < a href='#' id='modalTrigger' onClick={showModal} > Add tools</a >
            <div id='modal_add_tool' class='modal' onClick={hideModal}>
                <div className='modal__content'>
                    <h1 >Add Tools</h1>
                </div>
            </div>
        </>


    )
}