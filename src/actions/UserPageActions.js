import {base_url} from "../utils/Constants";

export const SUCCESS_REMOVE = 'SUCCESS_REMOVE';
export const ERROR_REMOVE = "ERROR_REMOVE";
export const LOG_OUT = "LOG_OUT";

export const logOutAction = () => ({

    type: LOG_OUT,
    payload: {
        user: {
            email: '',
            name: '',
            avatar: '',
            phone: '',
            roles: ''
        }
    }

})



export const removeUserSuccessAction = () => {
    return {
        type: SUCCESS_REMOVE,
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

export const removeUserErrorAction = () => {
    return {
        type: ERROR_REMOVE,
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


export const removeUserAction = (email) => {
    return dispatch => {
        let authorization = JSON.parse(localStorage.getItem('authorization'));

        fetch(`${base_url}/account/en/v1/`+email, {
            method: 'DELETE',
            headers: {
                "X-Token": authorization,
                "Content-Type": "application/json"
            }

        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(userObj => {
                localStorage.removeItem('authorization');
                dispatch(removeUserSuccessAction())
            })
            .catch(e => dispatch(removeUserErrorAction()));


    }

}


