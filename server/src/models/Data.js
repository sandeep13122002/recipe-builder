
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ 
    username :{type: String, required: true ,unique: true},
    password:{type: String , required:true},
    

});

export const UserModel2=mongoose.model("data",UserSchema);

