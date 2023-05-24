import React from "react";
import Checkbox from "../Checkbox";

export default function HeaderCheckbox({selectedCheckboxes , data , handleCheckboxChange ,children}) {
    return (
        <th className="pl-8 text-white-600 dark:text-white-400 pr-6 text-left tracking-normal leading-4">
            <Checkbox
                id="all"
                checked={selectedCheckboxes.length === data.length}
                onChange={() => handleCheckboxChange("all")}
            />
            {children}
        </th>
    );
}
