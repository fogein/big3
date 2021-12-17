import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTeamId } from "../../api/request/teamAndPlayersApi";





// export const getTeamInfo = (state=[],action:AnyAction) => {
  
//   switch (action.type) {
//     case "GET_TEAM_INFO_SUCCES":
      
//       return [action.data.data]
    
//       default:
//         return state;
//       }
        
  
// }
export const getTeamInfoFetch:any = createAsyncThunk('getTeamInfo/getTeamInfoFetch',async(id:number) => {

    try {
      const response = await getTeamId(id)
      return response
      
    } catch (error) {
  
    }
      
  
})

const getTeamInfo = createSlice({
  name: 'getTeamInfo',
  initialState: {
    teamInfo:{},
    status:'',
    error:null,
  },
  reducers: {},
  extraReducers:{
    [getTeamInfoFetch.pending]: (state)=>{
      state.status = 'loading';
      state.error = null;
    },
    [getTeamInfoFetch.fulfilled]: (state,action)=>{
      state.status = 'resolved';
      state.teamInfo = [action.payload.data];
    },
    
  },
})

export const getTeamInfoReducer = getTeamInfo.reducer 
