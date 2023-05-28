import React, { useState } from "react";

function Range() {
    const [value, setValue] = useState(5);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <input
            id="minmax-range"
            type="range"
            min="0"
            max="10"
            value={value}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
    );
}

export default Range;
