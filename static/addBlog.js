// Node file
const express = require("express");
const router = new express.Router();

require("./connection");

const blogSchema = require("../models/blogSchema.js");

router.post("/addBlog.js", async (req, res) => {
  console.log("Post method");
  try {
    const blog = new blogSchema({
        Title:req.body.title,
        Content:req.body.Content
    });
    const new_blog = await blog.save();
    console.log(new_blog);
    res.writeHead(301,{Location:"http://localhost:5100/blog"})
    res.end();
  } catch (e) {
    console.log("Error occured");
    res.status(400).send(e);
  }
});

module.exports = router