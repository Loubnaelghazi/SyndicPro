import React from "react";

function TData({children , ClassName = "text-[13px]"}) {
    return (
        <td className= {` font-medium text-t-color break-words pr-6 text-white-800 dark:text-white-100 tracking-normal leading-4 ` + ClassName }>
            {children}
        </td>
    );
}

export default TData;
