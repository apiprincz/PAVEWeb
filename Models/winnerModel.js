import mongoose from "mongoose";
import winner from "../pages/api/winner";

/* WinnersSchema will correspond to a collection in your MongoDB database. */
const winnerSchema = new mongoose.Schema({
  serial: {
    type: Number,
  },
  gifttype: {
    type: String,
  },
  date: {
    type: Date,
    default: Date() + 7 * 24 * 60 * 60 * 1000,
  },
  time: {
    type: Date,
    default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
  },
  name: {
    type: String,
  },
  scanId: {
    type: Number,
    default: () => Math.floor(Math.random() * 10000000),
  },
  status: {
    type: String,
  },
});

module.exports =
  mongoose.models.winner || mongoose.model("winner", winnerSchema);
