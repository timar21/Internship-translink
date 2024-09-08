"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Optional, if using axios

const FuelSettings = () => {
  const [fuelData, setFuelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFuelSettings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/fuel-settings');
        setFuelData(response.data);
      } catch (err) {
        setError('Error fetching fuel settings');
      } finally {
        setLoading(false);
      }
    };

    fetchFuelSettings();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Fuel Settings</h1>
      <pre>{JSON.stringify(fuelData, null, 2)}</pre>
    </div>
  );
};

export default FuelSettings;