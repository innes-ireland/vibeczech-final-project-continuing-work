import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Register(props) {

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    phone_number: '',
    password: '',
    password_confirmation: ''
  })

  const handleSubmit = async (event) => {

    event.preventDefault();

    console.log("submitting");
    // console.log(axios)

    // with axios
    try {
      // make the AJAX request
      const response = await axios.post('/register', values);
      // get the (already JSON-parsed) response data
      const response_data = response.data;
      props.setModalVisible(false);
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

  const handleChange = (event) => {
    setValues(previous_values => {
      return ({
        ...previous_values,
        [event.target.name]: event.target.value
      });
    });
  }

  return (
    <form id='register-form' action="/register" method="post" onSubmit={handleSubmit}>
      <div className='register__container'>

        <div className='register__container-name_label'>
          <label htmlFor='first_name'>First name:</label>
          <label htmlFor='last_name'>Surname:</label>
        </div>


        <div className='register__container-name_input'>
          <input type="text" name="first_name" value={values.first_name} onChange={handleChange} />
          <input type="text" name="last_name" value={values.last_name} onChange={handleChange} />
        </div>


        <div className='register__container-info_label'>
          <label htmlFor='username'>Username:</label>
          <label htmlFor='email'>Email:</label>
        </div>


        <div className='register__container-info_input'>
          <input type="text" name="username" value={values.username} onChange={handleChange} />
          <input type="email" name="email" value={values.email} onChange={handleChange} />
        </div>


        <div className='register__container-phone_label'>
          <label htmlFor='phone_number'>Phone:</label>
        </div>


        <div className='register__container-phone_input'>
          <input type="text" name="phone_number" value={values.phone_number} onChange={handleChange} />
        </div>


        <div className='register__container-pw_label'>
          <label htmlFor='password'>Password:</label>
          <label htmlFor='password_confirmation'>Confirm:</label>
        </div>


        <div className='register__container-pw_input'>
          <input type="password" name="password" value={values.password} onChange={handleChange} />
          <input type="password" name="password_confirmation" value={values.password_confirmation} onChange={handleChange} />
        </div>

      </div>

      <button id='register_button'>Register</button>

    </form>
  );
}