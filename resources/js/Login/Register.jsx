import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Register(props) {

  // allows user inputs to be stored
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    phone_number: '',
    password: '',
    password_confirmation: ''
  })

  // allows the user to register and redirects to worker landing page
  // no one can be admin upon registering, so it never redirects to /admin
  const handleSubmit = async (event) => {

    event.preventDefault();

    console.log("submitting");
    // with axios
    try {
      // make the AJAX request
      const response = await axios.post('/register', values);
      // get the (already JSON-parsed) response data
      const response_data = response.data;
      props.setModalVisible(false);
      // redirects user to /worker after registration
      window.location.replace('/worker');
    } catch (error) {
      console.log(error);
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

  // saves what the user inputs for registration
  const handleChange = (event) => {
    setValues(previous_values => {
      return ({
        ...previous_values,
        [event.target.name]: event.target.value
      });
    });
  }

  return (
    // registration form
    <form id='register-form' action="/register" method="post" onSubmit={handleSubmit}>
      <div className='register__container'>

        <input type="text" name="first_name" placeholder="First Name" value={values.first_name} onChange={handleChange} />
        <input type="text" name="last_name" placeholder="Surname" value={values.last_name} onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" value={values.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
        <input type="text" name="phone_number" placeholder="Phone Number" value={values.phone_number} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
        <input type="password" name="password_confirmation" placeholder="Confirm Password" value={values.password_confirmation} onChange={handleChange} />

      </div>

      <button id='register_button'>Register</button>

    </form>
  );
}