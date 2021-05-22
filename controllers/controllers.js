const Blog = require("../models/Blog");
const User = require("../models/User");
const handleErrors = require("../middleware/errorHandle");
const createToken = require("../middleware/createToken");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getAbout = (req, res, next) => {
  res.render("about");
};

exports.getBlogs = (req, res, next) => {
  res.render("blogs");
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).send({ success: true, data: blog });
  } catch (err) {
    const error = handleErrors(err);
    res.status(400).send({ success: false, error: error });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ success: true, data: user });
  } catch (err) {
    const error = handleErrors(err);
    res.status(400).send({ success: false, error: error });
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

exports.logoutGet = (req, res, next) => {
  res.render("index");
};

exports.loginGet = (req, res, next) => {
  res.render("login");
};

exports.signupPost = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });
    res.status(201).json({ success: true, user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).send({ success: false, errors });
  }
};

exports.loginPost = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });
    res.status(200).json({ success: true, user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ success: false, errors });
  }
};

// Handle the todo list routes
