import React from "react";

export default function THead({children}) {
    return (
        <th className="text-primary-color font-medium dark:text-white-400  pr-6 text-left tracking-wide leading-4">
            {children}
        </th>
    );
}
