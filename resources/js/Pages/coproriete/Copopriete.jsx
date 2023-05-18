import React from "react";
import Main_content from "@/main _content/Main_content";
import InputLabel from "@/Components/InputLabel";
import {HiBuildingOffice} from "react-icons/hi2"
const Copopriete = ({auth}) => {
    return (
        <>
            <Main_content user={auth.user}>
                <div className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                    <HiBuildingOffice/>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-x-1 gap-y-3">
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
