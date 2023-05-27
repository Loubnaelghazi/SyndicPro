import React from 'react'
import axios from "axios";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import { HiPlusSmall } from "react-icons/hi2";
import { AiOutlinePrinter, AiOutlineEye  } from "react-icons/ai";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { AiOutlineFilter } from "react-icons/ai";
import {TbSearch} from "react-icons/tb";
export default function Reunion({ auth }) {
    return (
        <Main_content
            user={auth.user}
            Title={"Les réunions"}
            Description={"test test test "}
        >
            <Head title=" Réunions" />
            <div className="-m-14">
                <div className="mx-auto container bg-white dark:bg-white-800 w-full rounded-40">
                    <div className="w-full flex flex-row items-center pt-3 px-5 pb-1 rounded-t-20">
                        <div className="flex-grow"></div>

                        <a
                            className="text-white px-2 pr-4 my-1 cursor-pointer focus:outline-none border-[1.5px] border-gray-200 focus:border-white-800 focus:shadow-outline-white bg-green-500 transition duration-150 ease-in-out hover:bg-green-600 w-max h-8 rounded-[9px] flex items-center justify-center"
                            href="/reunions/ajouter"
                        >
                            <HiPlusSmall className="text-2xl pr-2" /> Ajouter
                            une réunion
                        </a>
                    </div>
                    <div className="flex items-center justify-center space-x-4 mb-3 mt-4">
                        <select className=" w-1/2 px-2 py-1 mx-5 border border-gray-300 rounded-md focus:outline-none  focus:ring-primary-color">
                            <option disabled value="">
                                {" "}
                                Veuillez choisir le type de réunions :
                            </option>
                            <option value=""> ello</option>
                        </select>
                        <button className=" px-2 py-2 text-sm font-medium bg-white text-black border-[1px] border-solid rounded-md hover:bg-gray-50 focus:outline-none">
                            <TbSearch className="h-4 w-4 inline-block mr-1" />
                            rechercher
                        </button>
                    </div>
                    <div className="w-full px-5 py-3">
                        <div className="bg-white dark:bg-white-800 rounded shadow overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Heure
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Lieu
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Sujet
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                25 Mai 2023
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                14:00
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                Salle de réunion
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                Réunion mensuelle
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex justify-end">
                                                <div className="flex items-center space-x-2">
                                                    <button className="px-2 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
                                                        <AiOutlineEye className="h-4 w-4 inline-block mr-1" />
                                                        Consulter
                                                    </button>
                                                    <a href="reunions/modifier
                                                    ">

                                                    <button className="px-2 py-2 text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                                                        <HiPencil className="h-4 w-4 inline-block mr-1" />
                                                        Modifier
                                                    </button>
                                                    </a>
                                                    <button className="px-2 py-2 text-sm font-medium bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">
                                                        <HiTrash className="h-4 w-4 inline-block mr-1" />
                                                        Supprimer
                                                    </button>
                                                    <button className="px-2 py-2 text-sm font-medium bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none">
                                                        <AiOutlinePrinter className="h-4 w-4 inline-block mr-1" />
                                                        Imprimer
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
