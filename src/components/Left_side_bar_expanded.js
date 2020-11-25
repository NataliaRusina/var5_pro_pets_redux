import React from 'react';
import styles from '../css_modules/left_side_bar.module.css'
import LogOutUser from "../containers/LogOutUserContainer";

const LeftSideBarExpanded = (props) => {

    return (
        <div className={`container-fluid ${styles.left_side_bar} ml-0 pl-0 d-flex flex-wrap justify-content-end 
            align-content-stretch`}>

            <div className='container-fluid col-12 {styles.menu} mx-0 px-0'>

                {/*===================================================================================================================================================================*/}

                <div className={`container-fluid m-0 p-0 ${styles.menu_tab}`}>

                    <div className='container-fluid col-12 m-0 p-0 d-flex flex-wrap justify-content-end
                    align-items-center'>
                        <button className="fa fa-home col-12 pl-lg-5  container-fluid d-flex
                             justify-content-start"><p className='pl-5'>Home</p>
                        </button>
                    </div>
                    <div className='container-fluid col-12 m-0 p-0 d-flex flex-wrap justify-content-end
                    align-items-center'>
                        <button className="fa fa-search col-12 pl-lg-5 container-fluid d-flex
                              justify-content-start"><p className='pl-5'>Lost</p></button>
                    </div>
                    <div className='container-fluid col-12 m-0 p-0 d-flex flex-wrap justify-content-end
                    align-items-center'>
                        <button className="fa fa-paw col-12 pl-lg-5 container-fluid d-flex
                              justify-content-start"><p className='pl-5'>Found</p></button>
                    </div>
                    <div className='container-fluid col-12 m-0 p-0 d-flex flex-wrap justify-content-end
                    align-items-center'>
                        <button id='accordion' className={`${styles.accordion} col-12 pl-lg-5 fa fa-bullhorn 
                        container-fluid d-flex  justify-content-start`} onClick={() => {
                            console.log('Services click');
                            const acc = document.getElementById('accordion');
                            const pan = document.getElementById('panel');
                            acc.classList.toggle("active");
                            if (pan.style.display === "block") {
                                pan.style.display = "none";
                            } else {
                                pan.style.display = "block";
                            }
                        }}>
                            <p className='pl-5'>Services</p>
                        </button>

                        <div id='panel' className={`${styles.panel} container-fluid col-12 m-0 p-0`}>

                            <div className='container-fluid col-12 d-flex flex-wrap justify-content-end
                    align-items-center'>
                                <button className="fa fa-h-square container-fluid d-flex
                              justify-content-start pl-lg-5"><p className='pl-5'>Hotels</p></button>
                            </div>
                            <div className='container-fluid col-12 d-flex flex-wrap justify-content-end
                    align-items-center'>
                                <button className="fa fa-tree container-fluid d-flex
                              justify-content-start pl-lg-5"><p className='pl-5'>Walking</p></button>
                            </div>
                            <div className='container-fluid col-12  d-flex flex-wrap justify-content-end
                    align-items-center'>
                                <button className="fa fa-paw container-fluid d-flex
                              justify-content-start pl-lg-5"><p className='pl-5'>Fostering</p></button>
                            </div>
                            <div className='container-fluid col-12 d-flex flex-wrap justify-content-end
                    align-items-center'>
                                <button className="fa fa-stethoscope container-fluid d-flex
                              justify-content-start pl-lg-5"><p className='pl-5'>VetHelp</p></button>
                            </div>

                        </div>
                    </div>
                    <div className='container-fluid col-12 m-0 p-0 d-flex flex-wrap justify-content-end
                    align-items-center'>
                        <button className="fa fa-star col-12 container-fluid d-flex
                              justify-content-start pl-lg-5"><p className='pl-5'>Favorites</p></button>
                    </div>

                </div>

                <div className={`row align-content-start ${styles.menu_ava} pt-4`}>
                    <button className='col-4 p-0'>
                        <img src='https://www.gravatar.com/avatar/0?d=mp' alt='user'
                             className={`${styles.user_photo}`}/>
                    </button>
                    <div className={`col-8 ${styles.user_name} justify-content-center`}>Anna Smith</div>
                </div>

                <button className={`row justify-content-start ${styles.logout} pt-4 pb-4 m-0`}>

                    <div className='p-4'>
                        <i className='fa fa-sign-out fa-lg'/>
                    </div>
                    {/*<div className='p-4 justify-content-center' onClick={()=>props.logOutUser()}>LogOut</div>*/}
                    <LogOutUser/>

                </button>

            </div>

        </div>
    );
};

export default LeftSideBarExpanded;