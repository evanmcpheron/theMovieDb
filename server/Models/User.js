const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      default: null,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    min: [6, 'Username must be longer than 6 characters'],
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: 'defaultProfile.png',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
