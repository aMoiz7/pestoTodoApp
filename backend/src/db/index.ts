import mongoose from "mongoose";

const uri = process.env.URI
export const connect = async()=>{
  try {
     const Dbconnection = await mongoose.connect(uri!)
     console.log(Dbconnection.connection.host)
  } catch (error) {
    
    console.log(error)
  }

}