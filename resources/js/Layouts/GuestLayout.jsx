import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex  flex-1 bg-fixed bg-login-bg bg-no-repeat bg-cover bg-center flex-col justify-center px-6  py-12 lg:px-8">
            <div className=" w-max mx-auto">
                <div className="p-10 border-solid border-[1px] border-gray-300 shadow-csh bg-white rounded-40 overflow-hidden" >
                    <div className=' mx-[120px] -mt-5'>
                        <img
                            className="mx-auto h-24 w-min"
                            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/11/15130028/Grab.jpg"
                            alt="logo de l app"
                        />

                    </div>
                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                        <h6 className="text-xl mt-2 font-bold"> Se connecter</h6>
                        
                    <div>{children}</div>
                    </div>
               
                </div>
            </div>
        </div>
    );
}
