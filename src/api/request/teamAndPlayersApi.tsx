
import api from './addTeam';


  
export async function addTeam (data: any){

  let response = await api.post('/Team/Add',data);


  
  return response.data;

}

export async function addPlayer (data: any){

  let response = await api.post('/Player/Add',data);


  
  return response.data;

}


