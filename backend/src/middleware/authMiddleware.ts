import  Jwt  from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ErrorHandler.js";
import { user } from "../models/user.js";



export const auth = asyncHandler(async(req,res,next)=>{
  try {
      const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Barer","");
  
      if(!token)throw new ApiError(400 , "Auth token not found")
  
          const decodedToken = await Jwt.verify(token , process.env.SECRET);
         
          if(!decodedToken) throw new ApiError(400 , "tokon not verify");

          
          const User = await user.findOne({ email: decodedToken.email });
           
          if(!User)throw new ApiError(400, "user not found for Auth");
          req.userId = User._id;
  
          next();
  } catch (error) {
        throw error
  }

})