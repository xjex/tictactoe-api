import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import logRouter from "./routes/logRoutes.js";
dotenv.config();
const PORT = process.env.PORT || 7001;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/", logRouter);

app.listen(PORT, async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connection Success");
  console.log(`Port: ${PORT}`);
});
