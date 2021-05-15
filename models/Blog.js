const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  snippet: {
    type: String,
    required: [true, "Please add a snippet"],
  },
  body: {
    type: String,
    required: [true, "Please add a message body"],
  },
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
