// const jwt = require("jsonwebtoken");
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const generateToken = (payload: object) => {
  return jwt.sign(payload, process.env.JWT_TOKEN_PASSWORD || "", {
    expiresIn: "7d",
  });
};

export const decodeToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_TOKEN_PASSWORD || "");
};
