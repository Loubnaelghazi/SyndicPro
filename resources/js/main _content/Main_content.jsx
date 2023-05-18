import React from "react";
import Layout from "@/layout_jsx/Layout";
export default function Main_content({ children ,user }) {
    return (
        <Layout user={user}>
            <div className=" bg-white rounded-20 mr-6 border-solid border-[1px] border-gray-300 py-10 px-16 mt-4 shadow-csh">
                {children}
            </div>
        </Layout>
    );
}
