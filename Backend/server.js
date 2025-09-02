const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  res.send("server is working perfectly");
});

app.listen(port, ()=>{
  console.log(`app is listning on port ${port}`);
});