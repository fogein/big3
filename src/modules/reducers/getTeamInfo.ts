


export const getTeamInfo = (state=[],action:any) => {
  
  switch (action.type) {
    case "GET_TEAM_INFO_SUCCES":
      
      return   [action.data.data]
    
      default:
        return state;
      }
        
  
}

