import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user:{},
   userStatus : false
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        userdata:(state , action)=>{
             
            state.user = action.payload
            state.user? state.userStatus = true : state.userStatus=false
        },
        logout:(state )=>{
           state.userStatus=false;
           state.user = {};
        }
        
    }
})

export const {userdata , logout} = userSlice.actions

export default userSlice.reducer