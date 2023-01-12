import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";





export default function DisplayGraph({ planObjects, graphData, setGraphData }) {




    const [labels, setLabels] = useState([]);
    const [colors, setColors] = useState([]);



    const [dataSets, setDataSets] = useState({
        label: "HAVs exposure levels",
        backgroundColor: [],
        borderColor: [],
        data: [],
    });




    // function setDynamicColors(){
    //     let dynamicColors = []
    //     for (let i = 0; i < dataSets.data.length; i++) {
    //     if (dataSets.data[i] < 320) { dynamicColors.push('green') }
    //     if (dataSets.data[i] >= 320 && dataSets.data[i] < 400) {
    //         dynamicColors.push('yellow')
    //     }
    //     if (dataSets.data[i] >= 400) { dynamicColors.push('red') }
    //     console.log(dynamicColors)
    //     setColors(dynamicColors)
    // }}



    useEffect(() => {



        let temp_arr = [] // temp_arr allows for continual updating of list as opposed to reseting with each new label added to chart
        let label_arr = [] // label_arr required for chart.js formating
        let colors_arr = []
        planObjects.forEach((planObject) => {
            label_arr.push(planObject.name)
            temp_arr.push(planObject.exposureLevel)
            if (planObject.exposureLevel > 400) {
                colors_arr.push('red');
                alert('You are over safe limit (400)')
            }
            if (planObject.exposureLevel >= 320) {
                colors_arr.push('yellow');
                alert('You are at over 80% of safe limit (400)')
            }
            if (planObject.exposureLevel < 320) {
                colors_arr.push('green')
            }






        },)


        setDataSets(dataSetsprev => {

            return ({
                ...dataSetsprev,
                data: temp_arr,
                backgroundColor: colors_arr,
                borderColor: colors_arr,
            });

        })

        console.log(dataSets)
        setLabels(label_arr)

        setGraphData({
            labels: label_arr,
            datasets: [dataSets]
        })





    }, [planObjects])
    return (
        <Bar data={{
            labels: labels,
            datasets: [dataSets]

        }}
        />



    )



}

