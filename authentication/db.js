import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = mongoose.connect(
      "mongodb+srv://restapi:1234@cluster0.qqcyq.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
