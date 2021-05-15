const Blog = require("../models/Blog");
const User = require("../models/User");

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

exports.signupPost = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(201).send({ success: true, data: user });
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.loginPost = (req, res, next) => {
  res.status(201).send("New login");
};
