import React, {useEffect, useState} from 'react';
import Sign_in_frontal from "./Sign_in_up_frontal";
import styles from '../css_modules/reg_log_form.module.css';


const RegLogForm = () => {

    const [pageStyle, setPageStyle] = useState({});

    useEffect(() => {
        if ((window.location.pathname === '/login') || (window.location.pathname === '/registration')) {
            setPageStyle({
                visibility: "visible"
            })
        } else {
            setPageStyle({
                visibility: "hidden"
            })
        }


    }, [window.location.pathname]);

    return (
        <div style={pageStyle} className={`col-10 col-sm-8 col-lg-6 ${styles.front}`}>
            <Sign_in_frontal/>
        </div>
    );
};

export default RegLogForm;