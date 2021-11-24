import { IUser } from "../../api/dto" 
import { IAuth } from "../../api/dto"

export interface IRootState {
    router: any,
    user: IUser,
    auth: IAuth,
    teams:any
}
