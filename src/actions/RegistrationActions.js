import React from 'react';
import {base_url} from "../utils/Constants";
import {logger} from "redux-logger/src";

export const SUCCESS_REGISTRATION = 'SUCCESS_REGISTRATION';
export const ERROR_REGISTRATION = 'ERROR_REGISTRATION';

export const registerUserSuccessAction = (userObj) => {
    return {
        type: SUCCESS_REGISTRATION,
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

export const registerUserErrorAction = () => {
    return {
        type: ERROR_REGISTRATION,
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


export const registerUserAction = user => {
    return dispatch => {
        // alert(JSON.stringify(user));
        fetch(`${base_url}/account/en/v1/registration`, {
            method: 'Post',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(response => {
                alert(response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(userObj => {
                let authorization = `Basic ${btoa(user.email + ':' + user.password)}`;
                localStorage.setItem('authorization', JSON.stringify(authorization));
                dispatch(registerUserSuccessAction(userObj));
                alert('Success registration!');
            })
            .catch(e => {
                localStorage.removeItem('authorization');
                dispatch(registerUserErrorAction());
                alert(e.message);
            })


    }
}