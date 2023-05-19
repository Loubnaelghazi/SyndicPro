import React from "react";
import Layout from "@/layout_jsx/Layout";
export default function Main_content({ children, user ,Title , Description }) {
    return (
        <Layout user={user} Title={Title}  Description={Description} >
            <div className={"bg-white rounded-20 mr-6 border-solid border-[1px] border-gray-300 mt-4 shadow-csh p-14"}>
                {children}
            </div>
        </Layout>
    );
}
