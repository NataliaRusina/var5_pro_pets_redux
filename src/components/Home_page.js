import React, {useEffect, useState} from 'react';
import Header_green from "./Header_green";
import Start_main_block from "./Start_main_block";
import Footer from "./Footer";


const HomePage = (props) => {

    const [pageStyle, setPageStyle] = useState({});

    useEffect(() => {
        if ((window.location.pathname === '/login') || (window.location.pathname === '/registration')) {
            setPageStyle({
                position: "relative",
                height: "50rem",
                width: "100%",
                filter: "blur(1rem)",
                webkit: "blur(1rem)",
                overflow: "hidden"
            })
        } else {
            setPageStyle({})
        }


    }, [window.location.pathname]);

    return (
        <div style={pageStyle} className={`v-100`}>
            <Header_green/>
            <Start_main_block/>
            <Footer/>
        </div>


    );
};

export default HomePage;