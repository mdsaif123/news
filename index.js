const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle CORS
app.use(cors());

// News API Key
const NEWS_API_KEY = '8c78f246d1c546af911d2f68578c87e0';

// Define route to fetch news
app.get('/api/news', async (req, res) => {
  const query = req.query.q || 'sports'; // Default query is 'sports'

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`
    );
    res.json(response.data); // Send the data back to the frontend
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
