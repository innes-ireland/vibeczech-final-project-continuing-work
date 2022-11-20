export default function HourCount({ minuteCount, setMinuteCount }) {




    function changeMinute(amount) {
        if (minuteCount >= 0 && minuteCount < 45)
            setMinuteCount(minuteCount => minuteCount + amount)

    }

    function resetHourCount() {
        setHourCount(0)
    }


    return (
        <>

            <button onClick={() => changeMinute(15)}> +15 minutes</button>
            <span>{hourCount}</span>
            <button onClick={() => changeMinute(-15)}> -15 minutes </button>
            <button onClick={() => resetHourCount}> reset</button>
        </>

    )
}