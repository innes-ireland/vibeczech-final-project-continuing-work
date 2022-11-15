import React, { useState } from 'react';

import Register from './Register';


export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  const showModal = () => {
    // Should remove some comments
    // const modal = document.getElementById("modal");
    // This must be inside of the function because at the point it's called in the code, the return has not run yet and will return null
    // modal.style.display = "block";
    // Shows modal
    setModalVisible(true)
  }

  const hideModal = (e) => {
    if (e.target == modal) {
      // Should remove some comments
      // modal.style.display = "none";
      // Hides modal if you click outside of the modal__content box
      setModalVisible(false)
    }
  }

  return (

    // replace most of this with generic login page shit
    <div>
      <h1>- Login -</h1>
      <form> {/* Needs action */}
        <label htmlFor='email'>Email</label>
        <br /> {/* All breaks should eventually be replaced with styling */}
        <input type='text' id='email' name='email' />
        <br /><br /> {/* All breaks should eventually be replaced with styling */}

        <label htmlFor='password'>Password</label>
        <br /> {/* All breaks should eventually be replaced with styling */}
        <input type='password' id='password' name='password' />
        <br /><br /> {/* All breaks should eventually be replaced with styling */}

        <button id='login' name='login'>Login</button>
        <br /><br /> {/* All breaks should eventually be replaced with styling */}

        <a href='#' id='register' onClick={showModal}>Register</a>
      </form>

      {
        modalVisible ?
          <div id='modal' className='modal' onClick={hideModal}>
            <div className='modal__content registration-modal'>
              <Register />
            </div>
          </div>
          :
          <></>
      }
    </div>
  )
}