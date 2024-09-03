require("dotenv").config();
const { connectDB, closeDB } = require("./db");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const express = require("express");
const router = require("./routes/router");

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/", router);

const init = async () => {
  try {
    app.listen(port, async () => {
      await connectDB();

      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  } finally {
    await closeDB();
  }
};

init();
