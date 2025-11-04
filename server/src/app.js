const express = require('express');
const cors = require('cors');
const bugRoutes = require('./routes/bugs');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Enable CORS for frontend communication
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api/bugs', bugRoutes);
app.use(errorHandler);

module.exports = app;
