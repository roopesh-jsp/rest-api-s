import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: String,
});

export const posts = mongoose.model("posts", postSchema);
