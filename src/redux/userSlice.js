import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./db";


const initialState = userList


const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers : {
        addUser:(state,actions) => {
        return state.push = actions.payload
        }
    }
   
})


export default userSlice.reducer;
export const {addUser} = userSlice.actions;