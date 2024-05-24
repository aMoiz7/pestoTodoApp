import mongoose, { Schema, mongo } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { todo } from "./todos.js";

const userSchema = new Schema({
   name:{
    type : String,
    require:true
   },
   username:{
    type :String,
    require:true,
    trim : true,
    unique:true,
    index : true
   }
   ,
   email:{
    type:String,
    require :true,
    unique:true
   },
   password:{
    type:String,
    require:true

   },
   avatar:{
    type: String ,
   },
   todos: [{ type: Schema.Types.ObjectId, ref: 'todo' }]   
},{timestamps:true})
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        const hashedPassword = await bcrypt.hash(this.password!, 10);
        this.password = hashedPassword;
        next();
    } catch (error:any) {
        next(error);
    }
});
userSchema.methods.ispasswordCorrect = async function(password:string){
    return bcrypt.compare(password , this.password)
}
const sec = process.env.SECRET
console.log(sec,"sec")
userSchema.methods.generateAccessToken = async function(){
    return jwt.sign({
        name : this.name,
        email:this.email
    },sec!,{
        expiresIn:"10D"
    })
}
// userSchema.methods.generatRefreshToken = async function(){
//     return jwt.sign({
        
//         email:this.email
//     },"adjsdjjf",{
//         expiresIn:"30D"
//     })
// }
    export const user = mongoose.model("user" , userSchema)