import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import {UserRouter} from './routes/user.js'
import bodyParser from "body-parser";
const app=express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

console.log("heloo")
app.use("/auth",UserRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
    
  })
  
mongoose.connect(

"mongodb+srv://sandykumaryadav70:sandeep123@cluster0.snevvfz.mongodb.net/recipe?retryWrites=true&w=majority"

);
app.listen(3000,()=>console.log("sever started"));
