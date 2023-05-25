import React, { children } from "react";
import { HiPencil } from "react-icons/hi2";
import { Link } from "@inertiajs/inertia-react";
export default function ModifyButton({
    href,
    isModifyHidden,
    selectedCheckboxes,
}) {
    const firstSelectedCheckbox = selectedCheckboxes[0];
    const modifyUrl = `${href}/${firstSelectedCheckbox}`;
    return (
        <React.Fragment>
            {selectedCheckboxes.length === 1 && (
                <Link
                    href={modifyUrl}
                    className={`text-primary-color border-solid border-gray-200 border-[1.5px] p-2  bg-white  hover:bg-primary-color hover:text-white rounded-[7px] ${
                        isModifyHidden ? "hidden" : ""
                    } focus:shadow-outline-white`}
                >
                    <HiPencil />
                </Link>
            )}
        </React.Fragment>
    );
}
