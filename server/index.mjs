import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import pg from "pg";
import env from "dotenv";

env.config();

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("how far");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
