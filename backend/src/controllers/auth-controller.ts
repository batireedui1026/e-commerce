// import { Request, Response } from "express";
// import User from "../models/user.model";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { sendEmail } from "../utils/send-email";
// import crypto from "crypto";

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const getEmail = await User.find({ email });
//     if (getEmail.length === 0) {
//       res.status(400).json({ message: "user not exist" });
//     }
//     const isCheck = bcrypt.compareSync(
//       password,
//       getEmail[0].password.toString()
//     );
//     if (!isCheck) {
//       res.status(400).json({
//         message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
//       });
//     }
//     const token = jwt.sign({ id: getEmail[0]._id }, "JWT_TOKEN_PASS@123", {
//       expiresIn: "1h",
//     });
//     res.status(200).json({
//       message: "success",
//       token,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signup = async (req: Request, res: Response) => {
//   try {
//     const { firstname, lastname, email, password } = req.body;

//     if (!firstname || !lastname || !email || !password) {
//       return res.status(400).json({ message: "Хоосон утга байж болохгүй" });
//     }

//     const createdUser = await User.create({
//       firstname,
//       lastname,
//       email,
//       password,
//     });
//     res.status(201).json({ message: "success", user: createdUser });
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ message: "server error", error: error });
//   }
// };

// export const currentUser = async (req: Request, res: Response) => {
//   const {id} = req.user;
//   const findUser = await User.findById(id);
//   res.status(200).json({user: findUser, message: "Success"});
// };

// export const forgetPassword = async (req: Request, res: Response) => {
//   try {
//     const { email } = req.body;
//     const findUser = await User.findOne({ email: email });
//     if (!findUser) {
//       return res
//         .status(400)
//         .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
//     }

//     const otp = Math.floor(Math.random() * 10_000)
//       .toString()
//       .padStart(4, "0");
//     findUser.otp = otp;
//     await findUser.save();
//     await sendEmail(email, otp);
//     res.status(200).json({ message: "OTP code is sent email successfully" });
//   } catch (error) {}
// };

// export const verifyOtp = async(req: Request, res: Response) =>{
//   const {email, otpValue} = req.body;

//   const findUser = await User.findOne({email: email, otp: otpValue});
//   if(!findUser){
//     return res.status(400).json({message: "Бүтгэлтэй хэрэглэгч эсвэл OTP код олдсонгүй"})
//   }
// }

// const resetToken = crypto.randomBytes(25).toString("hex");
//   const hashedResetToken = crypto
//     .createHash("sha256") .update(resetToken)  .digest("hex");
//   findUser.passwordResetToken = hashedResetToken;
//   findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
//   await findUser.save();

//   await sendEmail(
//     email,
//     `<a href="http://localhost:3000/forgetpass/newpass?resettoken="${resetToken}"">Нууц үг сэргээх холбоос</a>`
//   );
//   res.status(200).json({ message: "Нууц үг сэргээх имэйл илгээлээ" });
// };

// export const verifyPassword = async (req: Request, res: Response) => {
//   const { password, resetToken } = req.body;

//   const hashedResetToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");

//   const findUser = await User.findOne({
//     passwordResetToken: hashedResetToken,
//     passwordResetTokenExpire: { $gt: Date.now },
//   });

//   if (!findUser) {
//     return res
//       .status(400)
//       .json({ message: "Таны нууц үг сэргээх хугацаа дууссан байна:" });
//   }

//   findUser.password = password;
//   await findUser.save();
//   res.status(200).json({ message: "Нууц үг  амжилттэй сэргээлээ" });
// };

import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/send-email";
import crypto from "crypto";

// Login function
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "default_secret",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ message: "Success", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "Fields cannot be empty." });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Success", user: createdUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const currentUser = async (req: Request, res: Response) => {
  const { id } = req.user;
  const user = await User.findById(id);
  res.status(200).json({ user, message: "Success" });
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const otp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    user.otp = otp;
    await user.save();
    await sendEmail(email, otp);

    res.status(200).json({ message: "OTP sent to email successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otpValue } = req.body;
    console.log("email, otp value", email);
    console.log("email, otp value", otpValue);
    const user = await User.findOne({ email, otp: otpValue });

    if (!user) {
      return res.status(400).json({ message: "Invalid user or OTP." });
    }

    const resetToken = crypto.randomBytes(25).toString("hex");
    const hashedResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    user.passwordResetToken = hashedResetToken;
    user.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    await sendEmail(
      email,
      `<a href="http://localhost:3002/newpass?resettoken=${resetToken}">Reset your password</a>`
    );
    res.status(200).json({ message: "Password reset email sent." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const verifyPassword = async (req: Request, res: Response) => {
  try {
    const { password, resetToken } = req.body;
    const hashedResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    const user = await User.findOne({
      passwordResetToken: hashedResetToken,
      passwordResetTokenExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Reset token is invalid or expired." });
    }

    user.password = bcrypt.hashSync(password, 10);
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const user = await User.updateOne({ password });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};
