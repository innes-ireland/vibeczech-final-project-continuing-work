import { useState } from "react";

export default function MinuteCount({ minuteCount, setMinuteCount }) {

    function changeMinute(amount) {
        if (minuteCount < 45 && minuteCount >= 0) {
            setMinuteCount(minuteCount => minuteCount + amount)
        }
    }


    function resetMinuteCount() {
        setMinuteCount(0)

    }

    return (
        <>
            <button onClick={() => changeMinute(15)}>+15 min </button>
            <span> {minuteCount}</span>
            <button onClick={() => changeMinute(-15)}>-15 min</button>
            <button onClick={() => resetMinuteCount()}> reset</button>
        </>
    )
}