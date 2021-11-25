import { IUser } from "../../api/dto" 
import { IAuth } from "../../api/dto"
import { ITeamData } from "../../api/dto/teamsAndPlayers"

export interface IRootState {
    router: any,
    user: IUser,
    auth: IAuth,
    teams:ITeamData
}
 