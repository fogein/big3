import { getTeam } from "../../api/request/teamAndPlayersApi";




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
  
  return {
      type: "TEAMS_FETCH_DATA_SUCCES",
      data
  }
}


export function teamsFetchData(url:any) {
  return (dispatch:any) => {
    getTeam(url)
          
          .then(response => response)
          .then(data => dispatch(teamsFetchDataSuccess(data)))
          .catch(()=>{});
  }
}



