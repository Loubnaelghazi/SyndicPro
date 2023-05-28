import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import { HiChevronDown, HiPrinter } from "react-icons/hi2";
import {HiSearch} from "react-icons/hi";
export default function Cotisations({ auth }) {
    const rows = [
        {
            proprietaire: "Propriétaire 1",
            telephone: "N° Téléphone 1",
            lot: "1",
            informations: "Informations du lot 1",
            moisPayes: "3",
            moisNonPayes: "9",
        },
        
        // Ajoutez les autres lignes du tableau ici
    ];
const [currentDate, setCurrentDate] = useState("");

useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("fr-FR");
    setCurrentDate(formattedDate);
}, []);
    return (
        <Main_content
            user={auth.user}
            Title={"Les cotisations"}
            ClassName={"p-0"}
        >
            <Head title="Cotisations" />

            <div className="">
                <div className="mx-auto container bg-gray-100 dark:bg-gray-700 w-full rounded-20">
                    <div className="w-full flex flex-row items-center pt-3 px-5 pb-1 rounded-t-20"></div>
                    <div className="flex items-center justify-start space-x-6 mb-6 mt-4  ml-8 ">
                        <div>
                            <label htmlFor="annee" className=" text-sm ">
                                Année :
                            </label>
                            <select
                                id="annee"
                                name="annee"
                                className="  px-1 py-1 mx-5 w-20 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color"
                            >
                                <option disabled value="">
                                    Veuillez choisir l'année:
                                </option>
                                <option value="">2020</option>
                            </select>
                        </div>
                        <div>
                            <div className="relative ">
                                <label htmlFor="search" className=" text-sm ">
                                    Rechercher :
                                </label>

                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    className="  border border-gray-300 rounded-md focus:outline-none  focus:ring-primary-color p-1 pr-3 ml-4 appearance-none"
                                    placeholder="   Chercher propriétaire "
                                />
                                <HiSearch className="h-4 w-4 absolute top-2 right-2  text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="date" className=" text-sm ">
                                Date d'aujourd'hui :{" "}
                            </label>
                            <span className="text-purple-600">
                                {" "}
                                {currentDate}
                            </span>
                        </div>

                        <div className="border-[1px] border-gray-700 border-solid rounded-md flex flex-row items-center  ">
                            <a href="">
                                <button className="px-2 p-0.5   font-medium bg-purple-600 text-white rounded-l-sm hover:bg-gray-700 focus:outline-none flex flex-row items-center gap-3">
                                    <span className="text-lg">
                                        <HiPrinter />
                                    </span>
                                    <span className=" text-base">Imprimer</span>
                                </button>
                            </a>
                            <div
                                className="flex px-1 items-center text-lg"
                                name=""
                                id=""
                            >
                                <button>
                                    <HiChevronDown />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5 py-3">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded overflow-x-auto">
                            <table className="min-w-full bg-white divide-y divide-white grid border-separate border-spacing-y-3 ">
                                <thead className="bg-gray-100 dark:bg-gray-700 tracking-wider flex justify-between">
                                    <tr className="flex space-x-6">
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Propriétaire
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            N° Téléphone
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            N° Lot
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Informations du lot
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Mois payés
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Mois non payés
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className="  py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className="  py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className="  py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className="  py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className="  py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className=" py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                        <th className="  py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            1
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {rows.map((row, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-50 bg-card rounded space-x-6 flex py-4"
                                        >
                                            <td className="whitespace-nowrap text-sm text-gray-900">
                                                {row.proprietaire}
                                            </td>
                                            <td className="whitespace-nowrap text-sm text-gray-900">
                                                {row.telephone}
                                            </td>
                                            <td className="whitespace-nowrap text-sm text-gray-900">
                                                {row.lot}
                                            </td>
                                            <td className="whitespace-nowrap text-sm text-gray-900">
                                                {row.informations}
                                            </td>
                                            <td className="whitespace-nowrap text-sm text-gray-900">
                                                {row.moisPayes}
                                            </td>
                                            <td className="whitespace-nowrap text-sm text-gray-900">
                                                {row.moisNonPayes}
                                            </td>
                                            <td className="py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
