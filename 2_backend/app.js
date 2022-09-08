const express = require('express');
const cors = require('cors');
require('dotenv').config();

const {
  getClientsData,
  addClient,
  updateClient,
  deleteClient,
} = require('./controller/client.controller');

const connectMongoDB = require('./config/db.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes

// GET - clients data
app.get('/api/clients/:page', getClientsData);

// POST - new client
app.post('/api/clients', addClient);

// PUT - update client by id
app.put('/api/clients/:id', updateClient);

// DELETE - client by id
app.delete('/api/clients/:id', deleteClient);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
