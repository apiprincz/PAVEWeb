import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

const Charts = (props) => {
  const [labels, setLabels] = useState(["Succesful Scans", "Failed Scans"]);
  console.log(props);

  const [datasets, setDatasets] = useState([
    {
      label: "Scan",
      backgroundColor: ["#12504A", "#5A221B"],
      hoverBackgroundColor: ["#12504A", "#5A221B"],
      data: [props.completedData, `${props.failedData}`],
    },
  ]);
  console.log(datasets);

  return (
    <div>
      <Doughnut
        data={{ labels, datasets }}
        options={{
          title: {
            display: true,
            fontSize: 20,
          },

          legend: {
            display: false,
            position: "absolute",
          },
        }}
        height={300}
      />
    </div>
  );
};

export default Charts;

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//         '#00A6B4',
//         '#6800B4'
//       ],
//       hoverBackgroundColor: [
//       '#501800',
//       '#4B5000',
//       '#175000',
//       '#003350',
//       '#35014F'
//       ],
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

// export default class Chart extends React.Component {
//   render() {
//     return (
//       <div>

//         <Doughnut
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }
