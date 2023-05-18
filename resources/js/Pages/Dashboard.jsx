import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Main_content from "../main _content/Main_content";
import Layout from "../layout_jsx/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lot from "@/main _content/Lot";




export default function Dashboard({ auth }) {
    return (
            <>
                <Main_content user={auth.user}/>
            </>
    );
}
