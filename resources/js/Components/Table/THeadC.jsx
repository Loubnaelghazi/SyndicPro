import React from "react";

export default function THeadC({children}) {
    return (
        <th className="font-light w-max pr-[13px] text-left text-[13px] tracking-normal ">
            {children}
        </th>
    );
}
