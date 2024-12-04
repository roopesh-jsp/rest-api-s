import { posts } from "../models/posts.model.js";

const getPost = async (req, res) => {
  try {
    const post = await posts.find();
    res.json({
      posts: post,
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
    console.log(error);
  }
};

const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new posts({
      title,
      content,
    });
    await newPost.save();
    res.json({
      post: newPost,
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
    console.log(error);
  }
};

const delPost = async (req, res) => {
  const pid = req.params.pId;
  try {
    const post = await posts.findById(pid);
    if (!post) {
      throw new Error("that post was not found");
    }
    await posts.findByIdAndDelete(pid);
    res.json({
      success: true,
      msg: "deleted",
    });
  } catch (error) {
    res.json({
      success: false,
      msg: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  const pid = req.params.pId;
  const { title, content } = req.body;
  try {
    const post = await posts.findById(pid);
    if (!post) {
      throw new Error("that post was not found");
    }
    const newPost = await posts.findByIdAndUpdate(pid, {
      title,
      content,
    });
    res.json({
      success: true,
      msg: "updated",
      post: newPost,
    });
  } catch (error) {
    res.json({
      success: false,
      msg: error.message,
    });
  }
};
export { getPost, addPost, delPost, updatePost };
