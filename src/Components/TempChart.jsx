import React, { useContext } from "react";
import { AppContext } from "../App";
import { Line } from "react-chartjs-2";
import moment from "moment";

const TempChart = () => {
  const { weather } = useContext(AppContext);
  const days = weather.forecast.forecastday.map((item) =>
    moment(item.date).format("ddd")
  );
  const temps = weather.forecast.forecastday.map((item) => item.day.avgtemp_c);

  const data = {
    labels: days,
    datasets: [
      {
        label: "Avg temp",
        data: temps,
        fill: false,
        backgroundColor: "#89defa",
        borderColor: "white",
        fontColor: "#ffff",
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: "##ffffff",
      },
    },
    scales: {
      yAxes: [
        {
          labelString: "Avg temp",
          ticks: {
            beginAtZero: true,
            fontColor: "#FFFFFF",
          },
        },
      ],
    },
  };

  return (
    <div className="flex flex-col w-11/12 items-center text-white p-6 rounded-3xl mb-6">
      <h1 className="title">Avg Temp Chart</h1>

      <Line data={data} options={options} />
    </div>
  );
};

export default TempChart;
