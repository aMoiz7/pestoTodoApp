import axios from "axios";

axios.defaults.withCredentials = true;

export const allTodos = async()=>{
  const res = await axios.get("http://localhost:2000/api/v1/user/todo/all")
 return res.data
}

export const updateTodoStatus = async (todoId:String , status:String)=>{
    console.log(status)
  const res  = await axios.put(`http://localhost:2000/api/v1/user/todo/${todoId}` , {status:status})
  return res.data
}

export const deleteTodo =async(todoId:String)=>{
    const res  = await axios.delete(`http://localhost:2000/api/v1/user/todo/${todoId}`)
    return res;
}
type addtodo={
    title:String,
    description:String
}
export const addnewTodo = async({title , description}:addtodo)=>{
   const res = axios.post("http://localhost:2000/api/v1/user/todo/new" , {title:title , description:description});
   return res;
}