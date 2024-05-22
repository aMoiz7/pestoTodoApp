import axios from "axios";

type Data ={
   email : string
   password : string
}
export const loginUser = async (data:Data) => {
    console.log(data)
    try {
        
      const res = await axios.post("http://localhost:2000/api/v1/user/login", data);
      console.log(res.data); // Adjust based on the actual response structure
      return res.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }

  }