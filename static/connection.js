const mongoose = require("mongoose");
// Established connection with the blog database
mongoose.connect("mongodb://localhost:27017/blog").then(()=>{
    console.log("Connection to the database is successful...");
}).catch(()=>{
    console.log("Unable to connect with the database...");
}
);
