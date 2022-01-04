import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AuthSignIn:any = createAsyncThunk('auth/AuthSignIn',async(data:any,{rejectedWithValue}:any) => {
  let login = data.Login
  let password= data.password
  try {

    const response = await axios
    .post('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
      login,
      password
    })
    
    return response.data;
   
    
  } catch (error) {
    
    return rejectedWithValue(error);
  }
}
)


const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    auth:{},
    status:'',
    error:'',
  },
  reducers: {},
  extraReducers:{
    [AuthSignIn.pending]: (state)=>{
      state.status = 'loading';
      state.error = '';
    },
    [AuthSignIn.fulfilled]: (state,action)=>{
      state.status = 'resolved';
      state.auth = action.payload;
      localStorage.setItem('token',action.payload.token);
      localStorage.setItem('name',action.payload.name);
      localStorage.setItem('avatarUrl',action.payload.avatarUrl);
    },
    [AuthSignIn.rejected]: (state,action)=>{
      state.status = 'rejected';
      state.error = 'Ошибка авторизации'
    },
    
  },
})
export const AuthReducer = AuthSlice.reducer 


