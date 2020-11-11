import React from 'react';
import styles from "../css_modules/sign_in.module.css"

const SignUpForm = () => {
    return (
        <div className={`row col-12 m-0 p-0`}>
            <div className='col-12 col-sm-6'>
                <form className='col-12 m-0'>

                    <div className={`row ${styles.pass_div}`}>
                        <label htmlFor='inpName' className='col-4'>Name:</label>
                        <input id='inpName' type='text' placeholder='Helen Johnson'
                               className={`col-8 ${styles.input}`}/>
                    </div>

                    <div className={`row ${styles.pass_div}`}>
                        <label htmlFor='inpEmail' className='col-4'>Email:</label>
                        <input id='inpEmail' type='text' placeholder='helenjohnson@gmail.com'
                               className={`col-8 ${styles.input}`}/>
                    </div>

                    <div className={`row ${styles.pass_div}`}>
                        <label htmlFor='inpPass' className='col-4'>Password:</label>
                        <input id='inpPass' type='password' placeholder='***************'
                               className={`col-8 ${styles.input}`}/>


                    </div>

                    <div className={`row ${styles.pass_div}`}>
                        <label htmlFor='inpRepPass' className='col-4'>Password:</label>
                        <input id='inpRepPass' type='password' placeholder='***************'
                               className={`col-8 ${styles.input}`}/>
                    </div>
                </form>
            </div>

            <div className='col-12 col-sm-6'>
                <div className={`order-xs-3 ${styles.pass_div}`}/>
                <div className={`order-xs-4 ${styles.pass_div}`}/>
                <div className={`order-xs-1 col-12 align-self-center ${styles.instruct_1} ${styles.pass_div}`}>Password must have
                    at
                    least 8 characters with
                    at
                    least one <br/> Capital
                    letter, at least one lower
                    case letter and at least one <br/> number or special character.
                </div>
                <div className={`order-xs-2 col-12 align-self-center ${styles.instruct_2} ${styles.pass_div}`}>
                    Please re-enter your password
                </div>

            </div>


        </div>
    );
};

export default SignUpForm;