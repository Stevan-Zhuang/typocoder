const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSettingsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  theme: {
    type: String,
    default: "light",
    required: true,
  },
  language: {
    type: String,
    default: "en",
    required: true,
  },
});

const UserSettings = model("UserSettings", UserSettingsSchema);
module.exports = UserSettings;
