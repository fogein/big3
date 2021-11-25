

export const teams = (state=[],action:any) => {
  switch (action.type) {
    case "TEAMS_FETCH_DATA_SUCCES":
      return   action.data.data
      
      case "UPDATE":
        
      return [...state]

       default:
        return state;
      }
        
  
}

