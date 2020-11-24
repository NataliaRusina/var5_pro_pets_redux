import {ERROR_REGISTRATION, SUCCESS_REGISTRATION} from "../actions/RegistrationActions";
import {ERROR_SAVED_LOGIN, SUCCESS_SAVED_LOGIN} from "../actions/LoginSavedUserActions";
import {ERROR_LOGIN, SUCCESS_LOGIN} from "../actions/LoginUserActions";
import {ERROR_UPDATE, SUCCESS_UPDATE} from "../actions/UpdateUserActions";
import {ERROR_REMOVE, LOG_OUT, SUCCESS_REMOVE} from "../actions/UserPageActions";

export default function myAccountReducer(state, action) {
    let stateCopy = {...state};
    let user = stateCopy.user;


    switch (action.type) {
        case SUCCESS_REGISTRATION:
        case ERROR_REGISTRATION:
        case SUCCESS_SAVED_LOGIN:
        case ERROR_SAVED_LOGIN:
        case SUCCESS_LOGIN:
        case ERROR_LOGIN:
        case SUCCESS_REMOVE:
        case ERROR_REMOVE:
        case SUCCESS_UPDATE:
        case ERROR_UPDATE:
            user = action.payload.user || user;
            return {...state, user};
        case LOG_OUT:
            user = action.payload.user || user;
            localStorage.removeItem('authorization');
            return {...state, user};

        default:
            return state;
    }
}