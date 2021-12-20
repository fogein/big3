import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTeam, getTeamSearch } from "../../api/request/teamAndPlayersApi"


export const teamSeacrh:any = createAsyncThunk('teams/teamSeacrh',async(param:any) => {
   const response = await getTeamSearch(param,6)
    return response
  
})

export const teamsFetchData:any = createAsyncThunk('teams/teamsFetchData',async(url:string,{rejectedWithValue}:any) => {
 
  try {
    const response = await getTeam(url)
    const data = response.data
    return data
    
  } catch (error) {
    return rejectedWithValue(error);
  }
}
)

 const teams = createSlice({
  name: 'teams',
  initialState: {
    teams:{},
    status:'',
    error:'',
  },
  reducers: {},
  extraReducers:{
    [teamsFetchData.pending]: (state)=>{
      state.status = 'loading';
    },
    [teamsFetchData.fulfilled]: (state,action)=>{
      state.status = 'resolved';
      state.teams = action.payload;
    },
    [teamsFetchData.rejected]: (state)=>{
      state.status = 'rejected';
      state.error = 'Ошибка авторизации'
    },

    [teamSeacrh.fulfilled]: (state,action) => {
      state.teams = action.payload.data
    },
    
  },
})

export const teamsReducer = teams.reducer 
