import React, { useState } from "react";
import Main_content from "@/main _content/Main_content";
import InputLabel from "@/Components/InputLabel";
import { HiBuildingOffice } from "react-icons/hi2";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiAlertTriangle } from "react-icons/fi";
import Alerte from "@/layout_jsx/Alerte";

const Copopriete = ({ auth }) => {
    

   

   

    return (
        <>
            <Main_content user={auth.user}>
                {/* ALERTE  */}
                {/* icones */}
                <div className=" flex space-x-2 justify-end -mr-5 right-0 top-0">
                    <a href="/Modifier-copropriete">
                        <button className=" inline-flex text-2xl mb-8 justify-center items-center  bg-primary-color hover:scale-110 rounded text-white p-1 ">
                            <RiEdit2Fill />
                        </button>
                    </a>

                    <button
                        className=" inline-flex text-2xl mb-8 justify-center items-center  bg-primary-color hover:scale-110 rounded text-white p-1"
                    >
                        <RiDeleteBinLine />
                    </button>
                </div>

                <div className="text-5xl mb-8 justify-center -mt-16 flex flex-row text-primary-color">
                    <HiBuildingOffice />
                </div>
                {/* fin icnones */}
                <div className="grid grid-cols-2 grid-rows-3 gap-x-36 gap-y-8">
                    <InputLabel value="Nom" className="font-semibold" />
                    <InputLabel value="Ville" className="font-semibold" />{" "}
                    <InputLabel value="Adresse" className="font-semibold" />{" "}
                    <InputLabel value="Code Postal" className="font-semibold" />{" "}
                    <InputLabel value="Type" className="font-semibold" />{" "}
                    <InputLabel
                        value="Balance (DH)"
                        className="font-semibold"
                    />{" "}
                </div>
            </Main_content>
        </>
    );
};

export default Copopriete;
