import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

  // storage for all workers
  const [workers, setWorkers] = useState([]);

  // storage for currently selected user in worker dropdown 
  const [selectedWorkerId, setSelectedWorkerId] = useState([]);

  // gets workers from the database
  const getWorkers = async () => {
    const api = '/api/work-party';
    const response = await axios(api);
    setWorkers(response.data);
  }

  // executes when page loads
  useEffect(() => {
    getWorkers();
  }, [])

  // switches selected worker when admin uses the worker dropdown
  const handleChange = (event) => {
    setSelectedWorkerId(event.target.value);
  }

  // redirects to selected worker's records page
  const goToWorkerRecords = (event) => {
    event.preventDefault();
    const workerRecordsPage = `/records/${selectedWorkerId}`;
    window.location.replace(workerRecordsPage);
  }

  return (
    <>
      {/* worker dropdown menu that allows admin to go look at each worker's detail page */}
      <h2 className='worker-title'>- View Worker Exposure Records -</h2>
      <form id='worker-dropdown-form' method="get" onSubmit={goToWorkerRecords}>
        <label htmlFor='selectWorker'>Select Worker: </label>
        <select id="selectWorker" name="selectWorker" onChange={handleChange}>
          {
            // populates the dropdown
            workers.map(worker => {
              return <option key={worker.id} value={worker.id}>{worker.first_name} {worker.last_name}</option>
            })
          }
        </select>
        <br />
        <button id='goToWorkerRecords' name='goToWorkerRecords'>View Records</button>
      </form>
    </>
  )
}