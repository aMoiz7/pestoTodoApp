import express, { urlencoded } from "express";
import { config } from "dotenv";
import corr from "cors"
import { connect } from "./db/index.js";
import userRoute from "./routes/user.js";
import  todo  from "./routes/todo.js";
import cookieParser from 'cookie-parser'

config({path :"./.env"})
const app = express()

const allowedOrigins = ['http://localhost:5173'];

app.use(corr({
    origin:allowedOrigins,
    credentials:true
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());

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




