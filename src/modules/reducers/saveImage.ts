

export const imageUrl = (state='',action:any) => {
  switch (action.type) {
    case "SAVE_IMAGE":
      return   action.data.data
      
       default:
        return state;
      }
        
  
}

