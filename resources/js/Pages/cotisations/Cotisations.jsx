import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import { TbSearch } from "react-icons/tb";
import HeaderCheckbox from "@/Components/Table/HeaderCheckbox";
import Checkbox from "@/Components/Checkbox";
import { HiPrinter } from "react-icons/hi2";

export default function Cotisations({ auth }) {
   const data = [
       {
           id: 1,
           proprietaire: "lubnita",
           phone: "06638392",
           montant: 1000,
           infos: "informations",
           statut: "Paid",
       },
       {
           id: 1,
           proprietaire: "lubnita",
           phone: "06638392",
           montant: 1000,
           infos: "informations",
           statut: "Paid",
       },
       // Ajoutez les autres lignes du tableau ici
   ];
   
    return (
        <Main_content
            user={auth.user}
            Title={"Les cotisations"}
            ClassName={"p-0"}
        >
            <Head title="Cotisations" />

            <div className="">
                <div className="bg-[#F8F8FF] dark:bg-gray-700 p-4 py-10  rounded-20 grid grid-cols-4 gap-6">
                    <div className="col-span-3 z-10">
                        <div className=" dark:bg-gray-700 rounded overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-sm font-medium text-purple-500 "
                                        >
                                            <Checkbox />
                                        </th>
                                        <th
                                            scope="col"
                                            className="pr-6 py-4 text-left text-sm font-medium text-purple-500 "
                                        >
                                            N°
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-4 text-left text-sm font-medium text-purple-500 "
                                        >
                                            Montant (DH)
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-4 text-left text-sm font-medium text-purple-500 "
                                        >
                                            Statut
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-4 text-left text-sm font-medium text-purple-500 "
                                        >
                                            Propriétaire
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-center text-sm font-medium text-purple-500 "
                                        >
                                            N° de téléphone
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-center text-sm font-medium text-purple-500 "
                                        >
                                            Informations du lot
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {data.map((item) => (
                                        <>
                                            <tr className="shadow-csh2 bg-white dark:hover:bg-gray-700 ">
                                                <td className="px-2 pl-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 rounded-l-md">
                                                    <Checkbox />
                                                </td>
                                                <td className="px-0 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 rounded-l-md">
                                                    {item.id}
                                                </td>
                                                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                                                    {item.montant}
                                                </td>
                                                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 ">
                                                    <div className="px-2 p-0.5 text-white bg-[#2AD46E] rounded-2xl flex items-center justify-center ">
                                                        {item.statut}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap text-left text-sm text-gray-600 dark:text-gray-200">
                                                    {item.proprietaire}
                                                </td>
                                                <td className="px-2 py-4 whitespace-nowrap text-center text-sm text-gray-600 dark:text-gray-200">
                                                    {item.phone}
                                                </td>
                                                <td className="px-2 py-4 whitespace-nowrap text-center text-sm text-gray-600 dark:text-gray-200">
                                                    {item.infos}
                                                </td>
                                            </tr>
                                            <div className="my-2"></div>
                                            
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-span-1 mt-4 z-0">
                        <div className="flex flex-col dark:bg-gray-700 rounded-20 gap-2">
                            <div className="w-full">
                                <button className="bg-primary-color w-full text-[#FCF5EF] text-sm font-medium px-2 pr-2 cursor-pointer focus:outline-none border-[1.5px] border-gray-200 focus:border-white-800 focus:shadow-outline-white transition duration-150 ease-in-out hover:bg-opacity-80 h-8 rounded-[9px] flex items-center justify-center">
                                    <HiPrinter className="h-4 w-4 mr-2 " />{" "}
                                    Imprimer
                                </button>
                            </div>
                            <div className="flex  flex-col gap-3 shadow-csh2 bg-white rounded-20  p-4">
                                <div className="flex flex-col gap-0.5 ">
                                    <label
                                        htmlFor="search"
                                        className="font-medium text-sm text-t-color "
                                    >
                                        Rechercher :
                                    </label>
                                    <div className="relative h-min">
                                        <input
                                            type="search"
                                            id="search"
                                            name="search"
                                            placeholder="Chercher par le N° de lot :"
                                            className="w-full text-sm appearance-none h-min  block rounded-md  border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color "
                                        />
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                                            <TbSearch className="text-gray-400" />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <label
                                        htmlFor="fournisseur"
                                        className="font-medium text-sm text-t-color"
                                    >
                                        Propriétaire :
                                    </label>
                                    <select
                                        name="fournisseur"
                                        id="fournisseur"
                                        className=" block text-sm w-full rounded-md  border-0 py-1.5 text-primary-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color"
                                    >
                                        <option value=""> hey </option>{" "}
                                        <option value=""> hey </option>{" "}
                                    </select>
                                </div>
                                <div className="flex flex-col gap-0.5  ">
                                    <label
                                        htmlFor="annee"
                                        className="text-t-color text-sm font-medium"
                                    >
                                        Année :
                                    </label>
                                    <select
                                        name="annee"
                                        id="annee"
                                        className="text-sm w-full  h-min rounded-md py-1.5  border-0 text-primary-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color "
                                    >
                                        <option value="">hey </option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-0.5  text-sm ">
                                    <label htmlFor="mois">Mois :</label>
                                    <select
                                        name="mois"
                                        id="mois"
                                        className=" block text-sm w-full rounded-md  border-0 py-1.5 text-primary-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color"
                                    >
                                        <option value=""> hey</option>
                                    </select>
                                </div>
                            </div>
                            <div className="bg-white shadow-csh2 rounded-20 text-sm">
                                <div className="flex flex-col m-3 space-y-3 ">
                                    <div className="flex flex-row items-center">
                                        <input
                                            type="radio"
                                            name="options"
                                            id="toutes"
                                            value="toutes"
                                            className="  form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                        />
                                        <label
                                            htmlFor="toutes"
                                            className="ml-4"
                                        >
                                            Toutes
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <input
                                            type="radio"
                                            name="options"
                                            id="payees"
                                            value="payees"
                                            className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                        />
                                        <label
                                            htmlFor="payees"
                                            className="ml-4"
                                        >
                                            Payées
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <input
                                            type="radio"
                                            name="options"
                                            id="part-payees"
                                            value="part-payees"
                                            className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                        />
                                        <label
                                            htmlFor="part-payees"
                                            className="ml-4"
                                        >
                                            Partiellement payées
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <input
                                            type="radio"
                                            name="options"
                                            id="non-payees"
                                            value="non-payees"
                                            className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                        />
                                        <label
                                            htmlFor="non-payees"
                                            className="ml-4"
                                        >
                                            Non payées
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
