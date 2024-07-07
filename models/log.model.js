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
  stats: {
    playerXWins: {
      type: Number,
      default: 0,
      required: true,
    },
    playerOWins: {
      type: Number,
      default: 0,
      required: true,
    },
    draws: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  rounds: {
    type: Number,
    default: 0,
    required: true,
  },
});

const LogComponent = mongoose.model("Logs", logComponentSchema);

export default LogComponent;
