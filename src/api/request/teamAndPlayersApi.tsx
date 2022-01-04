import { IPlayerData, ITeamData } from '../dto/teamsAndPlayers';
import {api} from './baseApi';


  
export async function getPosition (){

  let response = await api.get('Player/GetPositions');


  
  return response.data;

}

export async function addTeam (data: ITeamData){

  let response = await api.post('/Team/Add',data);


  
  return response.data;

}
export async function addPlayer (data:IPlayerData){

  let response = await api.post('/Player/Add',data);


  
  return response.data;

}
export async function changeProfile (data:any){

  let response = await api.post('/Auth/Change',data);


  
  return response.data;

}

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
  
  export async function getPlayerId (id:any){


    let response = await api.get(`/Player/Get?id=${id}`);
    
    return response;
    }

    export async function deletePlayer (id: number){

      let response = await api.delete(`/Player/Delete?id=${id}`);
    
    
      
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
  export async function updatePlayer (data:IPlayerData){

    let response = await api.put('/Player/Update',data);
  
  
    
    return response.data;
  
  }
  export async function getTeamSearch (name:string){


    let response = await api.get(`/Team/GetTeams?Name=${name}&Page=${1}&PageSize=${6}`);
   
  
    
    return response;
    }
    export async function getPlayerSearch (name:string){


      let response = await api.get(`/Player/GetPlayers?Name=${name}&Page=${1}&PageSize=${6}`);
     
    
      
      return response;
      }