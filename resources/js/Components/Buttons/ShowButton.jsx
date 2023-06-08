import React from "react";
import { HiEye } from "react-icons/hi2";

export default function ShowButton({
    href,
    isModifyHidden,
    selectedCheckboxes,
}) {
    return (
        <React.Fragment>
            <a
                href={href}
                className={`text-green-500 h-min border-solid border-gray-200 border-[1.5px] p-2  bg-white  hover:bg-green-500 hover:text-white rounded-[7px]  cursor-pointer ${
                    isModifyHidden ? "hidden" : ""
                } focus:shadow-outline-white ${
                    selectedCheckboxes.length === 0 ? "hidden" : ""
                }`}
            >
                {" "}
                <HiEye />
            </a>
        </React.Fragment>
    );
}
