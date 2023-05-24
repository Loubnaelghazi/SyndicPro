import React from "react";

export default function THead({children}) {
    return (
        <th className="text-white-600 font-normal dark:text-white-400  pr-6 text-left tracking-normal leading-4">
            {children}
        </th>
    );
}
