import React  from "react";

export default function TRow({ children , Key , selectedCheckboxes}) {
    return (
        <tr
            key={Key}
            className={`h-14 border-white-300 dark:border-white-200 border-b hover:bg-green-50  ${
                selectedCheckboxes.includes(Key)
                    ? "bg-green-100 hover:hover:bg-green-100"
                    : ""
            }`}
        >
            {children}
        </tr>
    );
}
