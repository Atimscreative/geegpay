/* eslint-disable no-unused-vars */
import { Chart as ChartJs, defaults } from "chart.js/auto";
import Data from "../datas/data.json";
import { Bar } from "react-chartjs-2";

// GRADIENT BARS
let width, height, gradient, gradientHover;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(52, 202, 165, 0)");
    gradient.addColorStop(1, "rgba(52, 202, 165)");
  }
  return gradient;
}

function getGradientHover(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(52, 202, 165, 0)");
    gradient.addColorStop(1, "rgba(255, 202, 165, 0.5)");
  }

  return gradientHover;
}

// DEFAULTS
defaults.maintainAspectRatio = false;
defaults.responsive = true;

// eslint-disable-next-line react/prop-types
const BarChart = ({ theme }) => {
  return (
    <>
      <Bar
        style={{ width: "100%", height: "280px" }}
        data={{
          labels: Data.map((data) => data.label),
          datasets: [
            {
              label: "",
              data: Data.map((data) => data.amount),
              // backgroundColor: "rgba(52, 202, 165)",
              backgroundColor: function (context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                  return null;
                }
                return getGradient(ctx, chartArea);
              },

              hoverBackgroundColor: "rgba(52, 202, 165, .5)",
              borderRadius: 50,
              borderColor: "rgba(52, 202, 165, 0)",
            },
          ],
        }}
        options={{
          barPercentage: 0.86,
          scales: {
            y: {
              ticks: {
                beginAtZero: true,
                stepSize: 10,
                max: 50,
                min: 0,
                font: {
                  size: 12,
                },

                callback: function (value, index, ticks) {
                  return `${value}.000`;
                },
              },
              grid: {
                color: `${theme === "dark" ? "rgb(38 38 38)" : "#EAEAEA"}`,
                tickColor: "transparent",
              },
              border: {
                dash: [3, 5],
                color: "rgba(52, 202, 165, 0)",
              },
            },
            x: {
              grid: {
                color: "rgba(233, 2, 65, 0)",
              },
              border: {
                color: "rgba(52, 202, 165, 0)",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                font: {
                  family: "'Plus Jakarta Sans', sans-serif",
                  color: `${theme === "dark" ? "#fff" : "#000"}`,
                },
              },
            },
            tooltip: {
              yAlign: "bottom",
              // enabled: false,
              displayColors: false,
              position: "nearest",
              // external: (context) => {
              //   console.log(context);
              // },
              titleColor: "transparent",
              padding: 10,
              titleFont: {
                size: 0,
              },
              bodyFont: {
                size: 14,
                family: "'Plus Jakarta Sans', sans-serif",
              },
              callbacks: {
                label: (context) => {
                  console.log(context);
                  context.label = "";
                  return "$" + context.formattedValue + ".000";
                },
              },
            },
          },
        }}
      />
    </>
  );
};

export default BarChart;
