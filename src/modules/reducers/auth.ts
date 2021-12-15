

export const AuthReducer = (state=null,action:any) => {
  
    switch (action.type) {
      case "AUTH":
        return action.data
      
        default:
          return state; 
        }
          
    
  }