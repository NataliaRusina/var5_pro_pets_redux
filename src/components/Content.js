import React from 'react';
import styles from "../css_modules/content.module.css";
import Profile_update from "./Profile_update";

const Content = () => {
    return (
        <div className={`container d-flex flex-wrap column align-content-start justify-content-center m-0 mt-2 p-2 
        ${styles.content}`}>
            <Profile_update/>
        </div>
    );
};

export default Content;