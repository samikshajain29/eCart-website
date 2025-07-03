import express from "express";
import { getCurrentUser } from "../controller/userController.js";
import isAuth from "../middleware/isAuth.js";

const userRoutes = express.Router();

userRoutes.get("/getcurrentuser", isAuth, getCurrentUser);

export default userRoutes;
