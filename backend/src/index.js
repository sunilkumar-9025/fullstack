import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("App Error : ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server is running at port : http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("Mongo DB connection failed !!!", error);
  });

/*
require('dotenv).config({path:"./env"})
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

//IIFE
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
})();

*/
