import React, {useEffect, useState} from 'react';
import './App.css';
import Start_page from "./components/Start_page";
import {Switch, Route} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";



function App() {

    return (
        <div>
            <Switch>
                <Route path={['/', '/main', '/login', '/registration']} exact render={() => <Start_page/>}/>
                <Route component={ErrorPage}/>
            </Switch>


        </div>

    );
}

export default App;
