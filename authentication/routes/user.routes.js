import express from "express";
import { signup } from "../controllers/user.controllers.js";

const userRoutes = express.Router();

userRoutes.post("/signup", signup);

export { userRoutes };
