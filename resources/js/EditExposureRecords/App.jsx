import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  // storage for tools in dropdown
  const [tools, setTools] = useState([]);
  // storage for current tool object referenced in "old" record 
  const [currentToolId, setCurrentToolId] = useState(0);

  // "old" record
  const [record, setRecord] = useState([])
  // record as we wish it to be
  const [editedRecord, setEditedRecord] = useState({})

  const recordId = document.getElementById('record-id-var-for-react').getAttribute("name");

  const findToolByID = (id) => {
    return tools.find((tool) => {
      return tool.id === id;
    })
  }

  //-------getting data to populate tool dropdown from tools table-------
  const loadTools = async () => {
    // Getting data with axios
    try {
      const response = await axios.get('/api/tools');
      setTools(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const loadRecord = async () => {
    // Getting data with axios
    try {
      const response = await axios.get('/api/exposure-detail/' + recordId);
      setRecord(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadTools();
    loadRecord();
  }, [])

  useEffect(() => {
    if (record && tools) { setCurrentToolId(record.tool_id) }
    if (record) {
      setEditedRecord({
        plan_id: record.plan_id,
        user_id: record.user_id,
        exposure_value: record.exposure_value,
        exposure_start: record.exposure_start,
        exposure_finish: record.exposure_finish,
        duration_minutes: record.duration_minutes,
        tool_id: record.tool_id,
      })
    }
  }, [tools, record])

  // setCurrentTool(findToolByID(record.tool_id));
  // console.log(currentTool.name);

  // // switches selected tool when admin uses the tool dropdown
  // const handleToolChange = (event) => {
  //   setSelectedToolId(event.target.value);
  //   console.log(selectedToolId);
  // }

  // ---------- handling changes in the form and submitting them

  const handleChange = (event) => {
    setEditedRecord(previous_values => {
      return ({
        ...previous_values,
        [event.target.name]: event.target.value
      });
    });
    if (event.target.name == "tool_id") { setCurrentToolId(event.target.value) }
  }

  const handleSubmit = async (event) => {

    event.preventDefault();

    // making the AJAX request
    const response = await fetch(('/edit-record/' + recordId), {
      method: 'POST',
      body: JSON.stringify(editedRecord),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    });

    // parsing the response as JSON
    const response_data = await response.json();

    setSuccessMessage('Record was successfully updated');

    // if the response code is not 2xx(success)
    if (Math.floor(response.status / 100) !== 2) {
      switch (response.status) {
        case 422:
          // handle validation errors here
          console.log('VALIDATION FAILED:', response_data.errors);
          break;
        default:
          console.log('UNKNOWN ERROR', response_data);
          break;
      }

    }

  }

  const goBackToWorkerRecords = (event) => {

    event.preventDefault();
    window.location.replace('/records/' + record.user_id);
  }

  // ---------- form for editing exposure instance record

  return (

    <>
      <button id='goBackToAdmin' name='goBackToAdmin' onClick={(e) => { goBackToWorkerRecords(e) }}>Back to Exposure Records</button>

      <div className="edit_record_form">
        <form action="/" method="post">

          <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>" />

          {/* -------getting data to populate tools dropdown from tools table------- */}
          {/* ------think I need some kind of placeholder or other way to say what the current tool is */}


          Tool (currently):<br />
          <select id="selectTool" name="tool_id" onChange={handleChange} value={currentToolId}>
            {
              // populates the dropdown with tools
              tools.map(tool => {
                return <option key={tool.id} value={tool.id}>{tool.name}</option>
              })
            }
          </select>
          <br />

          Exposure Value:<br />
          <input className='edit-record-form-input' type="text" name="exposure_value"
            value={editedRecord.exposure_value}
            onChange={handleChange}
          // placeholder={record.exposure_value}
          />
          <br />

          Duration in Hours:<br />
          <input className='edit-record-form-input' type="text" name="duration_minutes"
            value={editedRecord.duration_minutes}
            onChange={handleChange}
          // placeholder={record.duration_minutes}
          />
          <br />

          <button id='updateExposureRecord' name='updateExposureRecord' onClick={(e) => {
            handleSubmit(e)
            goBackToWorkerRecords(e)
          }}>Update Exposure Record</button>

        </form>

      </div>
    </>

  )
}