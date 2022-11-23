import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Worker() {

  const [user, setUser] = useState(null);
  const [exposure, setExposure] = useState([]);
  // const [tool, setTool] = useState([]);

  const getCurrentUser = async function () {
    const response = await axios('/api/user');
    setUser(response.data)
    console.log(response.data.is_admin);

  };

  useEffect(() => {
    getCurrentUser();
  }, [])




  //-------getting data to populate table from exposure instance table-------
  const loadExposure = async () => {

    // Getting data with axios
    try {
      const response = await axios.get('/api/exposure/' + user.id);
      setExposure(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (user) {

      loadExposure();
    }
  }, [user])

  //-------getting data to populate table from exposure instance table-------




  return (

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
              {/* below is edit button only appears for admins: */}
              {/* {
                                (user !== null && user.is_admin == '1')
                                    ? < td > <a>Edit</a></td >
                                    : <></>
                            } */}
              {/* above is edit button only appears for admins: */}
            </tr>
          })
        }

      </table>

    </div>

  )
}