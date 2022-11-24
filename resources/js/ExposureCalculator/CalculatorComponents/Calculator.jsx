export default function Calculator({ product, setProduct, hourValue, minuteCount, vibrationMagnitude }) {




    function calculate() { setProduct(product => product + (((hourValue + (minuteCount / 60)) * (vibrationMagnitude * vibrationMagnitude)))) }

    function clearCalculator() {
        setProduct(0)
    }



    return (
        <>
            <button onClick={() => {

                calculate()
            }}> Calculate</button>
            <span> {product} </span>

            <button className="reset" onClick={clearCalculator}> Clear</button>

        </>
    )
}