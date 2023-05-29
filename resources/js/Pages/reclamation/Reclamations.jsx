import React from "react";
import Main_content from "@/main _content/Main_content";
import {
    HiPencil,
    HiTrash,
    HiPlusSmall,
    HiEye,
    HiCheckCircle,
    HiWrenchScrewdriver,
    HiXCircle,
    HiArchiveBoxArrowDown,
    HiPlus,
    HiEllipsisVertical,
} from "react-icons/hi2";
import { useState } from "react";

export default function Reclamations({ auth }) {
    const [showActions, setShowActions] = useState(false);
    const [display, setDesplay] = useState("none");
    const [activeSection, setActiveSection] = useState("en attente");
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function hideElement() {
        if (display == "none") {
            setDesplay("block");
        } else {
            setDesplay("none");
        }
    }

    return (
        <Main_content
            user={auth.user}
            Title={"Les reclamations"}
            Description={
                "Vous devez d'abord ajouter les proprietaires et les locataires"
            }
            ClassName="p-0"
        >
            <div className="p-2">
                <div className="flex flex-row justify-between px-32  py-6">
                    <button
                        className={`px-4 py-2 mr-4 text-sm font-medium transition-all ${
                            activeSection === "en attente"
                                ? "bg-blue-500 text-white transform translate-y-0 hover:-translate-y-1"
                                : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
                        } rounded-md focus:outline-none`}
                        onClick={() => handleSectionChange("en attente")}
                    >
                        En attente
                    </button>
                    <button
                        className={`px-4 py-2 mr-4 text-sm font-medium transition-all ${
                            activeSection === "en cours"
                                ? "bg-blue-500 text-white transform translate-y-0 hover:-translate-y-1"
                                : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
                        } rounded-md focus:outline-none`}
                        onClick={() => handleSectionChange("en cours")}
                    >
                        En cours de traitement
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium transition-all ${
                            activeSection === "resolue"
                                ? "bg-blue-500 text-white transform translate-y-0 hover:-translate-y-1"
                                : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
                        } rounded-md focus:outline-none`}
                        onClick={() => handleSectionChange("resolue")}
                    >
                        Résolue
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium transition-all ${
                            activeSection === "fermee"
                                ? "bg-blue-500 text-white transform translate-y-0 hover:-translate-y-1"
                                : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
                        } rounded-md focus:outline-none`}
                        onClick={() => handleSectionChange("fermee")}
                    >
                        Fermée
                    </button>
                </div>
                <hr className="mx-28 mb-4 -mt-2" />
                <div className="">
                    {activeSection === "en attente" && (
                        <div className="mb-4">
                            <div className="mx-auto px-3 flex flex-row">
                                <div
                                    className={` ease-in duration-300 bg-white rounded-20 border-solid border-[1px] m-3 w-min border-gray-300 p-4 `}
                                    onMouseEnter={() => setShowActions(true)}
                                    onMouseLeave={() => setShowActions(false)}
                                >
                                    <div className=" w-64">
                                        <img
                                            src="https://www.ootravaux.fr/sites/ootravaux/files/styles/desktop_article_heading/public/2021-07/Ootravaux-tarif-plombier.jpg?itok=low61f9N"
                                            alt=""
                                            className=" rounded-[13px]"
                                        />
                                    </div>

                                    <div className="text-2xl font-medium mt-2 leading-6">
                                        Fuite en balçon avec collage
                                    </div>
                                    <div className="text-xs italic mt-2 text-gray-500 font-light">
                                        Vous devez d'abord ajouter les
                                        proprietaires et les locatairesVous
                                        devez d'abord ajouter les proprietaires
                                        et les locataires ...
                                    </div>
                                    <div className="text-xs italic text-gray-500 mt-1 font-medium">
                                        Par: Ahmed Kanabaoui Lot N°: 2
                                    </div>
                                    <div className="text-sm  mt-1 font-medium text-blue-500">
                                        21/02/2023
                                    </div>
                                    <div>
                                        <div className="w-full mt-2 border-solid rounded-lg border-[1.5px] border-white text-left flex flex-row gap-1 pr-3 items-center  h-min">
                                            <div className="p-1 font-medium px-3 rounded-l-lg bg-white w-max text-gray-500">
                                                <span>Priorité:</span>
                                            </div>
                                            <div className="w-full flex items-center">
                                                <input
                                                    id="small-range"
                                                    type="range"
                                                    value={value}
                                                    min="0"
                                                    max="5"
                                                    step="1"
                                                    className="h-1 w-full accent-primary-color bg-gray-100 rounded-lg appearance-none cursor-pointer  range-sm range range-warning ring-primary-color focus:ring-primary-color "
                                                    onChange={handleChange}
                                                    style={{
                                                        "--thumb-color":
                                                            "green",
                                                        "--thumb-size": "16px",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {showActions && (
                                        <div className="flex flex-row gap-1 mt-2 justify-between items-center ease-in duration-300 right-0 bottom-0">
                                            <button className="text-purple-500 border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-purple-400 hover:bg-purple-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2 ">
                                                <HiWrenchScrewdriver />
                                            </button>
                                            <button className="text-red-500 border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-red-400 hover:bg-red-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2 ">
                                                <HiXCircle />
                                            </button>
                                            <button className="text-green-500 border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-green-400 hover:bg-green-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2 ">
                                                <HiCheckCircle />
                                            </button>
                                            <div className="border-solid border-[1px] my-1 h-8 border-gray-100"></div>
                                            <a href="/reclamations/afficher">
                                                <button className="text-blue-500 border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2 ">
                                                    <HiEye />
                                                </button>
                                            </a>
                                            <a href="/reclamations/modifier">
                                                <button className="text-primary-color border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-green-400 hover:bg-primary-color hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2  ">
                                                    <HiPencil />
                                                </button>
                                            </a>
                                            <button className="text-red-500 border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-red-400 hover:bg-red-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2  ">
                                                <HiTrash />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                    <a className="bg-white  hover:text-primary-color hover:text-opacity-60 hover:border-opacity-60 hover:border-primary-color text-gray-300 text-8xl flex flex-col items-center justify-center w-64 rounded-20 border-4 border-dashed m-3 border-gray-300 p-4"
                                    href="/reclamations/ajouter">
                                        <HiPlus />
                                        <div className="text-2xl">Ajouter</div>
                                        <div className="text-2xl">
                                            une reclamation
                                        </div>
                                    </a>
                            </div>
                        </div>
                    )}

                    {activeSection === "en cours" && (
                        <div className="mb-4"></div>
                    )}
                </div>
            </div>
        </Main_content>
    );
}
