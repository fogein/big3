
export interface ITeamData{
  name: string,
  foundationYear?: number,
  division?: string,
  conference?: string,
  imageUrl?: string,
  id?:number

}
export interface IPlayerData{
  name?: string,
  number?: number, 
  position?: string,
  team?: any,
  birthday?: string, 
  height?: number,
  weight?: number,
  avatarUrl?: string,
  id?: number
}
