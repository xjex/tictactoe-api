import express from "express";
import { createLog, getLogs } from "../controllers/logControllers.js";

const logRouter = express.Router();

logRouter.post("/savelog", createLog);

logRouter.get("/getlogs", getLogs);

export default logRouter;
