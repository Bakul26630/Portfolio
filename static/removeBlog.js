// Node file
const express = require("express");
const router = new express.Router();
const Blog = require("../models/blogSchema")

router.post("/removeBlog.js", async (req, res) => {
  try {
    const title=req.body.title;
    const blog = await Blog.find({Title:title});
    const _ack = await Blog.deleteOne({_id:blog[0]._id});
    res.writeHead(301,{Location:"http://localhost:5100/blog"})
    res.end();
  } catch (e) {
    console.log("Error occured");
    res.status(400).send(e);
  }
});

module.exports = router