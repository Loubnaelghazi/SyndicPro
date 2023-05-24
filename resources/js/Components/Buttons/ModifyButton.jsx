import { InertiaLink } from "@inertiajs/inertia-react";
import React, { children } from "react";
import { HiPencil, HiTrash, HiPlusSmall } from "react-icons/hi2";

export default function ModifyButton({
    href,
    isModifyHidden,
    selectedCheckboxes,
}) {
    return (
        <a
            className={`text-primary-color border-solid border-gray-200 border-[1.5px] p-2  bg-white  hover:bg-primary-color hover:text-white rounded-[7px] ${
                isModifyHidden ? "hidden" : ""
            } focus:shadow-outline-white ${
                selectedCheckboxes.length === 0 ? "hidden" : ""
            }`}
            href={href}
            
            
        >
            <HiPencil/>
        </a>
    );
}
