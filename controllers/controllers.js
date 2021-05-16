const Blog = require("../models/Blog");
const User = require("../models/User");
const handleErrors = require("../middleware/errorHandle");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getAbout = (req, res, next) => {
  res.render("about");
};

exports.getBlogs = (req, res, next) => {
  res.render("blogs");
};

exports.deleteBlogs = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ success: true, data: user });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
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
    const errors = handleErrors(err);
    res.status(400).send({ success: false, error: errors });
  }
};

exports.loginPost = (req, res, next) => {
  res.status(201).send("New login");
};
