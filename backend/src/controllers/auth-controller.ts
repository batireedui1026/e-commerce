import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const getEmail = await User.find({ email });
    if (getEmail.length === 0) {
      res.status(400).json({ message: "user not exist" });
    }
    const isCheck = bcrypt.compareSync(
      password,
      getEmail[0].password.toString()
    );
    if (!isCheck) {
      res.status(400).json({
        message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
      });
    }
    const token = jwt.sign({ id: getEmail[0]._id }, "JWT_TOKEN_PASS@123", {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "success",
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

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
