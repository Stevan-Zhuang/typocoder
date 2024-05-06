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
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
});

const UserSettings = model("UserSettings", UserSettingsSchema);
module.exports = UserSettings;
