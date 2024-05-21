import express, { urlencoded } from "express";
import { config } from "dotenv";
import corr from "cors"
import { connect } from "./db/index.js";
import userRoute from "./routes/user.js";
import  todo  from "./routes/todo.js";

config({path :"./.env"})
const app = express()

app.use(corr({
    origin:"*",
    credentials:true
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/public",express.static("/public"))
const port = process.env.PORT;
connect()


app.listen(port , ()=>{
    console.log(`express server connected on ${port}`)
})

app.get("/",(req,res)=>{
    res.status(200).json("hello api") })
    
app.use("/api/v1/user", userRoute);
app.use("/api/v1/user/todo", todo);




