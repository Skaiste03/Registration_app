const MESSAGES = {
  success: (action) => `Client ${action}.`,
  failure: (action) => `Client not ${action}, try again later`,
};

module.exports = MESSAGES;
