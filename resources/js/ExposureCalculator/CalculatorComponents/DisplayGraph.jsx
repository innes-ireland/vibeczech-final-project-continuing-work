import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";





export default function DisplayGraph({ planObjects, graphData, setGraphData }) {




    const [labels, setLabels] = useState([]);



    const [dataSets, setDataSets] = useState({
        label: "HAVs exposure levels",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [],
    });







    useEffect(() => {


        let temp_arr = [] // temp_arr allows for continual updating of list as opposed to reseting with each new label added to chart
        let label_arr = [] // label_arr required for chart.js formating
        planObjects.forEach((planObject) => {
            label_arr.push(planObject.name)
            console.log(label_arr)
            temp_arr.push(planObject.exposureLevel)



        })


        setDataSets(dataSetsprev => {

            return ({
                ...dataSetsprev,
                data: temp_arr
            });

        })


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



