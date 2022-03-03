const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/",function(req,res){

res.render("home");
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running at port 3000.");
});
