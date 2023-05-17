import React from 'react'
import Main_content from '@/main _content/Main_content';
import {HiOutlineOfficeBuilding} from "react-icons/hi";
import InputLabel from '@/Components/InputLabel';
const Copopriete = () => {
  return (
      <>
          <Main_content>
              <div>
                  <span className="fill-current text-primary-color ">
                      <HiOutlineOfficeBuilding />{" "}
                  </span>
              </div>
              <div className="grid grid-cols-2 grid-rows-3 gap-x-1 gap-y-3">
                  <InputLabel value="Nom" className="font-semibold" />
                  <InputLabel value="Ville" className="font-semibold" />{" "}
                  <InputLabel value="Adresse" className="font-semibold" />{" "}
                  <InputLabel value="Code Postal" className="font-semibold" />{" "}
                  <InputLabel value="Type" className="font-semibold" />{" "}
                  <InputLabel value="Balance (DH)" className="font-semibold" />{" "}
              </div>
          </Main_content>
      </>
  );
}

export default Copopriete;
