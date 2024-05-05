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
    default: "oneLight",
    required: true,
  },
  language: {
    type: String,
    default: "python",
    required: true,
  },
});

const UserSettings = model("UserSettings", UserSettingsSchema);
module.exports = UserSettings;
