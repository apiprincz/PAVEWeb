import dbConnect from "../../../util/dbConnect";
import Winners from "../../../models/winnerModel.js";

import dotenv from "dotenv";

import Cors from "cors";

dotenv.config({ path: "ENV_FILENAME" });

dbConnect();
const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await runMiddleware(req, res, cors);

      await getWinners(req, res);

      break;
  }
};

const getWinners = async (req, res) => {
  try {
    const winners = await Winners.find({});
    res.json({
      status: "success",
      result: JSON.stringify(winners.length),
      winners,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
