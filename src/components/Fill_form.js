import React from 'react';
import Sign_up_form from "../containers/RegistrationContainer";
import Sign_in_form from "../containers/LoginContainer";

const FillForm = () => {
    return (
        (window.location.pathname === '/registration') ?
            (
                <div>
                    <Sign_up_form/>
                </div>)
            :
            (
                <div>
                    <Sign_in_form/>
                </div>
            )

    );
};

export default FillForm;