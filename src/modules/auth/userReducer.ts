import { AnyAction } from "redux";

export const UserReducer = (state=null,action:AnyAction) => {
  
    switch (action.type) {
      case "SIGN_UP":
        return action.data
      
        default:
          return state; 
        }
          
    
  }

