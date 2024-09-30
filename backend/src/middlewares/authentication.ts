import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jwt";

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Та энэ үйдлийг хийхийн тулд нэвтэрнэ үү" });
  }

  const token = req.headers.authorization.split(" ")[1];
  const user = decodeToken(token);
  req.user = user;
  next();
};
