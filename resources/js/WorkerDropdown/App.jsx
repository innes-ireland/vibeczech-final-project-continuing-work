import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

  const [workers, setWorkers] = useState([]);
  const [selectedWorkerId, setSelectedWorkerId] = useState([]);

  const getWorkers = async () => {
    const api = '/api/work-party';
    const response = await axios(api);
    setWorkers(response.data);
    console.log('Workers:')
    console.log(response.data);
  }

  useEffect(() => {
    getWorkers();
  }, [])

  //   const handleSubmit = async (event) => {

  //   event.preventDefault();

  //   // with axios
  //   try {
  //     // make the AJAX request
  //     const response = await axios.post('/login', values);
  //     // get the (already JSON-parsed) response data
  //     const response_data = response.data;

  //     try {
  //       const response = await axios.get('/api/user');
  //       const data = response.data;
  //       setUser(data);

  //       data && data.is_admin
  //         ?
  //         window.location.replace('/admin')
  //         :
  //         window.location.replace('/worker')
  //     }
  //     catch (err) {
  //       console.log(err);
  //     }

  //   } catch (error) {
  //     // if the response code is not 2xx (success)
  //     switch (error.response.status) {
  //       case 422:
  //         // handle validation errors here
  //         console.log('VALIDATION FAILED:', error.response.data.errors);
  //         break;
  //       case 500:
  //         console.log('UNKNOWN ERROR', error.response.data);
  //         break;
  //     }
  //   }
  // }

  const handleChange = (event) => {

    setSelectedWorkerId(event.target.value);
  }

  const goToWorkerDetail = (event) => {
    event.preventDefault();
    const workerDetailPage = `/worker/${selectedWorkerId}`;

    console.log('Page url:');
    console.log(workerDetailPage);
    window.location.replace(workerDetailPage);
  }

  return (
    <>
      {console.log('selected worker:')}
      {console.log(selectedWorkerId)}
      <h4>- View Worker Exposure Records -</h4>
      <form id='worker-dropdown-form' method="get" onSubmit={goToWorkerDetail}>
        <label htmlFor='selectWorker'>Select Worker:</label>
        <select id="selectWorker" name="selectWorker" onChange={handleChange}>
          {
            workers.map(worker => {
              return <option key={worker.id} value={worker.id}>{worker.first_name} {worker.last_name}</option>
            })
          }
        </select>

        <button id='goToWorkerDetail' name='goToWorkerDetail'>View Exposure Records</button>
      </form>
    </>
  )
}