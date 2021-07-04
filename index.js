const express = require("express");
const firstUtilities = require("./utilities/utility1");

const app = express();
app.get("/",async(req,res) => {
    firstUtilities();
    firstUtilities.functionTest();
    firstUtilities.functionTest2();
    return res.send({message:"TEST"});
});

app.listen(3000,()=>{console.log("App ready")});
