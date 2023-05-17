import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Main_content from "../main _content/Main_content";
import Layout from "../layout_jsx/Layout";

export default function Dashboard({ auth }) {
    return (
        <Layout>
            <Main_content />
        </Layout>
    );
}
