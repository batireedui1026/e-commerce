console.log("welcome to api server");
import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth-route";

dotenv.config();

const PORT = process.env.PORT;
// express application obeject ussgeh
const app = express();

// middlewares
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("welcome to api server");
});

app.listen(8000, () => {
  console.log(`Сервер localhost:${8000} дээр аслаа`);
});
