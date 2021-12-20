import { ITeamData } from '../dto/teamsAndPlayers';
import {api} from './baseApi';


  
export async function addTeam (data: ITeamData){

  let response = await api.post('/Team/Add',data);


  
  return response.data;

}

// export async function addPlayer (data: any){

//   let response = await api.post('/Player/Add',data);


  
//   return response.data;

// }
export async function getTeam (url:string){


  let response = await api.get(url);
 
  return response;
  }
  export async function getPlayers (url:string){


    let response = await api.get(url);
    
    return response;
    }

export async function getTeamId (id:number){


  let response = await api.get(`/Team/Get?id=${id}`);
 

  
  return response;
  }

  export async function deleteTeam (id: number){

    let response = await api.delete(`/Team/Delete?id=${id}`);
  
  
    
    return response;
  
  }
  
  export async function deleteimage (fileName: string){

    let response = await api.delete(`/image/DeleteImage?${fileName}`);
    
  
    
    return response;
  
  }


  export async function updateTeam (data: ITeamData){

    let response = await api.put('/Team/Update',data);
  
  
    
    return response.data;
  
  }
  export async function getTeamSearch (name:string){


    let response = await api.get(`/Team/GetTeams?Name=${name}&Page=${1}&PageSize=${6}`);
   
  
    
    return response;
    }
