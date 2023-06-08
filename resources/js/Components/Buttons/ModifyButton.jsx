import React, { children } from "react";
import { HiPencil } from "react-icons/hi2";
export default function ModifyButton({
    href,
    isModifyHidden,
    selectedCheckboxes,
}) {
    return (
        <React.Fragment>
            {selectedCheckboxes.length === 1 && (
                <a
                    href={href}
                    className={`text-primary-color h-min border-solid border-gray-200 border-[1.5px] p-2  bg-white  hover:bg-primary-color hover:text-white rounded-[7px] ${
                        isModifyHidden ? "hidden" : ""
                    } focus:shadow-outline-white ${
                        selectedCheckboxes.length === 0 ? "hidden" : ""
                    }`}
                    title="Modifier"

                >
                    <HiPencil />
                </a>
            )}
        </React.Fragment>
    );
}
