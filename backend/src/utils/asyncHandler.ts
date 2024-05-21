import { NextFunction, Request, Response } from "express"

export const asyncHandler = (fun:(req:Request,res:Response,next:NextFunction)=>Promise<any>)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(fun(req,res,next)).catch((err)=>next(err))
    }
}