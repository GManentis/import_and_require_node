import express from "express";
/*
 using the require syntax is with esm. 
 utility2 uses ecmascript syntax
 With esm it can be done with import {functionTest, functionTest2} from "./utilities/utility2";  or const {functionTest, functionTest2} = require("./utilities/utility2"); 
 
 important note: cannot use default function like this:
 
 const myParam = require("./utilities/utility2")
 myParam()
 
instead you have to do this:
const myParam = require("./utilities/utility2")
myParam.default()


-----------------------------------------------------------------------------------------

With ESM in case of utility1 which is written in plain js, we can use the import syntax as it follows:

import {myFunction, myFunction2} from "./utilities/utility1" both modules will be fetched fine
import foo from "./utilities/utility1" => it wil get the module.exports = ....

But can also do foo.functionTest() when imported. This will also work on dependencies in commonjs(in the laater case even without esm) 

So ecma in this case with esm, ecma syntax behaves exactly like require()

 */

/*ecma syntax for ecma modules as it is*/
/*common js modules with import require as we know */
import {functionTest, functionTest2} from "./utilities/utility2";  
import test from "./utilities/utility2";


import foo from "./utilities/utility1";

const app = express();
app.get("/",async(req,res) => {
    const myParam = require("./utilities/utility2");
    myParam.default();
    foo.functionTest();
    test();
    functionTest();
    functionTest2();
    return res.send("If it works,it works");
});

app.listen(3000,()=>{console.log("second part up and running")});

