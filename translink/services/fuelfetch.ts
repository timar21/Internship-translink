import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

app.get('/api/fuel-settings', async (req, res) => {
  const url = 'https://hst-api.wialon.com/wialon/ajax.html?svc=unit/get_fuel_settings&params=%7B%22itemId%22%3A19790361%7D&sid=04cf1585a529f1bf34dd36049041a903';
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