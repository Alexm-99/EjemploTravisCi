const express = require("express");

const app = express();

app.get("/",(req, res, next)=>{
    res.send("Working.....");
});


app.listen(3000, ()=>{

    console.log("Running in the port 3000");
});


