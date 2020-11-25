import React from 'react';

const LogOutUser = (props) => {
    return (
        <div className='p-4 justify-content-center' onClick={()=>props.logOutUser()}>LogOut</div>
    );
};

export default LogOutUser;