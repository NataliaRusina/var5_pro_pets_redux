import React, {useState} from 'react';
import styles from "../css_modules/sign_up.module.css";

const SignInForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const clearForm = () => {
        document.getElementById('myLogForm').reset();
    }

    const logUser = () => {
        if (!email || !password) {

            alert('All fields must be filled');
            return;
        }

        const authorization = `Basic ${btoa(email + ':' + password)}`;

        props.loginUser(authorization);
    }

    return (
        <div>
            <div className={`row col-12 m-0 p-0`}>
                <form id='myLogForm' className='col-12 m-0'>

                    <div className={`row ${styles.pass_div}`}>
                        <label htmlFor='inpEmail' className='col-4 col-sm-2'>Email:</label>
                        <input id='inpEmail' type='text' placeholder='helenjohnson@gmail.com'
                               className={`col-8 col-sm-4 ${styles.input}`} onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    </div>

                    <div className={`row ${styles.pass_div}`}>
                        <label htmlFor='inpPass' className='col-4 col-md-2'>Password:</label>
                        <input id='inpPass' type='password' placeholder='***************'
                               className={`col-8 col-sm-4 ${styles.input}`} onChange={(e) => {
                            setPassword(e.target.value)
                        }}/>
                    </div>

                </form>
            </div>

            <div className={`row d-flex flex-wrap align-items-end justify-content-around my-2 ${styles.sign_in_4}`}>
                <div className={`col-12 col-sm-5 ml-2 mb-2 ${styles.last_text}`}>By clicking “Submit”,
                    you agree to us processing your <br/>
                    information in accordance with <button><u>these terms</u></button>.
                </div>
                <button onClick={()=> {clearForm()}} className={`col-8 col-sm-2 mt-1 ${styles.cancel}`}>Cancel</button>
                <a href='/main' className={`col-8 col-sm-3 mt-1`}>
                    <button onClick={(e) => {e.preventDefault();
                        logUser();
                    }} className={`col-12 d-flex flex-wrap align-content-center 
                justify-content-around fa fa-paw ${styles.submit}`}>Submit
                    </button>
                </a>

            </div>
        </div>

    );
};

export default SignInForm;