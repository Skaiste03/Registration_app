const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model('client', ClientSchema);
module.exports = Client;
