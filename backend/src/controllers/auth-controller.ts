import { Request, Response } from "express";
import User from "../models/user.model";

export const login = (req: Request, res: Response) => {
  // res.status(200).json({ message: "success" });
  // const { email, password } = req.body;
};
// const signIn = async (req, res) => {
//   const { email, password } = req.body;
//   const [user] = await sql`
//     SELECT * FROM users WHERE email=${email}
//   `;

//   if (!user) {
//     res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
//   } else {
//     const isCheck = bcrypt.compareSync(password, user.password);
//     if (!isCheck) {
//       res.status(400).json({
//         message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
//       });
//     } else {
//       const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
//         expiresIn: "1h",
//       });
//       res.status(200).json({
//         message: "success",
//         token,
//       });
//     }
//   }
// };
export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
    res.status(201).json({ message: "success", user: createdUser });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "server error", error: error });
  }
};
