import express from "express";
import { login, signup } from "../controllers/user.controllers.js";

const userRoutes = express.Router();

userRoutes.post("/signup", signup);

userRoutes.post("/login", login);

export { userRoutes };
