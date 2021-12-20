import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { UserReducer } from '../auth/userSlicer';
import { IRootState } from './state';
import { AuthReducer } from '../auth/authSlicer';
import { teamsReducer } from '../teamList/teamsSlicer';
import { getTeamInfoReducer } from '../teamInfo/getTeamInfoSlicer';
import { playersReducer } from '../playersList/playersSlicer';


// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({
    router: routerReducer,
    user: UserReducer as any,
    auth: AuthReducer as any,
    teams:teamsReducer as any,
    players:playersReducer as any,
    getTeamInfo:getTeamInfoReducer as any,

});

