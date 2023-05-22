import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Main_content from "../main _content/Main_content";




export default function Dashboard({ auth }) {
    return (
            <>
                <Main_content user={auth.user}/>
            </>
    );
}
