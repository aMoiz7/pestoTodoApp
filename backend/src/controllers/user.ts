import { NextFunction , Request ,Response} from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ErrorHandler.js";
import { user } from "../models/user.js";
import { uploadOnCloud } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const generateAccessToken = async(userid:any) =>{
   try {
     if(!userid) throw new ApiError(400 , "user id not found ");
 
     const finduser  = await user.findById(userid);
     
     if(!finduser) throw new ApiError(400 , "user not find for creating accesstoken")
 
     const accessToken =  finduser.generateAccessToken()
 
     return accessToken;
   } catch (error:any) {
      throw new ApiError(500 , " error i n generating accesstoken" , error)
   }
    
}

export const signUp = asyncHandler(async (req: Request, res: Response ,  next: NextFunction)  => {
    try {
        // Explicitly define the type of req.body
        const { name, username, email, password } = req.body;
        
        if([name , username ,email , password].some((feilds)=> feilds === ""))
            throw new ApiError(400 , "all feilds are required" );

         const existingUser = await user.findOne({
            $or:[{username} , {email}]
         })

         if(existingUser)throw new ApiError(400 , "user alread Exist")

             const profile = req.files?.avatar[0]?.path
             console.log(profile,"pro")
          
            if(!profile) throw new ApiError(400 , "avatar is required")


                const uploadPicture  = await uploadOnCloud(profile);

                if(!uploadPicture) throw new ApiError(400 , " avatar upload failed")

                const newuser = await user.create({
                    name , 
                    username ,
                    email,
                    password,
                    avatar : uploadPicture || null
                });

            if(!newuser)throw new ApiError(500 , "user cannot created " )

                res.status(200).json(new ApiResponse(200 , newuser ))
    
        
    } catch (error) {
        // Handle errors
        throw error
    }
});


export const login = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            throw new ApiError(404, "email or password required");

        const findUser = await user.findOne({ email });

        if (!findUser) throw new ApiError(404, "User not found");

        const isPasswordValid = await findUser.ispasswordCorrect(password);

        if (!isPasswordValid) throw new ApiError(400, "Invalid password");

        const accessToken = await generateAccessToken(findUser._id);

        if (!accessToken) throw new ApiError(500, "Error in creating access token");

        const option = {
            httpOnly: true,
            secure: true
        };

        const returnUser = await user.findOne({ email }).select("-password");

        return res.status(200).cookie("accessToken", accessToken, option).json(new ApiResponse(200, { user: returnUser, accessToken }, "User logged in successfully"));
    } catch (error: any) {
        throw error;
    }
});

