import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import fileDownload from "js-file-download";
import { FaFileDownload } from "react-icons/fa";
import axios from "axios";

export default function ConsulterReunion({ auth }) {
    const [titre, setTitre] = useState("");
    const [ordre_jour, setOrdre] = useState("");
    const [decision, setDecision] = useState("");
    const [date, setDate] = useState("");
    const [heure, setHeure] = useState("");
    const [lieu, setLieu] = useState("");
    const [sujet, setSujet] = useState("");
    const [chemin_document, setChemin] = useState("");
    const url = window.location.href;
    const reunionId = url.substring(url.lastIndexOf("/") + 1);

    useEffect(() => {
        fetchReunionData();
    }, []);



 const handleDownload = (filePath) => {
     const encodedFilePath = encodeURIComponent(filePath);
     
     axios
         .get(`/api/download/${encodedFilePath}`, {
             responseType: "blob",
         })
         .then((response) => {
             fileDownload(response.data, filePath);
         })
         .catch((error) => {
             console.error(error);
         });
 };

const handlePrint = () => {
    window.print();
};


    const fetchReunionData = async () => {
        try {
            const response = await axios.get(`/api/reunions/${reunionId}`);
            const { data } = response;
            setTitre(data.titre);
            setOrdre(data.ordre_jour);
            setDecision(data.decision);
            setDate(data.date);
            setHeure(data.heure);
            setLieu(data.lieu);
            setSujet(data.sujet);
            setChemin(data.chemin_document);
        } catch (error) {
            console.error(error);
        }
    };
    /* date format */
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();
    const dayOfWeek = dateObj.toLocaleString("default", { weekday: "long" });
    const capitalizedDayOfWeek =
        dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1); //premiere lettre en majuscule

    /*
     */
    return (
        <Main_content
            user={auth.user}
            Title={"Consulter une réunion"}
            Description={"Fiche de la réunion"}
            ClassName="p-4"
        >
            <Head title=" Réunions" />

            <div className="flex flex-col items-center gap-3">
                <div className="relative w-full flex flex-col-2 bg-clip-border rounded-20 bg-third-color p-2 text-gray-700 ">
                    <div className="flex flex-col justify-between shadow-lg bg-white rounded-20 items-center">
                        <div className="flex justify-center items-center bg-primary-color text-white  rounded-t-xl w-full ">
                            <div className="uppercase">{month}</div>
                        </div>
                        <div className="px-2 pb-1 ">
                            <div className="text-primary-color p-2 font-semibold text-5xl flex justify-center ">
                                {day}
                            </div>
                            <div className="text-darkly font-medium flex justify-center">
                                {capitalizedDayOfWeek}
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col px-4 justify-center">
                        <span className="text-3xl font-semibold text-gray-800">
                            {titre}
                        </span>
                        <p className="text-black"> Sujet : {sujet}</p>
                        <div className="flex items-center ">
                            <span className="text-gray-500 italic font-regular">
                                Le {day} {month} {year} {heure} à {lieu}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-clip-border rounded-xl bg-third-color text-darkly">
                    <div className="grid grid-cols-2 p-3 w-full ">
                        <div className="flex flex-row">
                            <span className="text-black font-semibold w-max">
                                Ordre du jour :
                            </span>
                            <ul className="list-disc list-inside">
                                {ordre_jour.split("\n").map((ligne, index) => (
                                    <li key={index}>{ligne}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-row gap-5">
                            <span className="text-black font-semibold ">
                                Decisions :
                            </span>
                            <ul className="list-disc list-inside">
                                {decision.split("\n").map((ligne, index) => (
                                    <li key={index}>{ligne}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
               
                <a
                    onClick={handleDownload(chemin_document)}
                    className="bg-white w-full cursor-pointer text-gray-500  hover:text-primary-color  hover:border-primary-color p-3  flex flex-col items-center justify-center  rounded-20 border-4 border-dashed border-gray-300"
                >
                    <FaFileDownload className="text-2xl" />
                    <div className="text-sm">Télécharger le PV</div>
                </a>
            </div>
        </Main_content>
    );
}
