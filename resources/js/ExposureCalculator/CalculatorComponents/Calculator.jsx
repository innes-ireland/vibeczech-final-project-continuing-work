export default function Calculator({ product, setProduct, hourValue, minuteCount, vibrationMagnitude }) {




    function calculate() { setProduct(product => product + (((hourValue + (minuteCount / 60)) * (vibrationMagnitude * vibrationMagnitude)))) }

    function clearCalculator() {
        setProduct(0)
    }



    return (
        <>
            <button onClick={() => {

                calculate()
            }}> Calculate Vibration</button>
            <span> {product} </span>

            <button onClick={clearCalculator}> clear</button>

        </>
    )
}