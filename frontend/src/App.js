const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
// Make sure MONGO_URI is set in your Render Environment Variables
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.log('Database Connection Error:', err));

// Root route to confirm the API is running
app.get('/', (req, res) => {
  res.send('API running');
});

// Define your routes here
// Example: app.use('/api/products', require('./routes/productRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});