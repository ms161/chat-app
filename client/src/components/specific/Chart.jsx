import React from 'react'
import { Line, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs, Tooltip, Filler, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Legend, plugins } from 'chart.js'
import { orange, purple, purpleLight } from '../../constants/color'
import { getLast7Days } from '../../lib/features'

ChartJs.register(Tooltip, Filler, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Legend)

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            beginsAtZero: true,
            grid: {
                display: false
            }
        }
    }
}

const last7days = getLast7Days()
console.log(last7days)

const LineChart = ({ value = [1, 350, 34, 35] }) => {
    const data = {
        labels: last7days,
        datasets: [{
            data: value,
            label: 'Dataset 1',
            fill: true,
            borderColor: purple,
            backgroundColor: purpleLight
        }
        ]
    }
    return (
        <Line data={data} options={lineChartOptions} />
    )
}

const doughnutChartOptions={
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        }
    }
}

const DoughnutChart = ({value=[12,21,4,21], labels=[]}) => {
    const data = {
        labels ,
        datasets: [{
            data: value,
            label: 'Total Chats vs Group Chats',
            backgroundColor: [purpleLight,orange],
            borderColor: [purple,orange],
            offset:15
        }
        ]
    }
    return (
       <Doughnut data={data} options={doughnutChartOptions} />
    )
}

export { LineChart, DoughnutChart }
