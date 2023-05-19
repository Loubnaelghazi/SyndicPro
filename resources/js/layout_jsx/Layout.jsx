import React from "react";
import Nav_bar from "./nav-bar/Nav_bar";
import Header from "./header/Header";
import Work_topic from "./work_topic/Work_topic";
import Footer from "./footer/Footer";

function Layout({children , user , Title , Description}) {
    return (
        <div>
            <Nav_bar />
            <div className="flex-grow mx-6 lg:ml-72 transition-transform duration-700">
                <Header user={user}/>
                <Work_topic Title={Title}  Description={Description}/>
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
