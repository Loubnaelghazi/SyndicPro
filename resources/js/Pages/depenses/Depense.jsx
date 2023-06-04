import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import AddButton from "@/Components/Buttons/AddButton";
import { TbSearch } from "react-icons/tb";
import Checkbox from "@/Components/Checkbox";
import DeleteButton from "@/Components/Buttons/DeleteButton";
import ModifyButton from "@/Components/Buttons/ModifyButton";
import ShowButton from "@/Components/Buttons/ShowButton";
export default function Depense({ auth }) {
    const data = [
        {
            id: 1,
            designation: "Product 1",
            fournisseur: "Supplier 1",
            montant: 1000,
            datePaiement: "2023-05-01",
            statut: "Paid",
        },
        {
            id: 2,
            designation: "Product 2",
            fournisseur: "Supplier 2",
            montant: 1500,
            datePaiement: "2023-05-05",
            statut: "Pending",
        },
        {
            id: 3,
            designation: "Product 3",
            fournisseur: "Supplier 3",
            montant: 2000,
            datePaiement: "2023-05-10",
            statut: "Paid",
        },
        {
            id: 4,
            designation: "Product 4",
            fournisseur: "Supplier 4",
            montant: 1200,
            datePaiement: "2023-05-15",
            statut: "Pending",
        },
        {
            id: 5,
            designation: "Product 5",
            fournisseur: "Supplier 5",
            montant: 1800,
            datePaiement: "2023-05-20",
            statut: "Paid",
        },
    ];

    return (
        <Main_content user={auth.user} Title={"Les dépenses"} ClassName={"p-0"}>
            <Head title="Dépenses" />
            <div className="bg-[#F8F8FF] dark:bg-gray-700 p-4 py-10   rounded-20 grid grid-cols-4 gap-6">
                <div className="col-span-3 z-10">
                    <div className="flex flex-row justify-between gap-4 ">
                        {/* <ModifyButton
                            //href={`/depenses/modifier/${depenseId}`}
                          //  selectedCheckboxes={selectedCheckboxes}
                        /> */}
                        {/*   <DeleteButton
                           // onClick={deleteSelectedItems}
                        /> */}
                        <ShowButton href={"/depenses/afficher"} />
                    </div>
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
                                        Désignation
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-4 text-left text-sm font-medium text-purple-500 "
                                    >
                                        Fournisseur
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-4 text-center text-sm font-medium text-purple-500 "
                                    >
                                        Statut
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-4 text-center text-sm font-medium text-purple-500 "
                                    >
                                        Montant
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-4 text-center text-sm font-medium text-purple-500 "
                                    >
                                        Date de paiement
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
                                                {item.designation}
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 ">
                                                {item.fournisseur}
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 text-center  ">
                                                <div className="px-2 p-0.5 text-white bg-[#2AD46E] rounded-2xl flex items-center justify-center ">
                                                    {item.statut}
                                                </div>
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 text-center">
                                                {item.montant}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap  text-sm text-gray-600 dark:text-gray-200 text-center">
                                                {item.datePaiement}
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
                            <AddButton
                                href={"/depenses/ajouter"}
                                ClassName="w-full m-0"
                            >
                                Ajouter une dépense
                            </AddButton>
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
                                        placeholder="Entrer la désignation:"
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
                                    Fournisseur :
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
                                    <label htmlFor="toutes" className="ml-4">
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
                                    <label htmlFor="payees" className="ml-4">
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
        </Main_content>
    );
}
