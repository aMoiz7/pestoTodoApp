import { Request } from "express";
import { todo } from "../models/todos.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ErrorHandler.js";
import { user } from "../models/user.js";
import { ApiResponse } from "../utils/apiResponse.js";
import mongoose from "mongoose";
import { todo } from "node:test";

export const newTodo = asyncHandler(async (req:Request,res)=>{
try {
      const id  = req.userId;

      console.log(id,"userid")
    
      const {title , description } = req.body;
    
      if(!title || !description)
        throw new ApiError(400 , "title and description are required" );
    
      const findUser = await user.findById(id).select("-password");
    
      if(!findUser)throw new ApiError(400 , "user not found");
    
    
      const newTodo = await todo.create({title , description});
      await findUser.todos.push(newTodo)
      await findUser.save()
    
      res.status(200).json(new ApiResponse(200 , newTodo));
       
    
} catch (error) {
    throw error
}

})

export const deleteTodo = asyncHandler(async(req, res) => {
    const { todoId } = req.params; // Extract todoId from req.params
    const userId = req.userId;

    if (!todoId) throw new ApiError(400, "todoId invalid or not available");

    const foundUser = await user.findById(userId);

    if (!foundUser) throw new ApiError(400, "cannot find user");

    // Remove todoId from the user's todos array
    foundUser.todos.pull(todoId);
    await foundUser.save();

    // Delete the todo from the todos collection
    const deleteResult = await todo.deleteOne({ _id: todoId });

    if (!deleteResult) throw new ApiError(400, "deletion failed");

    res.status(200).json(new ApiResponse(200, deleteResult));
});


export const updateTodo = asyncHandler(async(req,res)=>{

 const {title , description} = req.body
 if([title , description].some((edit) => edit.trim()===""))throw new ApiError(200 , "title or description required")
  const { todoId } = req.params; // Extract todoId from req.params
 const userId = req.userId;

 const foundUser = await user.findById(userId);
 if(!foundUser)throw new ApiError(400 , "user invalid");

 const updatetodo =  await todo.findById(todoId)
 console.log(updatetodo)

 if(!updatetodo)throw new ApiError(400 , " todo not found");

   if(title){
    updatetodo.title = title;
   }
   if(description){
    updatetodo.description = description;
   }

   await updatetodo.save();


   res.status(200).json(new ApiResponse(200 , updateTodo));
  
})

export const updatestatus = asyncHandler(async(req,res)=>{

  const {todoId} = req.params;
  
  const status = req.body.status;
  console.log(status)

  const findTodo = await todo.findById(todoId);

  if(!findTodo)throw new ApiError(400, "todo not found for update");

  const validStatusValue = ["Pending" ,"Inprogress" , "Done"];

  if(!validStatusValue.includes(status)) throw new ApiError(400 , "status not valid");

   findTodo.status = status;

  await findTodo.save();

 
 
    res.status(200).json(new ApiResponse(200 , updateTodo));
   
 })