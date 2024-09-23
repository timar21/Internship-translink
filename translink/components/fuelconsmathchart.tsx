"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import useFetchFuelSettings from "@/services/fuelfetch";
// Register Chart.js components
Chart.register(...registerables);

interface FuelConsMathProps {
  fuelConsMath: {
    idling: number;
    urban: number;
    suburban: number;
  };
}

const FuelConsMathChart: React.FC = () => {
    const { data, error, loading } = useFetchFuelSettings();

  const chartData = {
    labels: ["Idling", "Urban", "Suburban"],
    datasets: [
      {
        label: "Fuel Consumption (L/100km)",
        data: [data?.fuelConsMath?.idling, data?.fuelConsMath?.urban, data?.fuelConsMath?.suburban],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5,
        },
      },
    },
  };

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <div style={{ position: "relative", height: "400px", width: "100%" }}>
          <h2>Fuel Consumption Math</h2>
          <Bar data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default FuelConsMathChart;
