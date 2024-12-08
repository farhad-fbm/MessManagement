// models/member.js

const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 3 },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  phone: { type: String, required: true, unique: true, minlength: 10 },
  password: {type: String, minlength:4},
});

module.exports = mongoose.model('Member', memberSchema);
