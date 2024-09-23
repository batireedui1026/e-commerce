console.log("welcome to api server");
import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth-route";
import { connectDB } from "./config/db";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
// express application obeject ussgeh
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("welcome to api server");
});
console.log("MU", MONGO_URI);
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа`);
});
