import React from 'react';
import {your_profile_head} from "../utils/Constants"
import styles from "../css_modules/content.module.css";
import Update from "./Update";




const Profile_update = () => {
    return (
        <div className='container-fluid m-0'>
            <div className={`${styles.board_header} m-0 px-0 py-3`}>
                <h5 className='m-0 p-0'>{your_profile_head}</h5>
            </div>
            <div className='container-fluid m-0 p-0'>
                <Update/>

            </div>
        </div>
    );
};

export default Profile_update;