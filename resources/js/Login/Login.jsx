import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react';
import Register from './Register';
import UserContext from '../Contexts/UserContext';
import getCurrentUser from '../getCurrentUser';

export default function Login() {

  // allows registration modal to be hidden until clicked
  const [modalVisible, setModalVisible] = useState(null);
  const [modalOpaque, setModalOpaque] = useState(true)

  const { user, setUser } = useContext(UserContext);
  // a place for user-supplied form values
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  // gets current user when page loads
  useEffect(() => {
    getCurrentUser();
  }, [])


  // allows the user to login and redirects to their landing page
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
        setUser(data);

        // redirects user based on whether they are admin or
        // just a worker
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

  // saves what the user inputs for login
  const handleChange = (event) => {
    setValues(previous_values => {
      return ({
        ...previous_values,
        [event.target.name]: event.target.value
      });
    });
  }

  const hideModal = (e) => {
    if (e.target == modal) {
      // Hides modal if you click outside of the modal__content box
      setModalVisible(false)
    }
  }

  const showModal = () => {
    // Shows modal
    setModalVisible(true)
  }

  useEffect(() => {
    (modalVisible != null) && setModalOpaque(!modalOpaque)
  }, [modalVisible])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        {/* login form */}
        <h1>- Login -</h1>
        <form id='login-form' action="/login" method="post" onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' value={values.email} onChange={handleChange} />

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' value={values.password} onChange={handleChange} />

          <button id='login' name='login'>Login</button>

          <span id='register' onClick={showModal}>Register</span>
          {/* <span id='get-user' onClick={async function () {
            const response = await axios('/api/worker');
            console.log(response);
          }}>Get current user</span> */}
        </form>

        {/* code for registraton modal, only shows if register has been clicked */}
        {
          modalVisible ?
            <div id='modal' className={'modal' + (modalOpaque ? ' modal-opaque' : '')} onClick={hideModal}>
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