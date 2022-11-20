export default function Calculator(hourCount, MinuteCount, product, setProduct) {

    function calculate() {
        setProduct(product => product + ((hourCount + (MinuteCount / 60)) * (vibrationMagnitude * vibrationMagnitude)))
    }
    return (

        <button onClick={calculate}> Calculate Vibration</button>

    )
}