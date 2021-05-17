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
  setCookies,
  getCookies,
} = require("../controllers/controllers");

router.route("/").get(getIndex);
router.route("/about").get(getAbout);
router.route("/blogs").get(getBlogs).post(postBlogs);
router.route("/signup").get(signupGet).post(signupPost);
router.route("/login").get(loginGet).post(loginPost);
router.route("/blogs/:id").delete(deleteBlog);
router.route("/users/:id").delete(deleteUser);
router.route("/set-cookies").get(setCookies);
router.route("/get-cookies").get(getCookies);

module.exports = router;
