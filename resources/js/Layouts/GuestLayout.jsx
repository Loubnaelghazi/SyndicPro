import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import logo from "../ressources/logo-syndico-01.svg"


export default function Guest({ children }) {
    return (
        <div className="flex bg-fixed bg-no-repeat bg-cover bg-center flex-col justify-center px-6  items-center py-12 lg:px-8">
            <div className=" w-max mx-auto my-auto">
                <div className="p-10 shadow-csh bg-white rounded-[10px] overflow-hidden">
                    <div className="mx-[100px] mb-8">
                        <img
                            className=" h-14 w-min"
                            src={logo}
                            alt="logo de l app"
                        />
                    </div>
                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                        <h6 className="text-xl text-darkly mt-2 font-bold">
                            {" "}
                            Se connecter
                        </h6>

                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
