import express from "express";
import { addPost, getPost } from "../controllers/posts.controller.js";

const adminRouter = express.Router();

adminRouter.get("/", getPost);

adminRouter.post("/", addPost);
export { adminRouter };
