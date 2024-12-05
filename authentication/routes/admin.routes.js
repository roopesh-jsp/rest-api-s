import express from "express";
import { checkToken } from "../protection.middleware.js";

const adminRouter = express.Router();

adminRouter.get("/prd", checkToken, (req, res) => {
  res.json({
    msg: "okay",
    user: req.user,
  });
});

export { adminRouter };
