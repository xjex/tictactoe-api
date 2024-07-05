import LogComponent from "../models/log.model.js";

const createLog = async (req, res) => {
  try {
    const { playerX, playerO, games } = req.body;
    const newLog = new LogComponent({ playerX, playerO, games });
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getLogs = async (req, res) => {
  try {
    const logs = await LogComponent.find();
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export { createLog, getLogs };
