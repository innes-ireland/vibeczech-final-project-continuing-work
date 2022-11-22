import { useState } from "react";
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


    return (
        <>
            <button onClick={saveToPlan}> save to plan</button>

            <ul>
                {planObjects.map(planObject => {

                    return <li>
                        Worker: {planObject.name}   Vibration Exposure:{planObject.exposureLevel} <button type="button"> X</button>
                    </li>


                })}


            </ul>
        </>
    )

}


