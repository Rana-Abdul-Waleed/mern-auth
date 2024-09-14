import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// test api route
app.use("/api/user", userRoute);
