import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { UserReducer } from '../auth/userReducer';
import { IRootState } from './state';
import { AuthReducer } from '../auth/authReducer';
import { teamsReducer } from '../teamList/teamsSlicer';
import { getTeamInfoReducer } from '../teamInfo/getTeamInfoSlicer';


// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({
    router: routerReducer,
    user: UserReducer as any,
    auth: AuthReducer as any,
    teams:teamsReducer as any,
    getTeamInfo:getTeamInfoReducer as any,

});

