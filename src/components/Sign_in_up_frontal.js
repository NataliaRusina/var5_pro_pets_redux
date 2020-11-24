import React from 'react';
import styles from "../css_modules/sign_in.module.css"
import logoWhite from '../images/group_87.png';
import LogRegButtons from "./Reg_log_buttons";
import FillForm from "./Fill_form";


const SignInFrontal = () => {

    return (
        <div className={`d-flex flex-wrap flex-column justify-content-start p-0 pb-2 p-md-2 ${styles.frontal}`}>

            <div
                className={`row d-flex flex-wrap justify-content-between align-content-around m-0 mt-1 mb-1 ${styles.sign_in_1}`}>
                <a href='/main' className='col-6'>
                    <img src={logoWhite} className={`img-fluid mt-3 ${styles.logoWhite}`}/>
                </a>

                <div className='h-2 mt-1'>
                    <a href='/main'>
                        <button className='mt-2'><strong>X</strong></button>
                    </a>
                </div>
            </div>

            <div className={`row p-1 h-2 d-flex flex-wrap align-content-around justify-content-around 
            m-2  ${styles.sign_in_2}`}>
                <div className={`col-12 col-md-7 ml-3 pl-2 ${styles.welcome}`}>
                    <strong>Welcome!</strong> Please sign in / sign up to continue or
                </div>
                <button
                    className={`col-8 col-md-4 m-1 p-0 d-flex flex-wrap align-content-center justify-content-around 
                    fa fa-facebook fa-1x  ${styles.fb_enter}`}>
                    Enter with Facebook
                </button>
            </div>

            <div className={`d-flex flex-wrap col-12 justify-content-center ${styles.sign_in_3}`}>
                <LogRegButtons/>
            </div>

            <FillForm/>

        </div>
    );
};

export default SignInFrontal;