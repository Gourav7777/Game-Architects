const express = require("express")
const bcrypt = require("bcrypt")
const userroute = express.Router()
const {UserModel} = require("../Model/usermodel")
var jwt = require('jsonwebtoken');

 userroute.post("/register",async(req,res)=>{

    
    
    console.log(req.body)
    const {firstname,lastname,email,password} = req.body

      

      bcrypt.hash(password, 5, async(err, hash)=> {
         
        const user = new UserModel({firstname,lastname,email,password:hash})
        await user.save()
        res.status(200).send({"msg":"new user has been added"})
    });


 })


 userroute.post("/login",async(req,res)=>{

   
    
    const email = req.body.email
    const password = req.body.password
  
   const user = await UserModel.findOne({email})

   if(user){

    bcrypt.compare(password, user.password, async(err, result)=> {
         
        if(result){
           res.status(200).send({"msg":"login successfull","token":jwt.sign({ "userID": user._id }, 'batman')})
        }
        else{
          res.status(400).send({"msg":"login unsuccessfull"})
        }
    })

   }

   else{

    res.status(400).send("user not found please register first")
   }
      

      


 })

module.exports={userroute}