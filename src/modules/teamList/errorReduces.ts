import { AnyAction } from "redux"

export const error = (state=null,action:AnyAction) => {
  switch (action.type) {
    case "ERROR":
      return   action

      default:
        return state;
      }
        
  
}
