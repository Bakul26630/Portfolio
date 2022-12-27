// Node file
const express = require("express");
const router = new express.Router();

require("./connection")
const querySchema = require("../models/querySchema.js");

router.post("/addQuery.js", async (req, res) => {
  try {
    const query = new querySchema({
        Name:req.body.Name,
        Email:req.body.Email,
        Contact:req.body.Number,
        Concern:req.body.Concern
    });
    const new_Query = await query.save();
    console.log(new_Query);
    res.writeHead(301,{Location:"http://localhost:5100/contact"})
    res.end();
  } catch (e) {
    console.log("Error occured");
    res.status(400).send(e);
  }
});

module.exports = router