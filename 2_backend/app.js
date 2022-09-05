const express = require('express');
const cors = require('cors');
const asyncHandler = require('express-async-handler');
require('dotenv').config();

const connectMongoDB = require('./config/db.js');
const User = require('./models/User.model.js');

// Connect to MongoDB
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get(
  '/api/clients',
  asyncHandler(async (req, res) => {
    res.json('logic is not implemented yet');
  })
);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
