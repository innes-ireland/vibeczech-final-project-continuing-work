import { useState } from "react";
import HourCount from "./HourCount";
import MinuteCount from "./MinuteCount";
export default function SaveToPlan({ product, user, planObjects, setPlanObjects }) {
    const saveToPlan = (event) => {

        event.preventDefault()

        let new_entry = {
            id: planObjects.length,
            name: user,
            exposureLevel: product,

        }


        let new_array = planObjects.concat(new_entry)
        setPlanObjects(new_array);


        // setPlanObjects(new_array);

        // console.log(new_array)

    };
    function removeWorker(id) {
        const remainingWorkers = planObjects.filter((object) => id)

    }
    function sendToDatabase() {
        // let exposureInstanceData = {
        //     id: exposureInstanceData.length,
        //     user_id: user.id, 
        //     exposure_value: product,
        //     exposure_start: " ",
        //     exposure_finish: " ",
        //     duration_minutes: hourCount + (minuteCount/60) 
        // } // exposure instance data set according to the model
        return (
            <form>
                <input type="hidden" name="user_id" value={worker.id}></input>
                <input type="hidden" name="exposure_value" value={product}></input>
                <input type="hidden" name="duration_minutes" value={hourCount + (minuteCount / 60)}></input>
                <input type="dateTime" name="exposure_start" value="dateTime"></input>
                <input type="dateTime" name="exposure_finish" value="dateTime"></input>
                <button type="submit"> submit record </button>

            </form>
        )



    }


    return (
        <>
            <button onClick={saveToPlan}> save to plan</button>

            <ul>
                {planObjects.map(planObject => {

                    return <li>
                        Worker: {planObject.name}   Vibration Exposure:{planObject.exposureLevel} <button type="button"> X</button><button onClick={sendToDatabase()}>send to DB</button>
                    </li>


                })}


            </ul>
        </>
    )

}


