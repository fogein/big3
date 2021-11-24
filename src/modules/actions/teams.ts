
import { ContentTypes } from "../../api/request";

export function update (card:any) {
  
  return {
    type: "UPDATE",
    payload:card
  }
}
export function teamsFetchDataSuccess(data:any) {
  return {
      type: "TEAMS_FETCH_DATA_SUCCES",
      data
  }
}

export function teamsFetchData(url:any) {
  return (dispatch:any) => {
      fetch(url,{
        method: 'GET',
          headers: new Headers({
             'Authorization': "Bearer " + localStorage.getItem('token'),
            'Content-Type': ContentTypes.APPLICATION_JSON, 
          }),})
          .then(response => {
              if(!response.ok) {
                  throw new Error(response.statusText);
              }
              return response;
          })
          .then(response => response.json())
          .then(data => dispatch(teamsFetchDataSuccess(data)))
          .catch(()=>{});
  }
}



