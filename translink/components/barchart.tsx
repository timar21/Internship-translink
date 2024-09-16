"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

const ApiDataFetcher: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://hst-api.wialon.com/wialon/ajax.html?svc=unit/get_fuel_settings&params=%7B%22itemId%22%3A19790361%7D&sid=04faf1a407740ebed784a85fe0eb4f1b'
      );
      setData(response.data);
    } catch (error) {
      setError(`Failed to fetch data: ${error}`);
    }
    setLoading(false);

  };

  
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
    
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  return (
    <div className="p-4">
      <button onClick={fetchData} className="mb-4 p-2 bg-blue-500 text-white rounded">
        Fetch Fuel Settings
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <div>
          <h2>Fuel Consumption Rates</h2>
          <Bar data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default ApiDataFetcher;
