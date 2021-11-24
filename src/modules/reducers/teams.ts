 import update from 'immutability-helper';


export const teams = (state=[],action:any) => {
  switch (action.type) {
    case "TEAMS_FETCH_DATA_SUCCES":
      let teams = action.data.data
      return  teams
      

    

    case "UPDATE":
   
       

       default:
        return state;
      }
        
  
}
// console.log(Object.assign(state, 
//   action.data.data
// ));
