import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
type LineElementCProp = {
  customValue: number;
};
export default function LineElementC({ customValue }: LineElementCProp) {
  const data = {
    labels: [
      "0%",
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%",
    ],
    datasets: [
      {
        data: [
          100 + customValue,
          200 + customValue,
          300 + customValue,
          400 + customValue,
          300 + customValue,
          200 + customValue,
          300 + customValue,
          250 + customValue,
          280 + customValue,
          350 + customValue,
          0 + customValue,
        ],
        backgroundColor: "transparent",
        borderColor: "black",
        tension: 0.3,
        pointRadius: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        min: "0%",
        max: "100%",
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 600,
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  ChartJS.register(
    LineElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    PointElement
  );
  return <Line data={data} options={options} />;
}
