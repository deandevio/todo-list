const Blog = require("../models/Blog");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getAbout = (req, res, next) => {
  res.render("about");
};

exports.getBlogs = (req, res, next) => {
  res.render("blogs");
};

exports.postBlogs = async (req, res, next) => {
  try {
    const blog = await new Blog(req.body);
    res.status(201).json({ success: true, data: blog });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

exports.signupGet = (req, res, next) => {
  res.render("signup");
};

exports.loginGet = (req, res, next) => {
  res.render("login");
};

exports.signupPost = (req, res, next) => {
  const user = req.body;
  res.status(201).send({ data: user, message: "new signup" });
};

exports.loginPost = (req, res, next) => {
  res.status(201).send("New login");
};
