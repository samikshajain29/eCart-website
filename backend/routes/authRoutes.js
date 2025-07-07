import express from "express";
import {
  adminLogin,
  googleLogin,
  login,
  logout,
  registration,
} from "../controller/authController.js";

const authRoutes = express.Router();

authRoutes.post("/registration", registration);
authRoutes.post("/login", login);
authRoutes.post("/googlelogin", googleLogin);
authRoutes.get("/logout", logout);
authRoutes.post("/adminlogin", adminLogin);

export default authRoutes;
