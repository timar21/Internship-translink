"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useState , useEffect } from "react";
import axios from "axios";
import useFetchFuelSettings from "@/services/fuelfetch";

// Register Chart.js components
Chart.register(...registerables);

interface FuelConsImpulseProps {
  fuelConsImpulse: {
    maxImpulses: number;
    skipZero: number;
  };
}

const FuelConsImpulseChart: React.FC = () => {

    const { data, error, loading } = useFetchFuelSettings();


  // Prepare the chart data
  const chartData = {
    labels: ["Max Impulses", "Skip Zero"],
    datasets: [
      {
        label: "Fuel Consumption Impulse",
        data: [data?.fuelConslmpulse?.maxImpulses, data?.fuelConslmpulse?.skipZero],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
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
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <h2>Fuel Consumption Impulse</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default FuelConsImpulseChart;