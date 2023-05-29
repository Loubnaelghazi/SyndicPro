import React, { useState,useEffect } from "react";
import axios from "axios";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import Swal from "sweetalert2";

export default function ModifierReunion({ auth }) {
    const [activeSection, setActiveSection] = useState("details");
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };
 const [titre, setTitre] = useState("");
 const [ordre_jour, setOrdre] = useState("");
 const [pv, setPv] = useState("");
 const [decision, setDecision] = useState("");
 const [date, setDate] = useState("");
 const [heure, setHeure] = useState("");
 const [lieu, setLieu] = useState("");
 const [sujet, setSujet] = useState("");
 const [type, setType] = useState("");
 const [chemin_document, setChemin] = useState("");
 const url = window.location.href;

const reunionId = url.substring(url.lastIndexOf("/") + 1);

 useEffect(() => {
     fetchReunionData();
 }, []);

 const fetchReunionData = async () => {
     try {
         const response = await axios.get(
             `/api/reunions/${reunionId}`
         );
         const { data } = response;
         setTitre(data.titre);
         setOrdre(data.ordre_jour);
         setPv(data.pv);
         setDecision(data.decision);
         setDate(data.date);
         setHeure(data.heure);
         setLieu(data.lieu);
         setSujet(data.sujet);
         setType(data.type);
         setChemin(data.chemin_document);

     } catch (error) {
         console.error(error);
     }
 };

 const handleInputChange = (e) => {
     const { name, value } = e.target;

     switch (name) {
         case "titre":
             setTitre(value);
             break;
         case "ordre_jour":
             setOrdre(value);
             break;
         case "pv":
             setPv(value);
             break;
         case "decision":
             setDecision(value);
             break;
         case "date":
             setDate(value);
             break;
         case "heure":
             setHeure(value);
             break;
         case "lieu":
             setLieu(value);
         case "sujet":
             setSujet(value);
             break;
         case "type":
             setType(value);
             break;
         case "chemin_document":
             chemin_document(value);
             break;
         default:
             break;
     }
 };

 const handleSubmit = async (e) => {
     e.preventDefault();

     const updatedReunion = {
         titre,
         ordre_jour,
         pv,
         decision,
         date,
         heure,
         lieu,
         sujet,
         type,
         chemin_document,
     };

     try {
         const response = await axios.put(
             `/api/reunions/${reunionId}`,
             updatedReunion
         );

         const { data } = response;
         console.log("Updated reunions:", data);

         Swal.fire({
             title: "Êtes-vous sûr de vouloir effectuer ces modifications ?",
             text: "Vous venez de modifier les informations d'une réunion, veuillez confirmer !",
             icon: "warning",
             showCancelButton: true,
             confirmButtonText: "Oui",
             cancelButtonText: "Annuler",
             customClass: {
                 confirmButton:
                     "mx-2 px-4 py-2 bg-yellow-300 text-white rounded hover:bg-yellow-500 hover:scale-105",
                 cancelButton:
                     "mx-2 px-4 py-2 bg-white border-[1px] border-solid border-gray-500 text-gray-500 rounded hover:scale-105",
             },
             buttonsStyling: false,
             preConfirm: () => {
                 return new Promise((resolve) => {
                     resolve();
                 });
             },
         }).then((result) => {
             if (result.isConfirmed) {
                 Swal.fire({
                     title: "Succès",
                     text: "La modification a été effectuée avec succès !",
                     icon: "success",
                     customClass: {
                         confirmButton:
                             "px-4 py-2 bg-primary-color text-white rounded hover:bg-green-600 hover:scale-105",
                     },
                     buttonsStyling: false,
                 }).then(() => {
                     window.location.href = "/reunions";
                 });
             }
         });
     } catch (error) {
         console.error(error);
     }
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

                <form onSubmit={handleSubmit}>
                    <div className=" bg-reunion-color rounded-b-lg  shadow-md p-6">
                        {activeSection === "details" && (
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-4  text-gray-700 ">
                                    DETAILS DE LA REUNION
                                </h2>
                                <div>
                                    <div className="flex flex-col gap-5">
                                        <select
                                            value={type}
                                            onChange={handleInputChange}
                                            name="type"
                                            id="type"
                                            className="w-full h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color"
                                        >
                                            <option disabled value="">
                                                Le type de la réunion
                                            </option>
                                            <option value=" assemblees_generales">
                                                Assemblées génerales
                                            </option>
                                            <option value=" reunion_informations">
                                                Réunions d'informations
                                            </option>
                                        </select>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            value={date}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Date de la réunion"
                                        />
                                        <input
                                            type="time"
                                            name="heure"
                                            id="heure"
                                            value={heure}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Heure de la réunion"
                                        />

                                        <input
                                            type="text"
                                            name="lieu"
                                            id="lieu"
                                            value={lieu}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Lieu de la réunion"
                                        />

                                        <input
                                            type="text"
                                            id="titre"
                                            name="titre"
                                            value={titre}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Titre de la réunion"
                                        />
                                        <input
                                            type="text"
                                            name="sujet"
                                            id="sujet"
                                            value={sujet}
                                            onChange={handleInputChange}
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Sujet de la réunion"
                                        />
                                        <textarea
                                            placeholder="Ordre du jour"
                                            className="w-full h-24 px-2 border border-gray-300 rounded focus:ring-primary-color"
                                            name="ordre"
                                            id="ordre"
                                            value={ordre_jour}
                                            onChange={handleInputChange}
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
                                <textarea
                                    name="pv"
                                    id="pv"
                                    value={pv}
                                    required
                                    onChange={handleInputChange}
                                    className="w-full h-40 p-2 border border-gray-300 rounded-md focus:ring-primary-color"
                                ></textarea>
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
                                <textarea
                                    id="decision"
                                    name="decision"
                                    value={decision}
                                    onChange={handleInputChange}
                                    className="w-full h-40 p-2 border border-gray-300 rounded-md  focus:ring-primary-color"
                                ></textarea>
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
