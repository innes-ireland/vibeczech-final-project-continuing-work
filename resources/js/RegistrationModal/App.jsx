import React from 'react';

export default function App() {


    const showModal = () => {
        const modal = document.getElementById("modal");
        // This must be inside of the function because at the point it's called in the code, the return has not run yet and will return null
        modal.style.display = "block";
        // Shows modal
    }

    const hideModal = (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            // Hides modal if you click outside of the modal__content box
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form> {/* Needs action */}
                <label htmlFor='username'>Username</label>
                <br /> {/* All breaks should eventually be replaced with styling */}
                <input type='text' id='username' name='username' />
                <br /><br /> {/* All breaks should eventually be replaced with styling */}

                <label htmlFor='password'>Password</label>
                <br /> {/* All breaks should eventually be replaced with styling */}
                <input type='password' id='password' name='password' />
                <br /><br /> {/* All breaks should eventually be replaced with styling */}

                <button id='login' name='login'>Login</button>
                <br /><br /> {/* All breaks should eventually be replaced with styling */}

                <a href='#' id='register' onClick={showModal}>Register</a>
            </form>

            <div id='modal' className='modal' onClick={hideModal}>
                <div className='modal__content'>
                    <p>Modal</p>
                </div>
            </div>
        </div>
    )
}