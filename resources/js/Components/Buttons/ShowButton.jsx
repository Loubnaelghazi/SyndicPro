import React from 'react'
import { HiEye } from "react-icons/hi2";

export default function ShowButton({
    href,
    isShowHidden,
    selectedCheckboxes,
}){
    
  return (
      <React.Fragment>
          <a
              href={href}
              className={`text-primary-color border-solid border-gray-200 border-[1.5px] p-2  bg-white  hover:bg-primary-color hover:text-white rounded-[7px]  cursor-pointer`}
          >
              {" "}
              <HiEye />
          </a>
      </React.Fragment>
  );
}
