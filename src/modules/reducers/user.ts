
export const UserReducer = (state=null,action:any) => {
  
    switch (action.type) {
      case "SIGN_UP":
        return action.data
      
        default:
          return state; 
        }
          
    
  }

