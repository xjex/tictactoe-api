import mongoose from "mongoose";

const logComponentSchema = new mongoose.Schema({
  playerX: {
    type: String,
    required: true,
  },
  playerO: {
    type: String,
    required: true,
  },
  games: {
    type: Map,
    of: String,
    default: {},
  },
  dateTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const LogComponent = mongoose.model("Logs", logComponentSchema);

export default LogComponent;
