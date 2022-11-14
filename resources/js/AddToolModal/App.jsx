import React from 'react';

export default function App() {

    const modal = document.getElementById("modal");


    const showModal = () => {
        modal.style.display = "block";
        console.log(modal.style.display)
    }


    return (
        < a href='#' id='modal' onClick={showModal} > Add tools</a >


    )
}