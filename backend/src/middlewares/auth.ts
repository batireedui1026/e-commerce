import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const auth = (req: Request, res: Response, next) => {
  console.log("Нэвтэрсэн хэрэглэгчийг шалгах:", req.headers.authorization);

  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Энэ үйлдлийг хийхийн тулд нэвтэрнэ үү." });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, "JWT_TOKEN_@`123");
    req.user = user;
    next();
  } catch (err) {
    res.status(403).json({ message: "Зөвшөөрөгдөөгүй токен." });
  }
};

export default auth;
