import { useState } from "react";
import HourCount from "./HourCount";
import MinuteCount from "./MinuteCount";
export default function SaveToPlan({ product, user, planObjects, setPlanObjects, hourCount, minuteCount, tool }) {
    const [exposureInstanceValues, setExposureInstanceValues] = useState({
        plan_id: '',
        user_id: '',
        exposure_value: '',
        exposure_start: '',
        exposure_finish: '',
        duration_minutes: '',
        tool_id: '',
    }) // default values are empty, all values needed to populate DB columns are here
    const saveToPlan = (event) => {





        event.preventDefault()
        console.log(user);
        let new_entry = {
            id: planObjects.length,
            name: user.first_name,
            exposureLevel: product

        }


        let new_array = planObjects.concat(new_entry)
        setPlanObjects(new_array);


        // setPlanObjects(new_array);

        // console.log(new_array)

    };
    function removeWorker(id) {
        const remainingWorkers = planObjects.filter((planObject) => planObject.id !== id) // on click the button filters through the array with id 
        setPlanObjects(remainingWorkers) // state is set to the new array rendered by filtering 

    }

    function populateTable() {



    }

    // }


    const handleSubmitInstance = async (event) => {
        event.preventDefault();

        let completedInstance = {
            plan_id: '',
            user_id: user.id,
            exposure_value: product,
            exposure_start: '',
            exposure_finish: '',
            duration_minutes: hourCount + (minuteCount / 60),
            tool_id: '',
        }

        console.log(completedInstance);


        // making the AJAX request
        const response = await fetch('/api/exposure-instance/add', {
            method: 'POST',
            body: JSON.stringify(completedInstance),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        // parsing the response as JSON
        const response_data = await response.json();
        // setSuccessMessage('Tool was successfully added');
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






    return (
        <>
            <div className="save_line">
                <button onClick={saveToPlan}> Save Plan</button>
            </div>
            <div className="current_plan">
                <ul>
                    {planObjects.map(planObject => {

                        return <li>
                            Worker: {planObject.name} |  Vibration Exposure:{planObject.exposureLevel}

                            <button type="button" className="remove" onClick={() => { removeWorker(planObject.id) }}> X</button>

                            <button onClick={(event) => { handleSubmitInstance(event) }}>Send to DB</button>
                        </li>


                    })}


                </ul>
            </div>
        </>
    )

}


