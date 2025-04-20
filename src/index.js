import dotenv from "dotenv";
import exprsss from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is Listen at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!! ", err);
  });
