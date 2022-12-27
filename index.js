const express = require("express"); // Importing express module
const path = require("path"); // Importing  path module
const port = process.env.PORT || 5100; // Specifying the port on which server runs

const app = express(); // Initiating an express app

app.use(express.static(path.join(__dirname, "static"))); //Using static files in our express app

app.use(express.urlencoded()); // Accessing URL easily

app.set("view engine", "pug"); // Setting pug as the template engine

app.set("views", path.join(__dirname, "views")); // Linking views directory with our express app

app.get("/",(req,res)=>{
    res.render("home.pug");
});

app.get("/contact",(req,res)=>{
    res.render("Contact.pug");
});

app.get("/work",(req,res)=>{
    res.render("work.pug");

});

require("./static/connection")

const blogSchema = require("./models/blogSchema.js")

var blogs = [];

app.get("/blog",(req,res)=>{
    blogSchema.find({ category: "Database" })
    .then(data => {
        console.log("Database Blogs:")
        console.log(data);
        blogs=data;
    }).catch(err=>{
        console.log(err)
    })
    res.render("blog.pug");
});

app.get("/getAllBlog",(req,res)=>{
    res.send(blogs);
})

const addBlogRouter = require('./static/addBlog');
app.use(addBlogRouter);

const removeBlogRouter = require("./static/removeBlog");
app.use(removeBlogRouter);

const addQueryRouter = require('./static/addQuery')
app.use(addQueryRouter);

app.listen(port,()=>{
    console.log("App started successfully on port " + port);
});
