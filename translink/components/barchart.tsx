"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import useFetchFuelSettings from '@/services/fuelfetch';

Chart.register(...registerables);

const ApiDataFetcher: React.FC = () => {
  const { data, error, loading } = useFetchFuelSettings();
  

  
  const chartData = {
    labels: ['Summer Consumption', 'Winter Consumption'],
    datasets: [
      {
        label: 'Fuel Consumption (L/100km)',
        data: [
          data?.fuelConsRates.consSummer || 0,
          data?.fuelConsRates.consWinter || 0,
        ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)'],
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
          <h2>Fuel Consumption Rates</h2>
          <Bar data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default ApiDataFetcher;
