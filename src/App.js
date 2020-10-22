import React from 'react';
import './App.css';
import Start_page from "./components/Start_page";
// import Working_page from "./components/1_st_level/Working_page";
// import SignInSignUp from "./components/1_st_level/Sign_in_sign_up";
import {Route, Switch} from "react-router-dom";



function App() {
  return (
<div>
    <Switch>
        <Route path={['/', '/main', '/main_page']} exact component={Start_page}/>
    </Switch>
</div>

      //================================================================== START PAGE =================================

      // <div>
      //     <Start_page/>
      // </div>

      //================================================================== SIGN-IN / SIGN-UP PAGE =================================
      //
      // <div>
      //     <SignInSignUp/>
      // </div>


      //================================================================== WORK PAGE =================================

      // <div>
      //   <Working_page/>
      // </div>

  );
}

export default App;
