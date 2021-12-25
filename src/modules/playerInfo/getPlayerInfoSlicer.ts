import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlayerId } from "../../api/request/teamAndPlayersApi";


export const getPlayerInfoFetch:any = createAsyncThunk('getPlayerInfo/getPlayerInfoFetch',async(id:number) => {

    try {
      const response = await getPlayerId(id)
      return response
      
    } catch (error) {
  
    }
      
  
})

const getPlayerInfo = createSlice({
  name: 'getPlayerInfo',
  initialState: {
    playerInfo:{},
    status:'', 
    error:null,
  },
  reducers: {},
  extraReducers:{
    [getPlayerInfoFetch.pending]: (state)=>{
      state.status = 'loading';
      state.error = null;
    },
    [getPlayerInfoFetch.fulfilled]: (state,action)=>{
      state.status = 'resolved';
      state.playerInfo = [action.payload.data];
    },
    
  },
})

export const getPlayerInfoReducer = getPlayerInfo.reducer 
