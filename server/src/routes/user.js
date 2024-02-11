import express from 'express'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/Users.js';
import { UserModel2 } from '../models/Data.js';
const router=express.Router();

// router.get('/',(req,res)=>{
//          res.send('hello')
         
// })
router.post("/register",async (req,res)=>{
            const {username,password}= req.body;
           
            const user=await UserModel.findOne({username});
            
            if(user){
                return res.json({message:"User aleady exists!"});

            }

            const hashedPassword =await bcrypt.hash(password,10);

            const newUser=new UserModel({username,password:hashedPassword});
            await newUser.save();
           console.log(",jhdiu")
            res.json({message:"User Registered Successfully"});
})


router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await UserModel.findOne({ username });
  
    if (!user) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }
    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
  });
  




export {router as UserRouter}