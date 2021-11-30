import api from './addTeam';


  
export async function addTeam (data: any){

  let response = await api.post('/Team/Add',data);


  
  return response.data;

}

export async function addPlayer (data: any){

  let response = await api.post('/Player/Add',data);


  
  return response.data;

}

export async function getTeamId (id:any){


  let response = await api.get(`/Team/Get?id=${id}`);
 

  
  return response;
  }

  export async function deleteTeam (id: any){

    let response = await api.delete(`/Team/Delete?id=${id}`);
  
  
    
    return response;
  
  }
  export async function deleteimage (fileName: any){

    let response = await api.delete(`/Team/DeleteImage?${fileName}`);
    
  
    
    return response;
  
  }
