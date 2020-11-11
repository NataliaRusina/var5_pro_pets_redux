import React, {useState} from 'react';
import RegLogForm from "./Reg_log_form";
import HomePage from "./Home_page";


const StartPage = (props) => {


    return (

        <div className='d-flex flex-wrap justify-content-center'>

            <HomePage/>
            <RegLogForm/>

        </div>

    );
};

export default StartPage;

