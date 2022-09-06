const MESSAGES = require('../shared/constants');
const Client = require('../models/Client.model.js');
const asyncHandler = require('express-async-handler');

const getAllClients = asyncHandler(async (req, res) => {
  const clients = await Client.find();

  if (clients) {
    res.send(clients);
  } else {
    res.status(404).send({ message: MESSAGES.failure('found') });
    throw new Error({ message: MESSAGES.failure('found') });
  }
});

const addClient = asyncHandler(async (req, res) => {
  const { name, email, date, time } = req.body;

  // Checking time availability

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
  getAllClients,
  addClient,
  updateClient,
  deleteClient,
};
