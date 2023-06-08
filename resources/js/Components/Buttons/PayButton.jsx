import React from "react";
import { HiCurrencyDollar } from "react-icons/hi2";

export default function PayButton({
    href,
    isModifyHidden,
    selectedCheckboxes,
}) {
    return (
        <React.Fragment>
            <a
                href={href}
                className={`text-yellow-400 h-min border-solid border-gray-200 border-[1.5px] p-2  bg-white  hover:bg-yellow-400 hover:text-white rounded-[7px]  cursor-pointer ${
                    isModifyHidden ? "hidden" : ""
                } focus:shadow-outline-white ${
                    selectedCheckboxes.length === 0 ? "hidden" : ""
                }`}
                title="Payer"
            >
                {" "}
                <HiCurrencyDollar />
            </a>
        </React.Fragment>
    );
}
