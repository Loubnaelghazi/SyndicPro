import React from "react";
import Layout from "@/layout_jsx/Layout";


export default function Main_content({ children, user ,Title , ClassName = " p-14" , Description }) {
    return (
        <Layout user={user} Title={Title}  Description={Description} >
            <div className={` bg-white rounded-20 border-solid border-[1px] border-gray-300 mt-4 shadow-csh ` +  ClassName }>
                {children}
            </div>
        </Layout>
    );
}
