
import axios from "axios";
import { ContentTypes } from "../core/redux/sagas/api";
import { savedToken } from "../core/redux/sagas/auth";
import api from '.';

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

  
export async function addTeam (data: any){

  let response = await api.post('/Team/Add',data);

  return response.data;
}


