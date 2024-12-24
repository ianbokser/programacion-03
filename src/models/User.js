const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: { type: String, enum: ['user', 'admin'] },
  pets: { type: [String], default: [] },
});

module.exports = mongoose.model('User', userSchema);
