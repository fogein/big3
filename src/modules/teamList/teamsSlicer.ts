import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTeam } from "../../api/request/teamAndPlayersApi"


export const teamSeacrh:any = createAsyncThunk('teams/teamSeacrh',(data:any) => {
  
  return data
  
})
export const teamsFetchData:any = createAsyncThunk('teams/teamsFetchData',async(url:string) => {
  
  try {
    const response = await getTeam(url)
    const data = response.data
    return data
    
  } catch (error) {

  }
}
)

 const teams = createSlice({
  name: 'teams',
  initialState: {
    teams:{},
    status:'',
    error:null,
  },
  reducers: {},
  extraReducers:{
    [teamsFetchData.pending]: (state)=>{
      state.status = 'loading';
      state.error = null;
    },
    [teamsFetchData.fulfilled]: (state,action)=>{
      state.status = 'resolved';
      state.teams = action.payload;
    },
    [teamsFetchData.rejected]: (state,action)=>{},

    [teamSeacrh.fulfilled]: (state,action) => {
      state.teams = action.payload.data
    },
    
  },
})

export const teamsReducer = teams.reducer 
