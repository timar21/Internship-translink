import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors());

app.use(express.json()); // For parsing application/json

app.post('/api/fuel-settings', async (req, res) => {
  console.log('Received request:', req.body);
  const url = 'https://hst-api.wialon.com/wialon/ajax.html';
  const params = {
    sid: req.body.sid, // Pass the session ID from request body
    svc: 'unit/get_fuel_settings',
    params: JSON.stringify({ itemId: req.body.itemId }) // Pass itemId from request body
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(params)
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});