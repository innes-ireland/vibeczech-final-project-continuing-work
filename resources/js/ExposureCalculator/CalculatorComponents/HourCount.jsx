import { useState, } from "react"
//export const hourValue = React.createContext(setHourCount);
export default function HourCount({ hourCount, setHourCount }) {




    function changeHour(amount) {
        if (hourCount + 1 > 0 && hourCount <= 8)
            setHourCount(hourCount => hourCount + amount)

    }

    function resetHourCount() {
        setHourCount(0)
    }


    return (
        <>

            <button onClick={() => changeHour(1)}> +1 Hour</button>
            <span>{hourCount}</span>
            <button onClick={() => changeHour(-1)}> -1 Hour </button>
            <button onClick={() => resetHourCount}> reset</button>
        </>

    )
}