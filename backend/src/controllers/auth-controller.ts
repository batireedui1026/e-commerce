import { Request, Response } from "express";
import User from "../models/user.model";
export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "success" });
};
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }
    const createdUser = await User.create({
      name,
      email,
      password,
      phoneNumber: "",
    });
    res.status(201).json({ message: "success", user: createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error: error });
  }
};
