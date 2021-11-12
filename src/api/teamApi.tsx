
import axios from "axios";
import { ContentTypes } from "../core/redux/sagas/api";
import { savedToken } from "../core/redux/sagas/auth";


export const getApiResource = async (url:any) => {


  try {
    const res = await fetch(url,{
      method: 'GET',
        headers: new Headers({
           'Authorization': "Bearer " + savedToken,
          'Content-Type': ContentTypes.APPLICATION_JSON, 
        }),
    });
    
  
    if (!res.ok) {
      console.error('error', res.status);
      return false
    }
  
      return await res.json();
  
    } catch(error:any){
    console.error("error" , error.message)
    return false
    }
  
  }

  
export function postTeam (){

  return axios({
      url: "http://dev.trainee.dex-it.ru/api/Team/Add",
      method: 'POST',
      headers: {
          'Authorization': "Bearer " + savedToken,
          'Content-Type': ContentTypes.APPLICATION_JSON, 
      },   
  });
}



