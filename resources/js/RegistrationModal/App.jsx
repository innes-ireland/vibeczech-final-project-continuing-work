import React from 'react';

export default function App() {

    const modal = document.getElementById("modal");
    // const registerButton = document.getElementById("register");
    const closeModal = document.getElementById("close_modal");

    const showModal = () => {
        modal.style.display = "block";
    }
    // registerButton.onClick = function () {
    //     modal.style.display = "block";
    // }

    const hideModal = () => {
        modal.style.display = "none";
    }

    return (
        <form>
            <label for='username'>Username</label>
            <br />
            <input type='text' id='username' name='username' />
            <br /><br />

            <label for='password'>Password</label>
            <br />
            <input type='password' id='password' name='password' />
            <br /><br />

            <button id='login' name='login'>Login</button>
            <br /><br />

            <a href='#' id='register' onClick={showModal}>Register</a>
        </form>
    )
}