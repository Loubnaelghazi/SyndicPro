import React, { useState } from "react";
import axios from "axios";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import Swal from "sweetalert2";
export default function ModifierReunion({ auth }) {
    const [activeSection, setActiveSection] = useState("details");
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <Main_content
            user={auth.user}
            Title={"Modifier une réunion"}
            Description={"test test test "}
        >
            <Head title="Réunions" />

            <div className="p-6">
                <div className="flex">
                    <button
                        className={`px-4 py-2 mr-4 text-sm font-medium  ${
                            activeSection === "details"
                                ? "bg-reunion-color text-white "
                                : "bg-white text-gray-700 "
                        } rounded-t-md focus:outline-none`}
                        onClick={() => handleSectionChange("details")}
                    >
                        Détails de la réunion
                    </button>
                    <button
                        className={`px-4 py-2 mr-4 text-sm font-medium ${
                            activeSection === "report"
                                ? "bg-reunion-color text-white "
                                : "bg-white text-gray-700 "
                        } rounded-t-md focus:outline-none`}
                        onClick={() => handleSectionChange("report")}
                    >
                        Compte-rendu (PV)
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium ${
                            activeSection === "decisions"
                                ? "bg-reunion-color text-white "
                                : "bg-white text-gray-700 "
                        } rounded-t-md focus:outline-none`}
                        onClick={() => handleSectionChange("decisions")}
                    >
                        Décisions
                    </button>
                </div>

                <form>
                    <div className=" bg-reunion-color rounded-b-lg  shadow-md p-6">
                        {activeSection === "details" && (
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-4  text-gray-700 ">
                                    DETAILS DE LA REUNION
                                </h2>
                                <div>
                                    <div className="flex flex-col gap-5">
                                        <select
                                            name="type"
                                            id="type"
                                            className="w-full h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color"
                                        >
                                            <option disabled value="">
                                                Le type de la réunion
                                            </option>
                                        </select>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Date de la réunion"
                                        />
                                        <input
                                            type="time"
                                            name="time"
                                            id="time"
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Heure de la réunion"
                                        />
                                        <input
                                            type="text"
                                            id="titre"
                                            name="titre"
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Titre de la réunion"
                                        />
                                        <textarea
                                            placeholder="Ordre du jour"
                                            className="w-full h-24 px-2 border border-gray-300 rounded focus:ring-primary-color"
                                            name="ordre"
                                            id="ordre"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "report" && (
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold  mb-4  text-gray-700 ">
                                    COMPTE RENDU DE LA REUNION
                                </h2>
                                <textarea className="w-full h-40 p-2 border border-gray-300 rounded-md focus:ring-primary-color" />
                            </div>
                        )}

                        <div
                            className={`${
                                activeSection === "decisions"
                                    ? "block"
                                    : "hidden"
                            }`}
                        >
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-4  text-gray-700 ">
                                    DECISIONS PRISES A LA FIN DE LA REUNION
                                </h2>
                                <textarea className="w-full h-40 p-2 border border-gray-300 rounded-md  focus:ring-primary-color" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-start ">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#9a97ff]  hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color  text-white rounded-md mr-2"
                        >
                            Enregistrer
                        </button>
                        <a
                            href="/reunions
                        "
                        >
                            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                                Annuler
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </Main_content>
    );
}
