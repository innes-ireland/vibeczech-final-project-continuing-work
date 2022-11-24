import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

  const [exposure, setExposure] = useState([]);
  const workerId = document.getElementById('worker-id-var-for-react').getAttribute("name");
  console.log('This should be the worker ID from laravel:')
  console.log(workerId);


  //-------getting data to populate table from exposure instance table-------
  const loadExposure = async () => {

    // Getting data with axios
    try {
      const response = await axios.get('/api/exposure/' + workerId);
      setExposure(response.data);
      console.log('This should be the worker exposure record:')
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    loadExposure();
  }, [])

  const goBackToAdmin = (event) => {

    event.preventDefault();
    window.location.replace('/admin');
  }

  //-------getting data to populate table from exposure instance table-------




  return (

    <>

      <button id='goBackToAdmin' name='goBackToAdmin' onClick={(e) => { goBackToAdmin(e) }}>Back to Admin Page</button>
      <div>

        {console.log(exposure)}


        <h2>Personal Data:</h2>
        <table>
          <tr>
            <th>Start Date</th>
            <th>Tool</th>
            <th>Exposure Value</th>
            <th>Duration</th>
          </tr>
          {
            exposure.map(exp => {
              return <tr key={exp.id}>
                <td>{exp.exposure_start}</td>
                <td>{exp.tool?.name}</td>
                <td>{exp.exposure_value}</td>
                <td>{exp.duration_minutes} hours</td>
                <td> <a href={'/show-record/' + exp.id}>Edit</a></td>
              </tr>
            })
          }

        </table>

      </div>
    </>

  )
}