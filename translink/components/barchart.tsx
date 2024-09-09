"use client";
import React, { useState } from 'react';
import axios from 'axios';

const ApiDataFetcher: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        'https://hst-api.wialon.com/wialon/ajax.html?svc=unit/get_fuel_settings&params=%7B%22itemId%22%3A19790361%7D&sid=0481e968739bb9fa6d165c3db727dfc8'
      );
      setData(response.data);
    } catch (error) {
      setError(`Failed to fetch data: ${error}`);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={fetchData}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Fetch Data
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {data && (
        <pre className="mt-4 p-4 bg-gray-100 rounded-lg">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default ApiDataFetcher;
