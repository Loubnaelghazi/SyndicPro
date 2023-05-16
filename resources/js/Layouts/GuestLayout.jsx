import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 bg- py-12 lg:px-8">
            <div className="w-6/12 mx-auto">
                <div className="p-12  shadow-csh bg-white rounded-xl  overflow-hidden">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="#"
                            alt="logo de l app"
                        />

                        <h6 className="text-xl font-bold"> Se connecter</h6>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        
                    <div>{children}</div>
                    </div>
               
                </div>
            </div>
        </div>
    );
}
