import express from "express";
import {
  addPost,
  delPost,
  getPost,
  updatePost,
} from "../controllers/posts.controller.js";

const adminRouter = express.Router();

adminRouter.get("/", getPost);

adminRouter.post("/", addPost);

adminRouter.delete("/:pId", delPost);

adminRouter.put("/:pId", updatePost);
export { adminRouter };
