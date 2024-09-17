"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';
import { useState , useEffect } from 'react';
import useFetchFuelSettings from '@/services/fuelfetch';

// Register Chart.js components
Chart.register(...registerables);

interface FuelLevelParamsProps {
  fuelLevelParams: {
    flags: number;
    ignoreStayTimeout: number;
    minFillingVolume: number;
    minTheftTimeout: number;
    minTheftVolume: number;
    filterQuality: number;
    fillingsJoinInterval: number;
    theftsJoinInterval: number;
    extraFillingTimeout: number;
  };
}

const FuelLevelParamsChart: React.FC = () => {

    const { data, error, loading } = useFetchFuelSettings();

  // Prepare the chart data
  const chartData = {
    labels: [
      'Flags',
      'Ignore Stay Timeout',
      'Min Filling Volume',
      'Min Theft Timeout',
      'Min Theft Volume',
      'Filter Quality',
      'Fillings Join Interval',
      'Thefts Join Interval',
      'Extra Filling Timeout',
    ],
    datasets: [
      {
        label: 'Fuel Level Parameters',
        data: [
          data?.fuelLevelParams.flags,
          data?.fuelLevelParams.ignoreStayTimeout,
          data?.fuelLevelParams.minFillingVolume,
          data?.fuelLevelParams.minTheftTimeout,
          data?.fuelLevelParams.minTheftVolume,
          data?.fuelLevelParams.filterQuality,
          data?.fuelLevelParams.fillingsJoinInterval,
          data?.fuelLevelParams.theftsJoinInterval,
          data?.fuelLevelParams.extraFillingTimeout,
        ],
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
    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
      <h2>Fuel Level Parameters</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default FuelLevelParamsChart;