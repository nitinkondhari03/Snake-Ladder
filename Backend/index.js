const express = require("express");
const connection = require("./configs/db");
const userRoutes = require("./routes/user.routes");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/user",userRoutes)



app.get("/",(req,res)=>{
    res.send("Home Page")
});


app.listen(process.env.port,async()=>{
  try{
    await connection
    console.log("connected to database")
  }
  catch{
    console.log("error while connecting to database")
  }
  console.log("connected to server")
})