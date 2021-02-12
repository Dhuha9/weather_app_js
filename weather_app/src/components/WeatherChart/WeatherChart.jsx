import React from 'react';
// import ReactApexChart from 'react-apexcharts'
import Chart from 'chart.js';
import { Line } from '@reactchartjs/react-chart.js'



const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: '# of No Votes',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
}

const WeatherChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Multi Axis Line Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/MultiAxisLine.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
)


export default WeatherChart


// class WeatherChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [{
//         name: 'Likes',
//         data: [0, 2, 4, 10, 8, 10, 22, 7, 13, 5, 2]
//       },
//     ],
//       options: {
//         chart: {
//           height: 350,
//           type: 'line',
//         },
//         stroke: {
//           width: 7,
//           curve: 'smooth'
//         },
//         xaxis: {
//           type: 'datetime',
//           categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', 
//           '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000'],
//           tickAmount: 10,
//           labels: {
//             formatter: function(value, timestamp, opts) {
//               return opts.dateFormatter(new Date(timestamp), 'MMM-dd hh:mm ')
//             }
//           }
//         },
//         title: {
//           text: 'Social Media',
//           align: 'left',
//           style: {
//             fontSize: "16px",
//             color: '#666'
//           }
//         },
//         fill: {
//           type: 'gradient',
//           gradient: {
//             shade: 'dark',
//             gradientToColors: [ '#FDD835'],
//             shadeIntensity: 1,
//             type: 'horizontal',
//             opacityFrom: 1,
//             opacityTo: 1,
//             stops: [0, 100, 100, 100]
//           },
//         },
//         markers: {
//           size: 4,
//           colors: ["#FFA41B"],
//           strokeColors: "#fff",
//           strokeWidth: 2,
//           hover: {
//             size: 7,
//           }
//         },
//         yaxis: {
//           min: 0,
//           max: 30,
//           title: {
//             text: 'Engagement',
//           },
//         },
//       },
//     };
    
//   }


//   render() {
//     return (
//         <div id="chart">
//         <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} width={1550} />
//         </div>
//     );
//   }
// }

// export default WeatherChart


