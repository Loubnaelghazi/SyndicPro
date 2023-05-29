import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import {
    HiCheckCircle,
    HiChevronDown,
    HiPrinter,
    HiXCircle,
} from "react-icons/hi2";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { HiSearch } from "react-icons/hi";
import THead from "@/Components/Table/THead";
import THeadC from "@/Components/Table/THeadC";
import TDataC from "@/Components/Table/TDataC";
import THeader from "@/Components/Table/THeader";
import TRow from "@/Components/Table/TRow";
import TData from "@/Components/Table/TData";
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
                    <div className="flex items-center justify-between space-x-6 mb-6 mt-4  mx-8 ">
                        <div>
                            <label htmlFor="annee" className=" text-sm font-medium text-gray-500">
                                Année :
                            </label>
                            <select
                                id="annee"
                                name="annee"
                                className=" text-xs font-medium text-gray-500 px-1 py-1 mx-5 w-20 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color"
                            >
                                <option disabled value="">
                                    Veuillez choisir l'année:
                                </option>
                                <option value="" >2020</option>
                            </select>
                        </div>
                        <div>
                            <div className="relative ">
                                <label htmlFor="search" className="text-sm font-medium text-gray-500">
                                    Rechercher :
                                </label>

                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    className=" h-6 border text-sm border-gray-300 rounded-md focus:outline-none  focus:ring-primary-color p-1 pr-3 ml-4 appearance-none"
                                    placeholder=""
                                />
                                <HiSearch className="h-4 w-4 absolute top-1 right-2  text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="date" className=" text-sm font-medium text-gray-500">
                                Date d'aujourd'hui :
                            </label>
                            <span className="text-purple-600 text-sm">
                                {" "}
                                {currentDate}
                            </span>
                        </div>

                        <div className="border-[2px] border-purple-600 border-solid rounded-md flex flex-row items-center  ">
                            <a href="" className="flex items-center">
                                <button className="px-2 p-0.5 font-medium bg-purple-600 text-white rounded-l-sm hover:bg-purple-700 focus:outline-none flex flex-row items-center gap-3">
                                    <span className="text-sm">
                                        <HiPrinter />
                                    </span>
                                    <span className=" text-sm">Imprimer</span>
                                </button>
                            </a>
                            <div
                                className="flex px-1 items-center text-sm"
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
                            <table className="min-w-full ">
                                <thead>
                                    <tr className="">
                                        <th
                                            scope="col"
                                            className="px-2 py-4 pb-6 pl-6 text-left text-xs font-medium text-purple-500 "
                                        >
                                            Propriétaire
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-4 pb-6 text-left text-xs font-medium text-purple-500 "
                                        >
                                            N° Téléphone
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-4 pb-6 text-left text-xs font-medium text-purple-500 "
                                        >
                                            Informations du lot
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-4 pb-6 text-left text-xs font-medium text-purple-500 "
                                        >
                                            Mois payés
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-4 pb-6 text-left text-xs font-medium text-purple-500 "
                                        >
                                            Mois non payés
                                        </th>
                                        {Array.from(
                                            { length: 12 },
                                            (_, index) => (
                                                <th
                                                    key={index}
                                                    scope="col"
                                                    className="px-2 py-4 pb-6 text-left text-xs font-medium text-purple-500"
                                                >
                                                    {index + 1}
                                                </th>
                                            )
                                        )}{" "}
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className=" appearance-none rounded-40 bg-white dark:hover:bg-gray-700">
                                        <td className="px-2 pl-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 rounded-l-xl">
                                            <div>
                                                <div className="font-medium">Mohamed</div>
                                                <div className="font-light">
                                                    El Mrabet
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                                            0612960535
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                                            <div className="font-regular flex flex-col gap-1 text-xs leading-1">
                                                    <div>N°: 1, Etage: 3</div>
                                                    <div>Batiment: A, Porte: 1</div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-center text-sm text-gray-600 dark:text-gray-200">
                                            9
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-center text-sm text-gray-600 dark:text-gray-200">
                                            3
                                        </td>
                                        {Array.from({ length: 9 }, () => (
                                            <td className="py-4 whitespace-nowrap text-2xl dark:text-gray-200 text-purple-600">
                                                <HiCheckCircle />
                                            </td>
                                        ))}
                                        <td className="py-4 whitespace-nowrap text-left text-2xl  dark:text-gray-200 text-red-500">
                                            <HiXCircle />
                                        </td>
                                        <td className="py-4 whitespace-nowrap text-left text-2xl  dark:text-gray-200 text-purple-200">
                                            <VscCircleLargeFilled />
                                        </td>
                                        <td className="py-4 pr-6 whitespace-nowrap text-left text-2xl  dark:text-gray-200 text-purple-200 rounded-r-xl">
                                            <VscCircleLargeFilled />
                                        </td>
                                    </tr>
                                    <div className="my-2 text-transparent bg-transparent border-none"></div>
                                    <tr className=" appearance-none rounded-40 bg-white dark:hover:bg-gray-700">
                                        <td className="px-2 pl-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 rounded-l-xl">
                                            <div>
                                                <div>Mohamed</div>
                                                <div className="font-light">
                                                    El Mrabet
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                                            0612960535
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                                            <div className="font-regular flex flex-col gap-1 text-xs leading-1">
                                                    <div>N°: 1, Etage: 3</div>
                                                    <div>Batiment: A, Porte: 1</div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-center text-sm text-gray-600 dark:text-gray-200">
                                            9
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-center text-sm text-gray-600 dark:text-gray-200">
                                            3
                                        </td>
                                        {Array.from({ length: 9 }, () => (
                                            <td className="py-4 whitespace-nowrap text-2xl dark:text-gray-200 text-purple-600">
                                                <HiCheckCircle />
                                            </td>
                                        ))}
                                        <td className="py-4 whitespace-nowrap text-left text-2xl  dark:text-gray-200 text-red-500">
                                            <HiXCircle />
                                        </td>
                                        <td className="py-4 whitespace-nowrap text-left text-2xl  dark:text-gray-200 text-purple-200">
                                            <VscCircleLargeFilled />
                                        </td>
                                        <td className="py-4 pr-6 whitespace-nowrap text-left text-2xl  dark:text-gray-200 text-purple-200 rounded-r-xl">
                                            <VscCircleLargeFilled />
                                        </td>
                                    </tr>
                                    <div className="my-2 text-transparent bg-transparent border-none"></div>
                                    <tr className=" appearance-none rounded-40 bg-white dark:hover:bg-gray-700">
                                        <td className="px-2 pl-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 rounded-l-xl">
                                            <div>
                                                <div>Mohamed</div>
                                                <div className="font-light">
                                                    El Mrabet
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                                            0612960535
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                                            <div className="font-regular flex flex-col gap-1 text-xs leading-1">
                                                    <div>N°: 1, Etage: 3</div>
                                                    <div>Batiment: A, Porte: 1</div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-center text-sm text-gray-600 dark:text-gray-200">
                                            9
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-center text-sm text-gray-600 dark:text-gray-200">
                                            3
                                        </td>
                                        {Array.from({ length: 9 }, () => (
                                            <td className="py-4 whitespace-nowrap text-2xl dark:text-gray-200 text-purple-600">
                                                <HiCheckCircle />
                                            </td>
                                        ))}
                                        <td className="py-4 whitespace-nowrap text-left text-2xl  dark:text-gray-200 text-red-500">
                                            <HiXCircle />
                                        </td>
                                        <td className="py-4 whitespace-nowrap text-left text-2xl  dark:text-gray-200 text-purple-200">
                                            <VscCircleLargeFilled />
                                        </td>
                                        <td className="py-4 pr-6 whitespace-nowrap text-left text-2xl  dark:text-gray-200 text-purple-200 rounded-r-xl">
                                            <VscCircleLargeFilled />
                                        </td>
                                    </tr>
                                    <div className="my-2 text-transparent bg-transparent border-none"></div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
