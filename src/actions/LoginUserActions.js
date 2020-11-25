import {base_url} from "../utils/Constants";

export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';


export const loginUserSuccessAction = (userObj) => {
    return {
        type: SUCCESS_LOGIN,
        payload: {
            user: {
                email: userObj.email,
                name: userObj.name,
                avatar: userObj.avatar,
                phone: userObj.phone,
                roles: userObj.roles
            }
        }
    }
}

export const loginUserErrorAction = () => {
    return {
        type: ERROR_LOGIN,
        payload: {
            user: {
                email: '',
                name: '',
                avatar: '',
                phone: '',
                roles: ''
            }
        }
    }
}


export const loginUserAction = authorization => {
    return dispatch => {
        fetch(`${base_url}/account/en/v1/login`, {
            method: 'POST',
            headers: {
                "Authorization": authorization,
                "Content-Type": "application/json"
            }

        })
            .then(response => {
                if (response.status === 200) {
                    console.log('success login');
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(userObj => {
                localStorage.setItem('authorization', JSON.stringify(authorization));
                dispatch(loginUserSuccessAction(userObj))
            })
            .catch(e => {
                localStorage.removeItem('authorization');
                dispatch(loginUserErrorAction());
            })


    }
}
