import { useState } from "react";
import HourCount from "./HourCount";
import MinuteCount from "./MinuteCount";
export default function SaveToPlan({ product, setProduct, user, planObjects, setPlanObjects, setHourCount, hourCount, setMinuteCount, minuteCount, tool }) {
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
            name: 'Operator',
            exposureLevel: product

        }


        let new_array = planObjects.concat(new_entry)
        setPlanObjects(new_array);

        setProduct(0)
        setHourCount(0)
        setMinuteCount(0)


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
                <button onClick={saveToPlan}> Visualise</button>
            </div>
            <div className="current_plan">
                <ul>
                    {planObjects.map(planObject => {

                        return <li>
                            {planObject.name} |  Vibration Exposure:{planObject.exposureLevel}

                            <button type="button" className="remove" onClick={() => { removeWorker(planObject.id) }}> X</button>


                        </li>


                    })}


                </ul>
            </div>
        </>
    )

}