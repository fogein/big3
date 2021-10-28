import { ContentTypes } from "../core/redux/sagas/api";
import { savedToken } from "../core/redux/sagas/auth";

const GET_TEAM = 'http://dev.trainee.dex-it.ru/api/Team/GetTeams';

export const getApiResource = () => {
  fetch(GET_TEAM,{
    method: 'GET',
        headers: new Headers({
          'Authorization': "Bearer " + savedToken,
          'Content-Type': ContentTypes.APPLICATION_JSON, 
        }), 
  })
  .then(res => res.json())
  .then(body => console.log(body))

}