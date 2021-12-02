
import { ContentTypes } from "../../api/request";
import { getTeamSearch } from "../../api/request/teamAndPlayersApi";



export function updateSeacrh(data:any) {
  
  return {
      type: "UPDATE_SEACRH",
      data
  }
}
export function teamSeacrh(data:any) {
  
  return {
      type: "TEAMS_SEARCH",
      data
  }
}
export function update () {
  
  return {
    type: "UPDATE",

  }
}

export function teamsFetchDataSuccess(data:any) {
  console.log(data);
  
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



