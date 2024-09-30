import { Router } from "express";
import {
  login,
  signup,
  verifyPassword,
  forgetPassword,
  verifyOtp,
  currentUser,
  updatePassword,
} from "../controllers/auth-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/current-user").get(authentication, currentUser);
router.route("/forget-password").post(forgetPassword);
router.route("/verify-password").post(verifyPassword);
router.route("/verify-otp").post(verifyOtp);
router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/update-pass").put(updatePassword);
export default router;
