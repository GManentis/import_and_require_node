import express from "express";
import {functionTest, functionTest2} from "./utilities/utility2";  //or using the require syntax is ok
import test from "./utilities/utility2";

const app = express();
app.get("/",async(req,res) => {
    test();
    functionTest();
    functionTest2();
    return res.send("If it works,it works");
});

app.listen(3000,()=>{console.log("second part up and running")});

