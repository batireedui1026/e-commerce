console.log("welcome to api server");
import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth-route";
import { connectDB } from "./config/db";
import cors from "cors";
// import { Resend } from "resend";
import GenerateHtml from "./utils/generateHtmlTemplate";
import nodemailer from "nodemailer";
dotenv.config();

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
// express application obeject ussgeh
const app = express();
// const resend = new Resend(process.env.reSend);
// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoute);

// app.get("/", async (req, res) => {
//   const rndOtp = Math.floor(Math.random() * 10_000)
//     .toString()
//     .padStart(4, "0");
// const { data, error } = await resend.emails.send({
//   from: "Acme <onboarding@resend.dev>",
//   to: ["batireeduiotgonsukh@gmail.com"],
//   subject: "Cайн байна уу?",
//   html: GenerateHtml(),
// });
// if (error) {
//   console.log("email code sent error", { error });
// }
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "batireeduiotgonsukh@gmail.com",
    pass: "iyvtnswdpidhnynb",
  },
});
const info = transporter.sendMail({
  from: "batireeduiotgonsukh@gmail.com", // sender address
  to: "batireeduiotgonsukh@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "GenerateHtml", // html body
});

//   res.send("welcome to api server");
// });

console.log("MU", MONGO_URI);
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа`);
});
