import React, { useEffect, useState } from 'react';

import Register from './Register';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const showModal = () => {
    console.log('showing modal')
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

  const getCurrentUser = async function () {
    console.log(user);
  };

  return (

    // replace most of this with generic login page shit
    <div>
      <h1>Login</h1>
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

        <span id='register' onClick={showModal}>Register</span>
        <span id='get-user' onClick={getCurrentUser}>Get current user</span>
      </form>

      {
        modalVisible ?
          <div id='modal' className='modal' onClick={hideModal}>
            <div className='modal__content registration-modal'>
              <Register
                currentUser={user} />
            </div>
          </div>
          :
          <></>
      }
    </div>
  )
}