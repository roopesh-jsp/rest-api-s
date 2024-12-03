import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://restapi:1234@cluster0.qqcyq.mongodb.net/"
    );
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};
