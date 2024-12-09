import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // checking for exixsting user
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      throw new Error("user already exists try login");
    }

    // creating new user
    const hashedPw = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPw,
    });

    newUser.save();
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      "secret"
    );
    // sending response
    res.cookie("token", token);
    res.json({
      sucess: true,
      user: newUser,
    });
  } catch (error) {
    res.json({
      sucess: false,
      msg: error.message,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("user not exist try sigin");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    // console.log(isMatch);

    if (!isMatch) {
      throw new Error("wrong credientials");
    }
    const token = jwt.sign({ id: user._id }, "secret");
    res.cookie("token", token);
    res.json({
      msg: "logged",
      sucess: true,
      user: user,
    });
  } catch (error) {
    res.json({
      sucess: false,
      msg: error.message,
    });
  }
};
export { signup, login };
