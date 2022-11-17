import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react';
import Register from './Register';
import UserContext from '../Contexts/UserContext';
import getCurrentUser from '../getCurrentUser';

export default function Login() {

  const [modalVisible, setModalVisible] = useState(false);
  const { user, setUser } = useContext(UserContext);

  console.log(useContext(UserContext))

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    getCurrentUser();
  }, [])

  const handleSubmit = async (event) => {

    event.preventDefault();

    // with axios
    try {
      // make the AJAX request
      const response = await axios.post('/login', values);
      // get the (already JSON-parsed) response data
      const response_data = response.data;

      try {
        const response = await axios.get('/api/user');
        const data = response.data;
        console.log(data);
        setUser(data);

        data && data.is_admin
          ?
          window.location.replace('/admin')
          :
          window.location.replace('/worker')
      }
      catch (err) {
        console.log(err);
      }

    } catch (error) {
      // if the response code is not 2xx (success)
      switch (error.response.status) {
        case 422:
          // handle validation errors here
          console.log('VALIDATION FAILED:', error.response.data.errors);
          break;
        case 500:
          console.log('UNKNOWN ERROR', error.response.data);
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

  // const getCurrentUser = async function () {
  //   const response = await axios('/api/user');
  //   console.log(response);
  // };

  const hideModal = (e) => {
    if (e.target == modal) {
      // Hides modal if you click outside of the modal__content box
      setModalVisible(false)
    }
  }

  const showModal = () => {
    console.log('showing modal')
    // Shows modal
    setModalVisible(true)
  }

  return (

    // replace most of this with generic login page shit
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>- Login -</h1>
        <form action="/login" method="post" onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <br /> {/* All breaks should eventually be replaced with styling */}
          <input type='text' id='email' name='email' value={values.email} onChange={handleChange} />
          <br /><br /> {/* All breaks should eventually be replaced with styling */}

          <label htmlFor='password'>Password</label>
          <br /> {/* All breaks should eventually be replaced with styling */}
          <input type='password' id='password' name='password' value={values.password} onChange={handleChange} />
          <br /><br /> {/* All breaks should eventually be replaced with styling */}

          <button id='login' name='login'>Login</button>
          <br /><br /> {/* All breaks should eventually be replaced with styling */}

          <span id='register' onClick={showModal}>Register</span>
          <span id='get-user' onClick={async function () {
            const response = await axios('/api/user');
            console.log(response);
          }}>Get current user</span>
        </form>

        {
          modalVisible ?
            <div id='modal' className='modal' onClick={hideModal}>
              <div className='modal__content registration-modal'>
                <Register
                  setModalVisible={setModalVisible} />
              </div>
            </div>
            :
            <></>
        }
      </div>
    </UserContext.Provider>
  )
}