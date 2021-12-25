


export interface ITeamData{
  deleteHandler?:any,
  name?: string,
  foundationYear?: number,
  division?: string,
  conference?: string,
  imageUrl?: string,
  id?:number

}
export interface IPlayerData{
  teamName?:string,
  deleteHandler?:any,
  name?: string,
  number?: number, 
  position?: string,
  team?: number,
  birthday?: string, 
  height?: number,
  weight?: number,
  avatarUrl?: string,
  id?: number
}
