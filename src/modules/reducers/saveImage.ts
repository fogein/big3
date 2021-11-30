

export const imageUrl = (state=[],action:any) => {
  switch (action.type) {
    case "SAVE_IMAGE":
      return   action.data.data
      

      case "UPDATE_IMAGE":
        
      return [...state]

       default:
        return state;
      }
        
  
}

