import React from 'react';
import styles from "../css_modules/profile.module.css";

const Update = () => {
    return (
        <div className='container-fluid p-0 m-0 col-12'>
            <div className={`col-12 row d-flex flex-wrap justify-content-center align-content-center m-0 mb-2 px-0`}>
                <button className={`jumbotron-fluid col-sm-12 col-md-6 m-0 p-0 ${styles.but_1} ${styles.active}`}>
                    My profile
                </button>
                <button className={`jumbotron-fluid col-sm-12 col-md-6 m-0 p-0 ${styles.but_2} ${styles.passive}`}>
                    Activities
                </button>
            </div>
            <div className={`col-12 d-flex flex-wrap justify-content-start pb-5 mx-0 ${styles.empty_board}`}>
                <div className={`col-12 d-flex flex-wrap justify-content-start align-content-center mt-0 pt-0`}>
                    <div
                        className={`${styles.upd_photo_div} col-sm-6 col-md-3 row d-flex flex-wrap align-content-center p-0`}>
                        <img src='https://www.gravatar.com/avatar/0?d=mp'
                             className={`mt-0 p-0 ${styles.profile_user_photo}`} alt={'avatar'}/>
                        <button
                            className={`fa fa-camera d-flex justify-content-center align-items-center m-0 
                            ${styles.upd_photo_button}`}/>

                    </div>
                    <strong
                        className={`col-sm-3 col-md-5 col-md-4 mt-0 pt-0 d-flex justify-content-center ${styles.profile_user_name}`}>
                        Anna Smith</strong>
                    <button
                        className={`col-3 fa fa-pencil d-flex justify-content-end align-items-end m-0 ${styles.profile_upd_button} 
                        ${styles.no_display}`}/>
                </div>
                <div className={`col-12 m-0 mt-3 py-1 px-0 ${styles.profile_form}`}>
                    <form className='col-12 m-0 pr-0'>
                        <div className='row col-12 py-2 px-0'>
                            <label htmlFor='prof_email'
                                   className='col-3 px-0 m-0 d-flex justify-content-start'>Email: </label>
                            <input className='col-9 px-0' type='email' name='email' id='prof_email'
                                   defaultValue='helenjohnson@gmail.com'/>
                        </div>

                        <div className='row col-12 py-2 px-0'>
                            <label htmlFor='prof_phone'
                                   className='col-3 px-0 m-0 d-flex justify-content-start'>Phone: </label>
                            <input className='col-9 px-0' type='phone' name='phone' id='prof_phone'
                                   defaultValue='000-000-00-00'/>
                        </div>

                        <div className='row col-12 py-2 px-0'>
                            <label htmlFor='prof_fblink' className='col-3 px-0 m-0 d-flex justify-content-start'>FB
                                link: </label>
                            <input className='col-9 px-0' type='url' name='fblink' id='prof_fblink'
                                   defaultValue='https://www.facebook.com/anna.smith908430'/>
                        </div>
                    </form>
                </div>

            </div>
            <div className={`col-12 d-flex flex-wrap justify-content-end m-2 p-2`}>
                <button className={`col-sm-4 col-md-2 p-0 mx-1 d-flex flex-wrap justify-content-around align-content-center 
                ${styles.cancelChangesBut}`}> Cancel
                </button>

                <button className={`col-sm-4 col-md-3 p-0 mx-1 d-flex flex-wrap justify-content-around align-content-center 
                ${styles.saveChangesBut}`}>
                    <i className="fa fa-save"/>Save changes
                </button>
            </div>


        </div>
    );
};

export default Update;
