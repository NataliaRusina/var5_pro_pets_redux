import React from 'react';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import myAccountReducer from "../reducers/MyAccountReducer";

const initialState = {
   user: {
       email: '',
       name: '',
       avatar: '',
       phone: '',
       roles: ''
   }

};

export const store = createStore(myAccountReducer, initialState, applyMiddleware(thunk));

