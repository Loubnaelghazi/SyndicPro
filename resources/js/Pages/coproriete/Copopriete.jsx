import React, { useState } from "react";
import Main_content from "@/main _content/Main_content";
import InputLabel from "@/Components/InputLabel";
import { HiBuildingOffice, HiChevronDown, HiPlusSmall } from "react-icons/hi2";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiAlertTriangle } from "react-icons/fi";
import Alerte from "@/layout_jsx/Alerte";
import { useEffect } from "react";
import Layout from "@/layout_jsx/Layout";
import Swal from 'sweetalert2';
import axios from "axios";

const Copopriete = ({ auth }) => {
    const [coproprietes, setCoproprietes] = useState([]);
    const [display, setDesplay] = useState("none");

    useEffect(() => {
        if (!coproprietes.length) {
            fetchCoproprietes();
        }
    }, []);

    const fetchCoproprietes = async () => {
        const response = await axios.get(`/api/coproprietes`);
        setCoproprietes(response.data);
    };

    function hideElement() {
        if (display == "none") {
            setDesplay("block");
        } else {
            setDesplay("none");
        }
    }

 const supprimerCopropriete = (coproprieteId) => {
     Swal.fire({
         title: "Êtes-vous sûr ?",
         icon: "warning",
         text: "Attention, vous ne pouvez plus recuperer vos informations une fois la suppression s'est effectue !",
         showCancelButton: true,
         showConfirmButton: true,
         cancelButtonText: "Annuler",
         confirmButtonText: "Oui, supprimer",
     }).then( async (result) => {

         if (result.isConfirmed) {
            try {
                const response = await axios.delete(
                    "api/coproprietes/${coproprieteId}"
                );
                Swal.fire(
                    "Supprimé",
                    response.data.message,
                    "success"
                )
            } catch (error) {
                console.log(error);
            }
         }
     });
 }

    return (
        <>
            <Layout
                user={auth.user}
                Title={"TEST "}
                Description={"Description"}
            >
                {coproprietes?.map((copropriete) => (
                    <div class="relative w-full  mt-10 mb-5 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md ">
                        <div class="bg-clip-border text-4xl mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                            <HiBuildingOffice />
                        </div>
                        <div class="p-4 text-right bg-login-bg bg-cover bg-no-repeat bg-center">
                            <p class="block antialiased text-sm leading-normal font-normal text-blue-gray-600">
                                Residence
                            </p>
                            <h4 class="block antialiased tracking-normal text-4xl -mt-2 font-semibold leading-snug text-blue-gray-900">
                                {copropriete.nom}
                            </h4>
                        </div>
                        <div class=" relative border-t border-blue-gray-50 p-4 pb-6 grid grid-cols-2 grid-rows-3 gap-2 ">
                            <div class=" inline-block text-left absolute right-0 top-0 mt-1 mr-1">
                                <div>
                                    <button
                                        type="button"
                                        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 "
                                        onClick={hideElement}
                                    >
                                        <HiChevronDown />
                                    </button>
                                </div>

                                <div
                                    style={{ display: `${display}` }}
                                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-csh ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <div class="py-1" role="none">
                                        <a
                                            href="/Modifier-copropriete"
                                            class="text-gray-700 block px-4 py-2 text-sm"
                                        >
                                            Modifier
                                        </a>
                                        <button
                                            onClick={() => supprimerCopropriete(copropriete.id)}
                                            class="text-gray-700 block px-4 py-2 text-sm"
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2"
                                key={copropriete.id}
                            >
                                <strong class="text-orange-600">NOM :</strong>
                                <span>{copropriete.nom}</span>
                            </div>
                            <div
                                class="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2"
                                key={copropriete.id}
                            >
                                <strong class="text-orange-600">VILLE :</strong>
                                <span>{copropriete.ville}</span>
                            </div>
                            <div
                                class="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2"
                                key={copropriete.id}
                            >
                                <strong class="text-orange-600">
                                    ADRESSE :
                                </strong>
                                <span>{copropriete.adresse}</span>
                            </div>
                            <div
                                class="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2"
                                key={copropriete.id}
                            >
                                <strong class="text-orange-600">
                                    C.POSTALE :
                                </strong>
                                <span>{copropriete.code_postale}</span>
                            </div>
                            <div
                                class="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2"
                                key={copropriete.id}
                            >
                                <strong class="text-orange-600">TYPE :</strong>
                                <span>{copropriete.type}</span>
                            </div>
                            <div
                                class="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2"
                                key={copropriete.id}
                            >
                                <strong class="text-orange-600">
                                    BALANCE(DH) :
                                </strong>
                                <span>{copropriete.balance}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <a
                    className="w-full h-20 border-dashed  border-[5px] border-gray-300 rounded-20 text-6xl text-gray-300 flex justify-center items-center hover:border-primary-color hover:text-primary-color"
                    href="/add-copropriete "
                >
                    <HiPlusSmall />
                </a>

                {/* {coproprietes?.map((copropriete) => (
                    <div key={copropriete.id}>
                        <p>{copropriete.id}</p>
                        <p>{copropriete.nom}</p>
                        <p>{copropriete.adresse}</p>
                        <p>{copropriete.type}</p>
                        <p>{copropriete.ville}</p>
                        <p>{copropriete.code_postale}</p>
                        <p>{copropriete.balance}</p>
                    </div>
                ))} */}
            </Layout>
        </>
    );
};

export default Copopriete;
