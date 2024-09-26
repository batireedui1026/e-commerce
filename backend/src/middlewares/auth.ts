import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { decodeToken } from "../utils/jwt";
interface IMyRequest {
  user: string | object;
}
declare global {
  namespace Express {
    interface Request {
      user: string | object;
    }
  }
}
const auth = (req: Request, res: Response, next: NextFunction) => {
  console.log("Нэвтэрсэн хэрэглэгчийг шалгах:", req.headers.authorization);

  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Энэ үйлдлийг хийхийн тулд нэвтэрнэ үү." });
  }

  try {
    const token = req.headers.authorization?.split(" ")[1];
    // const user = jwt.verify(token, "JWT_TOKEN_@`123");\
    const user = decodeToken(token);
    req.user = user;
    next();
  } catch (err) {
    res.status(403).json({ message: "Зөвшөөрөгдөөгүй токен." });
  }
};

export default auth;

// export const currentUser = () => {
//   const { user } = req;
//   const findUser = await User.findById(user.id);
// };
