import React from 'react';
import styles from '../css_modules/header_green.module.css';
import logoWhite from '../images/group_87.png';


const HeaderGreen = () => {
    return (
        <div className='jumbotron-fluid m-0'>
            <div className={`container-fluid col-12 d-inline-flex flex-wrap align-items-center justify-content-around 
            pt-4 pb-4
                 ${styles.headerGreen}
            `}>
                <div className={`d-flex align-items-stretch fa fa-bars col-3 d-md-none my-0 
                ${styles.bars}`}

                />

                <img src={logoWhite} alt='logo' className='img-fluid col-7 col-sm-5 col-lg-3'/>

                <a className={`container-fluid m-0 p-0 col-4 col-sm-3 col-lg-2`} href='login'>
                    <button className={`d-none d-md-flex justify-content-center align-items-center col-12   
                ${styles.signInButton}`}>
                        Sign in
                    </button>
                </a>


            </div>

        </div>
    );
};

export default HeaderGreen;