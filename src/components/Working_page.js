import React from 'react';
import Header_white from "./Header_white";
import Header_green from "./Header_green";
import Left_side_bar from "./Left_side_bar";
import Content from "./Content";
import Right_side_bar from "./Right_side_bar";
import Footer from "./Footer";

const WorkingPage = () => {
    return (
        <div
            className='container-fluid d-flex flex-wrap justify-content-center p-0 m-0 w-100'>
            <div className='d-none d-sm-none d-md-flex col-12 p-0 m-0'>
                <Header_white/>
            </div>
            <div className='d-md-none col-12 p-0 m-0'>
                <Header_green/>
            </div>
            <div className={`container-fluid row col-12 p-0 m-0 justify-content-center`}>
                <div className='d-none d-sm-none d-lg-flex col-lg-3 m-0 p-0'>
                    <Left_side_bar/>
                </div>


                <div className='row col-12 col-lg-9 m-0 p-0'>
                    <div className='col-12 col-lg-8 m-0 p-0'>
                        <Content/>
                    </div>
                    <div className='d-none d-sm-none d-lg-flex col-lg-4 m-0 p-0'>
                        <Right_side_bar/>
                    </div>
                </div>



            </div>
            <div className='d-lg-none col-12 p-0 m-0'>
                <Footer/>
            </div>


        </div>

    );
};

export default WorkingPage;