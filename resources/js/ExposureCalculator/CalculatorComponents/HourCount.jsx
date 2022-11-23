import { useState, } from "react"
//export const hourValue = React.createContext(setHourCount);
export default function HourCount({ hourCount, setHourCount }) {




    function incrementHour(amount) {
        if ((hourCount + 1) > 0 && hourCount < 8)
            setHourCount(hourCount => hourCount + amount)

    }
    function decrementHour(amount) {
        if (hourCount > 0)
            setHourCount(hourCount => hourCount - amount)
    }

    function resetHourCount() {
        setHourCount(0)
    }


    return (
        <>

            <button onClick={() => incrementHour(1)}> +1 Hour</button>
            <span>{hourCount}</span>
            <button onClick={() => decrementHour(1)}> -1 Hour </button>
            <button onClick={() => resetHourCount()}> reset</button>
        </>

    )
}