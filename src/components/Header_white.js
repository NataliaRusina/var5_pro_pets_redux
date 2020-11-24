import React from 'react';
import styles from '../css_modules/header_white.module.css'
import logoWhite from '../images/group_87.png';

const HeaderWhite = () => {

    return (
        <div className='container-fluid m-0 p-0 w-100'>
            <div className={`container-fluid col-12 d-inline-flex flex-wrap align-items-center justify-content-around m-0 pt-4 pb-4
                 ${styles.headerWhite}
            `}>
                <div className={`d-flex d-lg-none align-items-stretch fa fa-bars col-1 my-0 ${styles.bars}`}/>

                <img type='button' src={logoWhite} className={`img-fluid col-7 col-md-5 col-lg-2 ${styles.logoWhite}`}/>

                <div>
                    <button className={`fa fa-plus d-flex flex-wrap justify-content-around align-content-end p-0 
                    ${styles.addNewBut}`}>
                        <p>Add New</p>
                    </button>
                </div>
                {/*<div className={`row`}>*/}
                {/*    <button className={`fa fa-plus d-flex flex-wrap justify-content-around align-content-end mx-2 */}
                {/*    ${styles.iLostBut}`}>*/}
                {/*        <p>I lost my pet</p>*/}
                {/*    </button>*/}
                {/*    <button className={`fa fa-plus d-flex flex-wrap justify-content-around align-content-end mx-2 */}
                {/*    ${styles.iFoundBut}`}>*/}
                {/*        <p>I Found a pet</p>*/}
                {/*    </button>*/}

                {/*</div>*/}

            </div>
        </div>

    );
};

export default HeaderWhite;