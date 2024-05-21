import mongoose, { Schema } from "mongoose";

const todosSchema = new Schema({
    title:{
       type :String,
       require:true
    },
    description:{
        type:String,
        require :true
    },
    status:{
        type:String,
        enum:["Pending" ,"Inprogress" , "Done" ],
        default:"Pending"
    }

})

export const todo = mongoose.model("todo" , todosSchema)