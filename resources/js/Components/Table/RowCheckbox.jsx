import React from "react";
import Checkbox from "../Checkbox";

export default function RowCheckbox({item , selectedCheckboxes , handleCheckboxChange , children , ClassName = ' pl-8 pr-6 '}) {
    return (
        <td className={` text-left whitespace-no-wrap text-sm text-white-800 dark:text-white-100 tracking-normal leading-4 ` + ClassName}>
            <Checkbox
                id={item.id.toString()}
                checked={selectedCheckboxes.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
            />
            {children}
        </td>
    );
}
