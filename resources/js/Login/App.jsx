import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Register from './Register';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState([]);

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

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
        console.log('Can we put the is_admin if else here?')
        data.is_admin
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

  // ++++++++++++++++Possibly useful+++++++++++++++++++
  //
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

    <div>
      <h1>- Login -</h1>
      <form action="/login" method="post" onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' value={values.email} onChange={handleChange} />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' value={values.password} onChange={handleChange} />

        <button id='login' name='login'>Login</button>

        <a href='#' className='register'><span id='register' onClick={showModal}>Register</span></a>
        <a href='#'><span id='get-user' onClick={async function () {
          const response = await axios('/api/user');
          console.log(response);
        }}>Get current user</span></a>
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
  )
}