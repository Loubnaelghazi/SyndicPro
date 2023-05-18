import React from "react";
import Nav_bar from "./nav-bar/Nav_bar";
import Header from "./header/Header";
import Work_topic from "./work_topic/Work_topic";
import Footer from "./footer/Footer";

function Layout({children , user}) {
    return (
        <div>
            <Nav_bar />
            <div className="flex-grow ml-5 lg:ml-72 transition-transform duration-700">
                <Header user={user}/>
                <Work_topic />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
