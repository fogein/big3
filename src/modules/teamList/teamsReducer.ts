import { AnyAction } from "redux"


export const teams = (state={},action:AnyAction) => {
  switch (action.type) {
    case "TEAMS_FETCH_DATA_SUCCES":
      return   action.data.data
      
      case "TEAMS_SEARCH":
        return action.data.data

        
    case "UPDATE_SEACRH":
      return action.data.data

        case "UPDATE":
        
          return {...state}

      
      

       default:
        return state;
      }
        
  
}

