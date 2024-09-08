import express from 'express';
import fetch from 'node-fetch';
const app = express();
const PORT = 3000;

app.get('/api/fuel-settings', async (req:any, res:any) => {
  const url = 'https://hst-api.wialon.com/wialon/ajax.html?svc=unit/get_fuel_settings&params=%7B%22itemId%22%3A19790361%7D&sid=04bdaced638a13d891cd0871f323ff56';
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});