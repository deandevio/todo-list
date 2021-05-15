const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
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

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
