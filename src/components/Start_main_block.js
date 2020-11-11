import React from 'react';
import styles from '../css_modules/start_block.module.css';
import {Link} from "react-router-dom";


const StartMainBlock = () => {
    return (
        <div className='container-fluid d-flex flex-wrap justify-content-around m-0 p-0'>
            <div className={`container-fluid d-flex flex-wrap justify-content-center row p-0 m-0 ${styles.block_1}`}>
                <div className='jumbotron-fluid d-flex flex-wrap flex-column justify-content-around
                align-content-center
                    col-12 col-sm-6 p-0 m-0'>
                    <div className={`mt-5 mb-5 ${styles.welcome}`}>
                        <h1>Welcome to your</h1>
                        <h1 className={`${styles.greenText}`}>pawfessional </h1>
                        <h1>community</h1>
                    </div>

                    <div className={`m-0 p-0 col-10 justify-content-start ${styles.divButtons}`}>
                        <div
                            className={`container-fluid d-flex flex-wrap align-content-center justify-content-start 
                            m-0 pl-2 pl-lg-5 col-12 
                            ${styles.lostButton}`}>I lost my pet
                        </div>
                        <div
                            className={`container-fluid d-flex flex-wrap align-content-center justify-content-start 
                            m-0 pl-2 pl-lg-5 col-10 
                            ${styles.foundButton}`}>I found a pet
                        </div>
                    </div>

                    <div className={`mt-5 mb-5 ${styles.join}`}>
                        <p>I'm okay, just want to
                            <a href='registration'>
                                <button>JOIN</button>
                            </a>
                            the pawsome community
                        </p>
                    </div>

                </div>
                <div className={`col-12 col-sm-6 ${styles.mainPicture_1}`}/>
            </div>

            {/*===================================================================*/}
            <div
                className={`container d-flex flex-wrap justify-content-center align-content-center m-0 p-0 
                ${styles.block_2}`}>
                Our fluffy space for lovers, admirers, dads and <br/>
                moms of our
                four-legged, winged,
                tailed guys.

            </div>
            {/*===================================================================*/}
            <div className={`container row p-0 m-0 d-flex flex-wrap justify-content-center ${styles.block_3}`}>
                <div className={`col-12 col-sm-6 ${styles.mainPicture_2}`}/>
                <div className={`col-12 col-sm-6 ${styles.posList}`}>
                    <p>Here is collected everything that your pet needs:</p>

                    <ul>
                        <li> professional veterinarian tips;</li>
                        <li> useful information about education and care;</li>
                        <li> fostering home search;</li>
                        <li> information about pet-sitting and walking service;</li>
                        <li> and of course, great communication with new <br/> friends in your social network!</li>

                    </ul>
                </div>
            </div>
            {/*===================================================================*/}
            <div className={`container row p-0 m-0 ${styles.block_4}`}>
                <div
                    className={`d-flex flex-wrap align-content-center justify-content-center col-10 col-sm-5
                     ${styles.comingSoon}`}>Coming
                    soon
                </div>
                <div className={`d-flex flex-wrap align-content-center justify-content-start col-10 col-sm-4
                 ${styles.plans}`}>We are
                    planing to open a new service,<br/>
                    where your cats and dogs can find their love!
                </div>
                <div
                    className={`d-flex flex-wrap align-content-center justify-content-center col-10 col-sm-2
                     ${styles.love}`}>LOVE
                </div>
            </div>
        </div>
    )
};

export default StartMainBlock;