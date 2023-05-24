import React from "react";
import Checkbox from "../Checkbox";

export default function RowCheckbox({item , selectedCheckboxes , handleCheckboxChange , children}) {
    return (
        <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-white-800 dark:text-white-100 tracking-normal leading-4">
            <Checkbox
                id={item.id.toString()}
                checked={selectedCheckboxes.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
            />
            {children}
        </td>
    );
}
