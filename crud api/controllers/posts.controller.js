import { posts } from "../models/posts.model.js";

const getPost = async (req, res) => {
  const post = await posts.find({ name: "haii" });
  console.log(post);
  res.json(post);
};

const addPost = async (req, res) => {
  const { name } = req.body;
  const newPost = new posts({
    name: name,
  });
  await newPost.save();
  res.json({
    post: newPost,
  });
};

export { getPost, addPost };
