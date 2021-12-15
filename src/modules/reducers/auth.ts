import { AnyAction } from "redux";


export const AuthReducer = (state=null,action:AnyAction) => {
  
    switch (action.type) {
      case "AUTH":
        return action.data
      
        default:
          return state; 
        }
          
    
  }