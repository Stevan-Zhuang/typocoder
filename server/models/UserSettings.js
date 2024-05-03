const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSettingsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  theme: {
    type: String,
    default: 'light'
  },
  language: {
    type: String,
    default: 'en'
  }
});

const UserSettings = model('UserSettings', UserSettingsSchema);
module.exports = UserSettings;
