import React from 'react';
import {Link} from "react-router-dom";
import styles from "../css_modules/error.module.css";

const ErrorPage = (props) => {
    return (
        <div className={`${styles.rel}`}>
            <div
                className={`${styles.abs}`}>
                <div>
                    <h2 className={`${styles.error_message}`}>ERROR !!!</h2>
                </div>
                <div>
                    <Link to={'main'}>
                        <button>Main page</button>
                    </Link>
                </div>

            </div>


        </div>

    );
};

export default ErrorPage;