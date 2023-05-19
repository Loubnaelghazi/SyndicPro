import Main_content from "@/main _content/Main_content";
import React from "react";
import { HiPencil, HiTrash } from "react-icons/hi2";

import { DataGrid } from "@mui/x-data-grid";
import { Head } from "@inertiajs/react";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
export default function Lot({ auth }) {
    return (
        <Main_content
            user={auth.user}
            Title={"Lots de la copropriete"}
            Description={
                "Vous devez d'abord ajouter les proprietaires et les locataires"
            }
        >
            <Head title="Lots" />

            <div className="-m-14">
                <div className="mx-auto container bg-white dark:bg-white-800  rounded-40">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                            <div className="flex items-center gap-4">
                                <a
                                    className="text-primary-color border-solid border-primary-color border-[1.5px] dark:text-white-400 p-2 border-transparent bg-white-100 dark:bg-white-700 dark:hover:bg-white-600 hover:bg-primary-color hover:text-white cursor-pointer rounded focus:outline-none focus:border-white-800 focus:shadow-outline-white"
                                    href="javascript: void(0)"
                                >
                                    <HiPencil />
                                </a>
                                <a
                                    className="text-red-500 border-solid border-red-500 border-[1.5px]  p-2 bg-white-100 dark:bg-white-700 dark:hover:bg-white-600 hover:bg-red-500 hover:text-white cursor-pointer rounded focus:outline-none focus:border-white-800 focus:shadow-outline-white"
                                    href="javascript: void(0)"
                                >
                                    <HiTrash />
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                            <div className="lg:ml-6 flex items-center">
                                <div className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-white-800 focus:shadow-outline-white bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-plus"
                                        width={28}
                                        height={28}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={12} y1={5} x2={12} y2={19} />
                                        <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden rounded-40">
                        <table className="min-w-full bg-white dark:bg-white-800">
                            <thead>
                                <tr className="w-full h-16 border-white-300 dark:border-white-200 border-b py-8">
                                    <th className="pl-8 text-white-600 dark:text-white-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                        <input
                                            type="checkbox"
                                            className="cursor-pointer relative w-5 h-5 border rounded border-white-400 dark:border-white-200 bg-white dark:bg-white-800 outline-none"
                                            onclick="checkAll(this)"
                                        />
                                    </th>
                                    <th className="text-white-600 dark:text-white-400 font-normal pr-6 text-left text-xs tracking-normal leading-4">
                                        ID
                                    </th>
                                    <th className="text-white-600 dark:text-white-400 font-normal pr-6 text-left text-xs tracking-normal leading-4">
                                        TYPE
                                    </th>
                                    <th className="text-white-600 dark:text-white-400 font-normal pr-6 text-left text-xs tracking-normal leading-4">
                                        BATIMENT
                                    </th>
                                    <th className="text-white-600 dark:text-white-400 font-normal pr-6 text-left text-xs tracking-normal leading-4">
                                        ETAGE
                                    </th>
                                    <th className="text-white-600 dark:text-white-400 font-normal pr-6 text-left text-xs tracking-normal leading-4">
                                        PORTE
                                    </th>
                                    <th className="text-white-600 dark:text-white-400 font-normal pr-6 text-left text-xs tracking-normal leading-4">
                                        PROPRIETAIRE
                                    </th>
                                    <td className="text-white-600 dark:text-white-400 font-normal pr-8 text-left text-xs tracking-normal leading-4">
                                        LOCATAIRE
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="h-24 border-white-300 dark:border-white-200 border-b">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-white-800 dark:text-white-100 tracking-normal leading-4">
                                        <input
                                            type="checkbox"
                                            className="cursor-pointer relative w-5 h-5 border rounded border-white-400 dark:border-white-200 bg-white dark:bg-white-800 outline-none"
                                            onclick="tableInteract(this)"
                                        />
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                        1
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                        Appartement
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                        A
                                    </td>
                                    <td className="pr-6 whitespace-no-wrap">
                                        2{" "}
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                        11
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                        Mohamed
                                    </td>
                                    <td className="pr-6">Mohamed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
