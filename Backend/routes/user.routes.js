const express = require("express");
const UserModel = require("../models/user.model");
const userRoutes = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middlewares/authenticate");

userRoutes.get("/",async(req,res)=>{
    try{
        const user  = await UserModel.find();
        res.status(200).send({
            msg:user,
            status:"success"
        })
    }
    catch(e){
      res.status(400).send({
        msg:e.message
      })
    }
});

userRoutes.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
      if ( req.body.email && req.body.password && req.body.username) {
          const preCheck = await UserModel.findOne({ email });
          if (!preCheck) {
              const hashedPassword = await bcrypt.hash(req.body.password, 7);
              const newUser = new UserModel({ ...req.body, password: hashedPassword,coins:100 });
              await newUser.save();
              res.status(200).send({ msg: "User has been registered", status: "success" });
          } else {
              res.status(400).send({ msg: "User already registered" })
          }
      } else {
          res.status(400).send({ msg: "Invalid data format" })
      }
  } catch (e) {
      res.status(400).send({ msg: e.message });
  }
});

userRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
      if (email && password) {
          const preCheck = await UserModel.findOne({ email });
          if (preCheck) {
              const hashCheck = await bcrypt.compare(password, preCheck.password);
              const token = jwt.sign({ "userId": preCheck._id }, "snake_ladder", { expiresIn: "1d" });
              if (hashCheck) {
                  res.status(200).send({ msg: "User logged in successfull", status: "success", token });
              } else {
                  res.status(400).send({ msg: "Invalid password" });
              }
          } else {
              res.status(400).send({ msg: "User not found" });
          }
      } else {
          res.status(400).send({ msg: "Invalid data format" });
      }
  } catch (e) {
      res.status(400).send({ msg: e.message });
  }
});

userRoutes.use(verifyToken);

userRoutes.patch("/update/:id",async(req,res)=>{
  
  try {
    await UserModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send({ msg: "User details has been updated", status: "success" });
} catch (e) {
    res.status(400).send({ msg: e.message });
}
})

module.exports=userRoutes