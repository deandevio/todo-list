const express = require("express");
const router = express.Router();
const {
  getIndex,
  getAbout,
  getBlogs,
  postBlogs,
  signupGet,
  loginGet,
  signupPost,
  loginPost,
  deleteBlog,
  deleteUser,
  logoutGet,
} = require("../controllers/controllers");
const { requireAuth } = require("../middleware/authMiddleware");

router.route("/").get(getIndex);
router.route("/about").get(getAbout);
router.route("/blogs").get(requireAuth, getBlogs).post(postBlogs);
router.route("/signup").get(signupGet).post(signupPost);
router.route("/login").get(loginGet).post(loginPost);
router.route("/logout").get(logoutGet);
router.route("/blogs/:id").delete(deleteBlog);
router.route("/users/:id").delete(deleteUser);

module.exports = router;
