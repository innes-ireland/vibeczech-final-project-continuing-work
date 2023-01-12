import { useState, useEffect } from 'react';
import axios from 'axios';
import ToolSelector from './WorkerExposureCalculator/ToolSelector';
import HourCount from './WorkerExposureCalculator/HourCount';
import MinuteCount from './WorkerExposureCalculator/MinuteCount';
import Calculator from './WorkerExposureCalculator/WorkerCalculator';
import SaveToPlan from './WorkerExposureCalculator/SaveToPlan';
import DisplayGraph from './WorkerExposureCalculator/DisplayGraph';

export default function Worker() {

  const [minuteCount, setMinuteCount] = useState(0);
  const [hourCount, setHourCount] = useState(0);
  const [vibrationMagnitude, setVibrationMagnitude] = useState(0);
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(0);
  const [planObjects, setPlanObjects] = useState([])
  const [exposure, setExposure] = useState([]);
  const [tool, setTool] = useState([]);
  const [graphData, setGraphData] = useState({})

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
      <div className='contents'>
        {console.log(exposure)}

        <div className='instance_table'>
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
        <div className='visualiser'>
          <h2> Exposure Calculator</h2>
          <div className='workerCalculator'>
            <div className="selectors">

              <ToolSelector vibrationMagnitude={vibrationMagnitude} setVibrationMagnitude={setVibrationMagnitude} />
            </div>
            <div className="hour">
              <HourCount hourCount={hourCount} setHourCount={setHourCount} />
            </div>
            <div className="minute">
              <MinuteCount minuteCount={minuteCount} setMinuteCount={setMinuteCount} />
            </div>
            {/* </SelectorBox> */}
            <div className="calc_line">
              <Calculator product={product} setProduct={setProduct} hourValue={hourCount} minuteCount={minuteCount} vibrationMagnitude={vibrationMagnitude} />
            </div>
            <SaveToPlan product={product} setProduct={setProduct} user={user} planObjects={planObjects} setPlanObjects={setPlanObjects} hourCount={hourCount} setHourCount={setHourCount} minuteCount={minuteCount} setMinuteCount={setMinuteCount} />
          </div>
          <div className="graph">
            <DisplayGraph graphData={graphData} setGraphData={setGraphData} planObjects={planObjects} />
          </div>
        </div>

      </div>
    </div>


  )
}