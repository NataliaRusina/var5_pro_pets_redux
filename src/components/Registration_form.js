import React, {useState} from 'react';
import styles from "../css_modules/sign_in.module.css"

const SignUpForm = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const clearForm = () => {
        document.getElementById('myRegForm').reset();
    }

    const regUser = () => {
        if (!name || !email || !password) {
            alert("All fields must be filled");
            return;
        }

        if (!checkEmail(email)){
            alert("Incorrect e-mail");
            return;
        }

        if (!checkPassword(password)){
            alert("Password must have at least 8 characters with at least one\n" +
                "Capital letter, at least one lower case letter and at least one\n" +
                "number or special character.");
            return;
        }

        if (password !== repeatPassword) {

            alert('Repeat correct password');
            return;
        }

        let user = {
            name: name,
            email: email,
            password: password
        }

        props.registerUser(user);


    }

    const checkEmail = (email) => {

        return (/^.+@.+\..+$/igm.test(email));

    }

    const checkPassword = (pass) => {

        // if (pass.length < 8) return false;
        // if (!/[A-Z]/.test(pass)) return false;
        // if (!/[a-z]/.test(pass)) return false;
        // if (!/\d/.test(pass) || (!/[!@#$&*]/.test(pass))) return false;
        // return !/[^A-Za-z0-9!@#$&*]/.test(pass);
        return true;
    }



    return (
        <div>

            <div className={`row col-12 m-0 p-0`}>
                <div className='col-12 col-sm-6'>
                    <form id='myRegForm' className='col-12 m-0'>

                        <div className={`row ${styles.pass_div}`}>
                            <label htmlFor='inpName' className='col-4'>Name:</label>
                            <input id='inpName' type='text' placeholder='Helen Johnson'
                                   className={`col-8 ${styles.input}`} onChange={(e) => {
                                setName(e.target.value)
                            }}/>
                        </div>

                        <div className={`row ${styles.pass_div}`}>
                            <label htmlFor='inpEmail' className='col-4'>Email:</label>
                            <input id='inpEmail' type='text' placeholder='helenjohnson@gmail.com'
                                   className={`col-8 ${styles.input}`} onChange={(e) => {
                                setEmail(e.target.value)
                            }}/>
                        </div>

                        <div className={`row ${styles.pass_div}`}>
                            <label htmlFor='inpPass' className='col-4'>Password:</label>
                            <input id='inpPass' type='password' placeholder='***************'
                                   className={`col-8 ${styles.input}`} onChange={(e) => {
                                setPassword(e.target.value)
                            }}/>


                        </div>

                        <div className={`row ${styles.pass_div}`}>
                            <label htmlFor='inpRepPass' className='col-4'>Password:</label>
                            <input id='inpRepPass' type='password' placeholder='***************'
                                   className={`col-8 ${styles.input}`} onChange={(e) => {
                                setRepeatPassword(e.target.value)
                            }}/>
                        </div>
                    </form>
                </div>

                <div className='col-12 col-sm-6'>
                    <div className={`order-xs-3 ${styles.pass_div}`}/>
                    <div className={`order-xs-4 ${styles.pass_div}`}/>
                    <div
                        className={`order-xs-1 col-12 align-self-center ${styles.instruct_1} ${styles.pass_div}`}>Password
                        must have
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
            <div className={`row d-flex flex-wrap align-items-end justify-content-around my-2 ${styles.sign_in_4}`}>
                <div className={`col-12 col-sm-5 ml-2 mb-2 ${styles.last_text}`}>By clicking “Submit”,
                    you agree to us processing your <br/>
                    information in accordance with <button><u>these terms</u></button>.
                </div>
                <button onClick={() => {
                    clearForm()
                }} className={`col-8 col-sm-2 mt-1 ${styles.cancel}`}>Cancel
                </button>
                <a href='/main' className={`col-8 col-sm-3 mt-1`}>
                    <button onClick={() => regUser()} className={`col-12 d-flex flex-wrap align-content-center 
                justify-content-around fa fa-paw ${styles.submit}`}>Submit
                    </button>
                </a>


            </div>

        </div>


    );
};

export default SignUpForm;