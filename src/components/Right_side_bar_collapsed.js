import React from 'react';
import styles from "../css_modules/right_side_bar.module.css";


const RightSideBarCollapsed = () => {

    return (
        <div className={`container-fluid d-flex flex-wrap align-content-start justify-content-start p-2 
        ${styles.right_side_bar}`}>

            <button className={`col-12 p-2 fa fa-arrow-right d-flex flex-wrap justify-content-start m-0 pl-1`}>
                <p className={`pl-2`}> Collapse map </p>
            </button>

            <div id="map" className={`col-12 p-2 ${styles.map}`}>Here must be google map</div>
        </div>
    );
};

export default RightSideBarCollapsed;