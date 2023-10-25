import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart({ value }: { value: number }) {
  const total = 15;
  const filledPercentage = (value / total) * 100;
  const unfilledPercentage = 100 - filledPercentage;

  const data = {
    datasets: [
      {
        data: [filledPercentage, unfilledPercentage],
        backgroundColor: ["#438AF6", "rgba(67, 138, 246, 0.1)"],
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
