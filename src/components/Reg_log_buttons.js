import React, {useEffect, useState} from 'react';
import styles from "../css_modules/sign_in.module.css"


const LogRegButtons = () => {

    const [signUpStyle, setSignUpStyle] = useState({});
    const [signInStyle, setSignInStyle] = useState({});

    useEffect(() => {
        if (window.location.pathname === '/login') {
            setSignInStyle({
                opacity: '1'
            });
            setSignUpStyle({
                opacity: '0.28'
            });
        } else {
            setSignUpStyle({
                opacity: '1'
            });
            setSignInStyle({
                opacity: '0.28'
            });
        }

    }, [window.location.pathname]);

    return (

        <div className={`col-12 row d-flex flex-wrap justify-content-center align-content-center m-0 mb-2 p-0`}>
            <a href='/registration' className={`col-6 m-0 p-0`}>
                <button style={signUpStyle} className={`col-12 m-0 ${styles.but_1}`}>Sign up</button>
            </a>

            <a href='/login' className={`col-6 m-0 p-0`}>
                <button style={signInStyle} className={`col-12 m-0 ${styles.but_2}`}>Sign in</button>
            </a>
        </div>

    );
};

export default LogRegButtons;