import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import pkg from "pg";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = 5000;
const { Pool } = pkg;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND,
    credentials: true,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  })
);
app.use(express.json());
//app.use(cookieParser(process.env.SESSION_SECRET));

const db = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  //ssl: { rejectUnauthorized: false }, //if you're using self-signed certificates  ssl: true,
});

db.connect();

app.get("/", (req, res) => {
  res.send("how far");
});

app.get(`/chatbox`, async (req, res) => {
  // const { id } = req.params;
  // const { id2 } = req.body;
  try {
    const response = await db.query(
      "SELECT content FROM Messages JOIN Users ON Messages.sender_id = Users.user_id " +
        "WHERE sender_id = $1 AND recepient_id = $2",
      [1, 2]
    );


    res.send(response.rows);
  } catch (error) {
    res.send(error);
  }
});
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
