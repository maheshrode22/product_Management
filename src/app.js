let express=require("express");
let bodyparse=require("body-parser");
let db=require("../db");
let router=require("../src/routes/route");
require("dotenv").config();
let app=express();

app.set("view engine","ejs");

app.use(express.static("public"));


//midlaware 
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use("/",router);




module.exports=app;

