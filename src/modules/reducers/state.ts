import { IUser } from "../../api/dto/user" 
import { IAuth } from "../../api/dto/auth"
import { ITeamData } from "../../api/dto/teamsAndPlayers"

export interface IRootState {
    router: any,
    user: IUser,
    auth: IAuth,
    teams:ITeamData,
    imageUrl:string,
    getTeamInfo:ITeamData,

}