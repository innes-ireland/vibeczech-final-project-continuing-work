import { useState } from "react"
export default function SubmitInstance(product, hourCount, minuteCount) {



    function populateValues() {
        const values = ({
            user_id: '',
            exposure_value: '',
            exposure_start: '',
            exposure_finish: '',
            duration_minutes: '',
            tool_id: '',

        })


        values.append('user_id',)
        values.append('exposure_value', product)
        values.append('duration_minutes', hourCount + (minuteCount / 60))

    }

    const handleSumbit = async (event) => {
        event.preventDefault();
        const response = await fetch('api/exposure-instance/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        // parsing the response as JSON
        const response_data = await response.json();

        setSuccessMessage('Exposure instance added to database');

    }

    return (<>
        <div>
            <button onClick={populateValues()}>save to form </button>
            {console.log(values)}
            <form action='/api/exposure-instance' method='POST'>
                <input type="hidden" name='user_id' value={values.user_id}></input>
                <input type="exposure_value" name="exposure_value" value={values.exposure_value}></input>
                <input type="hidden" name="duration" value={values.duration_minutes}></input>
                <input type="hidden" name="tool_id" value={values.tool_id}></input>
                <input type="submit"> send to database</input>

            </form>
        </div>
    </>
    )

}