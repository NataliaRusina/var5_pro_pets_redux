import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Start_page from "./Start_page";
import ErrorPage from "./ErrorPage";
import WorkingPage from "./Working_page";


const MyProPets = (props) => {

    // const [authorization, setAuthorization] = useState('');

    // useEffect(() => {
    //
    //     setAuthorization(JSON.parse(localStorage.getItem('authorization')));
    //     if (authorization) {
    //         console.log(authorization);
    //         props.loginSavedUser(authorization);
    //     } else {
    //         console.log('no token')
    //     }
    //
    // }, []);

    console.log(props.user.email);

    return (
        <div>
            <Switch>
                <Route path={['/', '/main', '/login', '/registration']} exact render={() => (
                    (props.user.email) ? (
                            <Redirect to='/home'/>
                        ) :
                        <Start_page/>
                )}/>

                <Route path={'/home'} exact render={() => (
                    // (!props.user.email) ? (
                    //         <Redirect to='/main'/>
                    //     ) :
                        <WorkingPage/>
                )}/>

                <Route component={ErrorPage}/>

            </Switch>


        </div>
    );
};

export default MyProPets;