import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const AuthSignUp:any = createAsyncThunk('auth/AuthSignUp',async(data:any) => {
  let userName = data.UserName
  let login = data.Login
  let password= data.password
  try {
    const response = await axios
    .post('http://dev.trainee.dex-it.ru/api/Auth/SignUp', {
      login,
      password,
      userName
    })
    
    return response;
   
    
  } catch (error) {

  }
}
)
const SignInSlice = createSlice({
  name: 'auth',
  initialState: {
    user:{},
    status:'',
    error:null,
  },
  reducers: {},
  extraReducers:{
    [AuthSignUp.pending]: (state)=>{
      state.status = 'loading';
      state.error = null;
    },
    [AuthSignUp.fulfilled]: (state,action)=>{
      state.status = 'resolved';
      state.user = action.payload;
      localStorage.setItem('status',action.payload.status);    },
    [AuthSignUp.rejected]: (state,action)=>{},
    
  },
})
export const UserReducer = SignInSlice.reducer 



