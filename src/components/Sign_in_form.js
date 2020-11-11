import React from 'react';
import styles from "../css_modules/sign_up.module.css";

const SignInForm = () => {
    return (
        <div className={`row col-12 m-0 p-0`}>
            <form className='col-12 m-0'>

                <div className={`row ${styles.pass_div}`}>
                    <label htmlFor='inpEmail' className='col-4 col-sm-2'>Email:</label>
                    <input id='inpEmail' type='text' placeholder='helenjohnson@gmail.com'
                           className={`col-8 col-sm-4 ${styles.input}`}/>
                </div>

                <div className={`row ${styles.pass_div}`}>
                    <label htmlFor='inpPass' className='col-4 col-md-2'>Password:</label>
                    <input id='inpPass' type='password' placeholder='***************'
                           className={`col-8 col-sm-4 ${styles.input}`}/>
                </div>

            </form>
        </div>
    );
};

export default SignInForm;