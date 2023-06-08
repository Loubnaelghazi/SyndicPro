import React from "react";
import Checkbox from "../Checkbox";

export default function HeaderCheckbox({selectedCheckboxes , data , handleCheckboxChange ,children , ClassName = " pl-8 pr-6 "}) {
    return (
        <th className={` text-white-600 dark:text-white-400  text-left tracking-normal leading-4 ` + ClassName}>
            <Checkbox
                id="all"
                checked={selectedCheckboxes.length === data.length}
                onChange={() => handleCheckboxChange("all")}
            />
            {children}
        </th>
    );
}
