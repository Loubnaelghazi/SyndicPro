import React from "react";

function TDataC({children , ClassName = "text-[13px]"}) {
    return (
        <td className= {` text-gray-800 w-max font-meduim pr-[13px]  whitespace-no-wrap text-white-800  tracking-normal ` + ClassName }>
            {children}
        </td>
    );
}

export default TDataC;
