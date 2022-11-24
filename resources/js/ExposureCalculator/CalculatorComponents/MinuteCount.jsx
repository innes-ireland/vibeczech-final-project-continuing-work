import { useState } from "react";

export default function MinuteCount({ minuteCount, setMinuteCount }) {

    function incrementMinute(amount) {
        if (minuteCount < 45) {
            setMinuteCount(minuteCount => minuteCount + amount)
        }
    }
    function decrementMinute(amount) {
        if (minuteCount > 0) {
            setMinuteCount(minuteCount => minuteCount - amount)
        }
    }


    function resetMinuteCount() {
        setMinuteCount(0)

    }

    return (
        <>
            <button onClick={() => incrementMinute(15)}>+15 Min </button>
            <span> {minuteCount}</span>
            <button onClick={() => decrementMinute(15)}>-15 Min</button>
            <button className="reset" onClick={() => resetMinuteCount()}> Reset</button>
        </>
    )
}