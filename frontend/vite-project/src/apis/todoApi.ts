import axios from "axios";

axios.defaults.withCredentials = true;

export const allTodos = async()=>{
  const res = await axios.get("http://localhost:2000/api/v1/user/todo/all")
 return res.data
}

export const updateTodoStatus = async (todoId:string , status:any)=>{
    console.log(status)
  const res  = await axios.put(`http://localhost:2000/api/v1/user/todo/${todoId}` , {status:status})
  return res.data
}