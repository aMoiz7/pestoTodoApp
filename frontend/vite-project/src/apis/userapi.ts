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

  type SignupData={
    name:FormData;
    username:FormData,
    email:FormData;
    password:FormData;
  }

export const signupUser = async(formdata:any)=>{
    console.log(formdata)
    const res = await axios.post("http://localhost:2000/api/v1/user/signup" , formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }
    );
    
    return res.data 
}
   