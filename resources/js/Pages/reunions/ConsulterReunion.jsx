import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import axios from "axios";

export default function ConsulterReunion({ auth }) {
       const [titre, setTitre] = useState("");
       const [ordre, setOrdre] = useState("");
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
            ClassName="p-2"
        >
            <Head title=" Réunions" />

            <div className="flex flex-col items-center">
                <div className="relative w-full  mt-1 flex flex-col-2 bg-clip-border rounded-xl bg-[#E4E3FF] text-gray-700 shadow-md ">
                    <div className="flex flex-col justify-between bg-white rounded-xl ml-4 mt-2 mb-2    items-center">
                        <div className="flex justify-center items-center bg-primary-color text-white  rounded-t-xl w-full p-1">
                            <div className="uppercase">{month}</div>
                        </div>

                        <div className="text-primary-color ml-2 text-6xl ">
                            {day}
                        </div>
                        <div className="text-black ml-2 ">
                            {capitalizedDayOfWeek}
                        </div>
                    </div>
                    <div className=" p-4 pl-8">
                        <span className="text-2xl font-semibold text-gray-800">
                            {titre}
                        </span>{" "}
                        <p className="text-black mt-2"> Sujet : {sujet}</p>
                        <div className="flex items-center mt-2">
                            <FiMapPin className="w-6 h-6 text-gray-500 mr-2" />
                            <span className="text-gray-500">
                                {" "}
                                {lieu} à{" "}
                                <span className="text-primary-color">
                                    {heure}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative w-full  mt-5 flex flex-col-2 bg-clip-border rounded-xl bg-[#E4E3FF] text-gray-700 shadow-md ">
                    <div className=" grid grid-cols-2 space-x-36">
                        <span className="text-black mt-2 ml-6  mb-6">
                            Ordre du jour : {ordre}
                        </span>
                        <span className="text-black mt-2">
                            Decisions :{decision}
                        </span>
                    </div>
                </div>
            </div>
            <a
                download
                className="bg-white w-full  hover:text-primary-color hover:text-opacity-60 hover:border-opacity-60 hover:border-primary-color text-primary-color  flex flex-col items-center justify-center  rounded-20 border-4 border-dashed mt-5 mb-3 border-gray-300 "
               // href={`/download/${s_document}`}
            >
                <FaFileDownload className="mt-2 text-2xl" />
                <div className="text-sm mb-2">Télécharger le PV</div>
            </a>
        </Main_content>
    );
}
