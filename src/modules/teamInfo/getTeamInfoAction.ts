
import { getTeamId } from "../../api/request/teamAndPlayersApi";

export function getTeamInfoSucces(data:any) {
  
  return {
      type: "GET_TEAM_INFO_SUCCES",
      data
  }
}

export function getTeamInfo(id:number) {
  return (dispatch:any) => {
    getTeamId(id)
        .then(response => {
          if(!response) {
              throw new Error(response);
          }
          return response;
      })
      .then(response => response)
      .then(data => dispatch(getTeamInfoSucces(data)))
      
  }
}