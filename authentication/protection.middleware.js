import jwt from "jsonwebtoken";
import { User } from "./models/user.model.js";

export const checkToken = async (req, res, nxt) => {
  try {
    // const auth = req.get("Authorization");
    // if (!auth) {
    //   throw new Error("token not found");
    // }
    // const token = auth.split(" ")[1];
    const token = req.header("Authorization")?.replace("Bearer ", "");

    let decoded;
    if (!token) {
      throw new Error("token not found");
    }

    decoded = jwt.verify(token, "secret");

    if (!decoded) {
      throw new Error("not authorized");
    }

    // finding user
    const user = await User.findById(decoded.id);
    req.user = user;
    nxt();
  } catch (error) {
    console.log(error);

    res.json({
      sucess: false,
      msg: error.message,
    });
  }
};
