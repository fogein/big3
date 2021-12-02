import { handleActions } from "redux-actions";
import { IAuth } from "../../api/dto/auth"; 
import { AuthActions } from "../actions/auth";

const initialState = null;

export const AuthReducer = handleActions<IAuth | null, IAuth>({
    [AuthActions.Type.SET_AUTH]: (state, action) => action.payload,
}, initialState)
