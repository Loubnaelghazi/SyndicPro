import React, { useState } from "react";
import { HiBuildingOffice, HiChevronDown, HiPlusSmall } from "react-icons/hi2";
import Main_content from "@/main _content/Main_content";
import InputLabel from "@/Components/InputLabel";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiAlertTriangle } from "react-icons/fi";
import Alerte from "@/layout_jsx/Alerte";
import { useEffect } from "react";
import Layout from "@/layout_jsx/Layout";
import Swal from "sweetalert2";
import axios from "axios";
import { Head } from "@inertiajs/react";
import { Link } from "react-router-dom";

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
            title: "Attention!",
            icon: "warning",
            html: `
      <h2 class="text-lg font-bold text-red-500">
        Êtes-vous sûr de vouloir effectuer la suppression ?
      </h2>
      <p class="text-gray-800">
        Vous ne pouvez plus récupérer cet élément après suppression !
      </p>`,
            showCancelButton: true,
            cancelButtonText: "Annuler",
            confirmButtonText: "Supprimer",
            customClass: {
                confirmButton:
                    "px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600 hover:scale-105",
                cancelButton:
                    "px-4 py-2 bg-white border-[1px] border-solid border-red-500 text-red-500 rounded hover:scale-105",
            },
            buttonsStyling: false,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(
                        `api/coproprietes/${coproprieteId}`
                    );
                    setCoproprietes(
                        coproprietes.filter(
                            (copropriete) => copropriete.id !== coproprieteId
                        )
                    );
                    Swal.fire({
                        title: "Supprimé",
                        text: response.data.message,
                        icon: "success",
                        customClass: {
                            confirmButton:
                                "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:scale-105",
                        },
                        buttonsStyling: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    return (
        <>
            <Layout
                user={auth.user}
                Title={"Les coproprietés"}
                Description={"Pour choisir une coproprieté cliquez sur l'icone"}
            >
                <Head title="Copropriete" />
                {coproprietes?.map((copropriete) => (
                    <div
                        className="relative w-full  mt-10 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md "
                        key={copropriete.id}
                    >
                        <div className="bg-clip-border text-4xl mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                            <HiBuildingOffice />
                        </div>
                        <div className="p-4 text-right bg-login-bg bg-cover bg-no-repeat bg-center rounded-t-20">
                            <p className="block antialiased text-sm leading-normal font-normal text-blue-gray-600">
                                Residence
                            </p>
                            <h4 className="block antialiased tracking-normal text-4xl -mt-2 font-semibold leading-snug text-blue-gray-900">
                                {copropriete.nom}
                            </h4>
                        </div>
                        <div className=" relative border-t border-blue-gray-50 p-4 pb-6 grid grid-cols-2 grid-rows-3 gap-2 ">
                            <div className=" absolute right-0 top-0 flex flex-row  m-2 mr-3">
                                <a
                                    className="text-primary-color border-none borde-[1.5px] border-primary-color border-[1.5px] dark:text-white-400 p-2  bg-white-100 d hover:bg-primary-color hover:text-white cursor-pointer rounded"
                                    href={`/copropriete/modifier/${copropriete.id}`}
                                    title="Modifier"
                                >
                                    <HiPencil />
                                </a>
                                <a
                                    className="text-red-500 border-none border-red-500 border-[1.5px]  p-2 bg-white-100  hover:bg-red-500 hover:text-white cursor-pointer rounded"
                                    href="javascript: void(0)"
                                    title="Supprimer"
                                    onClick={() =>
                                        supprimerCopropriete(copropriete.id)
                                    }
                                >
                                    <HiTrash />
                                </a>
                            </div>

                            <div className="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2">
                                <strong className="text-orange-600">
                                    NOM :
                                </strong>
                                <span>{copropriete.nom}</span>
                            </div>
                            <div className="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2">
                                <strong className="text-orange-600">
                                    VILLE :
                                </strong>
                                <span>{copropriete.ville}</span>
                            </div>
                            <div className="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2">
                                <strong className="text-orange-600">
                                    ADRESSE :
                                </strong>
                                <span>{copropriete.adresse}</span>
                            </div>
                            <div className="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2">
                                <strong className="text-orange-600">
                                    C.POSTALE :
                                </strong>
                                <span>{copropriete.code_postale}</span>
                            </div>
                            <div className="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2">
                                <strong className="text-orange-600">
                                    TYPE :
                                </strong>
                                <span>{copropriete.type}</span>
                            </div>
                            <div className="antialiased text-[12px] leading-relaxed font-normal text-blue-gray-600 grid grid-cols-2">
                                <strong className="text-orange-600">
                                    BALANCE (DH) :
                                </strong>
                                <span>{copropriete.balance}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <a
                    className="w-full h-20 border-dashed  border-[5px] border-gray-300 rounded-20 text-6xl text-gray-300 flex justify-center items-center hover:border-primary-color hover:text-primary-color mt-7"
                    href="/copropriete/ajouter"
                >
                    <HiPlusSmall />
                </a>
            </Layout>
        </>
    );
};

export default Copopriete;
