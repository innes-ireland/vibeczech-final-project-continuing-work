import React from 'react';

export default function App() {

    const modal = document.getElementById("work-party-modal");


    const showModal = () => {
        modal.style.display = "block";
    }

    return (
        < a href='#' id='work-party-modal' onClick={showModal} > create work party</a >


    )
}