const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserStatsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  snippetsTyped: {
    type: Number,
    default: 0
  },
  linesTyped: {
    type: Number,
    default: 0
  },
  secondsSpentTyping: {
    type: Number,
    default: 0
  },
  highestLinesPerMinute: {
    type: Number,
    default: 0
  }
});

const UserStats = model('UserStats', UserStatsSchema);
module.exports = UserStats;
