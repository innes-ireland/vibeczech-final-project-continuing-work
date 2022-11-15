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
    <form action="/register" method="post" onSubmit={handleSubmit}>

      First name:<br />
      <input type="text" name="first_name" value={values.first_name} onChange={handleChange} /><br />

      Surname:<br />
      <input type="text" name="last_name" value={values.last_name} onChange={handleChange} /><br />

      Email:<br />
      <input type="email" name="email" value={values.email} onChange={handleChange} /><br />

      Username:<br />
      <input type="text" name="username" value={values.username} onChange={handleChange} /><br />

      Phone:<br />
      <input type="text" name="phone_number" value={values.phone_number} onChange={handleChange} /><br />

      Password:<br />
      <input type="password" name="password" value={values.password} onChange={handleChange} /><br />

      Confirm Password:<br />
      <input type="password" name="password_confirmation" value={values.password_confirmation} onChange={handleChange} /><br />

      <button>Register</button>

    </form>
  );
}