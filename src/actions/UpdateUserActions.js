import {base_url} from "../utils/Constants";

export const SUCCESS_UPDATE = "SUCCESS_UPDATE";
export const ERROR_UPDATE = "ERROR_UPDATE";


export const editUserSuccessAction = (userObj) => {
    return {
        type: SUCCESS_UPDATE,
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

export const editUserErrorAction = () => {
    return {
        type: ERROR_UPDATE,
        payload: {
            user: null,
            serviceMessage: ''
        }
    }
}

export const editUserAction = (email, newData) => {
    return dispatch => {

        fetch(`${base_url}/account/en/v1/1/`+email, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "X-Token": JSON.parse(localStorage.getItem('authorization')),
            },
            body: JSON.stringify(newData)
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(userObj => {
                console.log('editUserSuccessAction')
                dispatch(editUserSuccessAction(userObj))})
            .catch(e => dispatch(editUserErrorAction()))

    }
}