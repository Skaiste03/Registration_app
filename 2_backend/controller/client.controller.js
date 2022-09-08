const MESSAGES = require('../shared/constants');
const Client = require('../models/Client.model.js');
const asyncHandler = require('express-async-handler');

const getClientsData = asyncHandler(async (req, res) => {
  // Find All data
  const clients = await Client.find();

  const data = {};

  // Get pages amount
  data.pages = Math.ceil(clients.length / 10);

  // Reverse to show data from new to older
  const reversedClients = [...clients].reverse();

  // Set amount of data
  const amount = 10;
  // Set page
  let page = req.params.page;
  // Set start/end index by page
  const startIndex = (page - 1) * amount;
  const endIndex = page * amount;
  // Get limited data
  data.limitedClientsData = reversedClients.slice(startIndex, endIndex);

  if (data) {
    res.send(data);
  } else {
    res.status(404).send({ message: MESSAGES.failure('found') });
    throw new Error({ message: MESSAGES.failure('found') });
  }
});

const addClient = asyncHandler(async (req, res) => {
  const { name, email, date, time } = req.body;

  // Checking time availability
  const isNotAvailable = await Client.findOne({ time, date });

  if (isNotAvailable) {
    res.status(400).send({
      message: 'Appointment time is not available',
    });
    throw new Error({ message: 'Appointment time is not available' });
  }

  if (!name || !email) {
    res.status(400).send({
      message: `Registration failed, check name or email`,
    });
    throw new Error({
      message: `Registration failed, check name or email`,
    });
  }

  const client = await Client.create({ name, email, date, time });

  if (client) {
    res.status(201).json({ message: MESSAGES.success('registered') });
  } else {
    res.status(400).send({ message: MESSAGES.failure('registered') });
    throw new Error({ message: MESSAGES.failure('registered') });
  }
});

const updateClient = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const newData = req.body;

  const time = newData.time;
  const date = newData.date;

  // Checking time availability
  const isNotAvailable = await Client.findOne({ time, date });

  if (isNotAvailable) {
    res.status(400).send({
      message: 'Appointment time is not available',
    });
    throw new Error({ message: 'Appointment time is not available' });
  }

  const updatedClient = await Client.findByIdAndUpdate(id, newData);

  if (updatedClient) {
    res.json({ message: MESSAGES.success('updated') });
  } else {
    res.status(400).json({ message: MESSAGES.failure('updated') });
  }
});

const deleteClient = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const deletedClient = await Client.findByIdAndDelete(id);

  if (deletedClient) {
    res.json({ message: MESSAGES.success('deleted') });
  } else {
    res.status(400).json({ message: MESSAGES.failure('deleted') });
  }
});

module.exports = {
  getClientsData,
  addClient,
  updateClient,
  deleteClient,
};
