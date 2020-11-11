import React from 'react';
import styles from '../css_modules/footer.module.css'
import pic from "../images/group_87.png";

const Footer = () => {
    return (
        <div className={`container-fluid row p-0 m-0 ${styles.footer}`}>
            <div className={`col-12 col-sm-4 d-flex flex-wrap align-content-center justify-content-center mt-3 mb-3`}>
                <img src={pic} alt='pic'/>
            </div>
            <div
                className={`row col-12 col-sm-4 d-flex flex-wrap align-content-center justify-content-start mt-3 mb-3`}>
                <div className={`col-12 ${styles.icons}`}>

                    <button>
                        <i className={`fa fa-facebook fa-2x`}/>
                    </button>
                    <button>
                        <i className={`fa fa-instagram fa-2x`}/>
                    </button>

                </div>
                <div className={`col-12  ${styles.address}`}>1600 Amphitheatre Pkwy <br/> Mountain View, CA 94043,
                    USA
                </div>
            </div>
            <div
                className={`row col-12 col-sm-4 row d-flex flex-wrap align-content-center justify-content-center mt-3 mb-3`}>
                <div className='col-sm-12 col-md-6'>
                    <ul className='fa-ul mb-0'>

                        <li>
                            <button>
                                <i className="fa-li fa fa-search"/>Lost
                            </button>
                        </li>
                        <li>
                            <button>
                                <i className="fa-li fa fa-paw"/>Found
                            </button>
                        </li>
                        <li>
                            <button>
                                <i className="fa-li fa fa-stethoscope"/>VetHelp
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <ul className='fa-ul mb-0'>
                        <li>
                            <button>
                                <i className="fa-li fa fa-h-square"/>Hotels
                            </button>
                        </li>
                        <li>
                            <button>
                                <i className="fa-li fa fa-tree"/>Walking
                            </button>
                        </li>
                        <li>
                            <button>
                                <i className="fa-li fa fa-paw"/>Fostering
                            </button>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
        ;
};

export default Footer;