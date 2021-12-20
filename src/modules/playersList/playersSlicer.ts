import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {  getPlayers } from "../../api/request/teamAndPlayersApi"


// export const playerseacrh:any = createAsyncThunk('players/playerseacrh',async(param:any) => {
//    const response = await getplayersearch(param)
//     return response
  
// }) 

export const playersFetchData:any = createAsyncThunk('players/playersFetchData',async(url:string,{rejectedWithValue}:any) => {
 
  try {
    const response = await getPlayers(url)
    const data = response.data
    return data
    
  } catch (error) {
    return rejectedWithValue(error);
  }
}
)

 const players = createSlice({
  name: 'players',
  initialState: {
    players:{},
    status:'',
    error:'',
  },
  reducers: {},
  extraReducers:{
    [playersFetchData.pending]: (state)=>{
      state.status = 'loading';
    },
    [playersFetchData.fulfilled]: (state,action)=>{
      state.status = 'resolved';
      state.players = action.payload;
    },
    [playersFetchData.rejected]: (state)=>{
      state.status = 'rejected';
      state.error = 'Ошибка авторизации'
    },

    // [playerseacrh.fulfilled]: (state,action) => {
    //   state.players = action.payload.data
    // },
    
  },
})

export const playersReducer = players.reducer 
