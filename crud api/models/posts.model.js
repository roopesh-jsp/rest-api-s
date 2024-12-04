import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

export const posts = mongoose.model("posts", postSchema);
