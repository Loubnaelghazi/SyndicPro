import React from "react";
import Layout from "@/layout_jsx/Layout";
import { InertiaLink } from "@inertiajs/inertia-react";
export default function Main_content({children}) {
    return (
        <Layout>
            <div className=" bg-white rounded-20 mr-6 p-5 mt-4 shadow-csh">
{children}

            </div>
            
        </Layout>
    );
}
