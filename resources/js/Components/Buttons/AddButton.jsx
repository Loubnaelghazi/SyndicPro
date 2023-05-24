import React from "react";
import { HiPlusSmall } from "react-icons/hi2";

export default function AddButton({children , href}) {
    return (
        <a
            className="text-white px-2 pr-4 ml-4 my-1 cursor-pointer focus:outline-none border-[1.5px] border-gray-200 focus:border-white-800 focus:shadow-outline-white bg-my-red  transition duration-150 ease-in-out hover:bg-opacity-80 w-max h-8 rounded-[9px] flex items-center justify-center"
            href={href}
        >
            <HiPlusSmall className="text-2xl pr-2" /> {children}
        </a>
    );
}
