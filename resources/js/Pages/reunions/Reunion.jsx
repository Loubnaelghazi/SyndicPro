import React, { useState, useEffect } from "react";
import axios from "axios";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import { AiOutlinePrinter, AiOutlineEye } from "react-icons/ai";
import { HiPencil, HiTrash, HiEye, HiPrinter } from "react-icons/hi2";
import { TbSearch } from "react-icons/tb";
import Swal from "sweetalert2";
import AddButton from "@/Components/Buttons/AddButton";

export default function Reunion({ auth }) {
    const [reunions, setReunions] = useState([]);

    const fetchReunions = async () => {
        const response = await axios.get(`/api/reunions`);
        setReunions(response.data);
    };

    useEffect(() => {
        if (!reunions.length) {
            fetchReunions();
        }
    }, []);

    const supprimer = async (reunionId) => {
        let alertBox = null;

        Swal.fire({
            title: "Attention!",
            icon: "warning",
            html: `
      <h2 class="text-lg font-bold text-red-500">
        Êtes-vous sûr de vouloir effectuer la suppression ?
      </h2>
      <p class="text-gray-800">
        Vous ne pouvez plus récupérer cet élément après suppression !
      </p>`,
            showCancelButton: true,
            cancelButtonText: "Annuler",
            confirmButtonText: "Supprimer",
            customClass: {
                confirmButton:
                    "px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600 hover:scale-105",
                cancelButton:
                    "px-4 py-2 bg-white border-[1px] border-solid border-red-500 text-red-500 rounded hover:scale-105",
            },
            buttonsStyling: false,
        }).then(async (result) => {
            if (result.isConfirmed) {
                alertBox = Swal.fire({
                    title: "Suppression en cours...",
                    allowOutsideClick: false,
                    onBeforeOpen: () => {
                        Swal.showLoading();
                    },
                    showConfirmButton: false,
                });

                try {
                    const response = await axios.delete(
                        `api/reunions/${reunionId}`
                    );
                    setReunions((prevReunions) =>
                        prevReunions.filter(
                            (reunion) => reunion.id !== reunionId
                        )
                    );
                    Swal.fire({
                        title: "Supprimé",
                        text: response.data.message,
                        icon: "success",
                        customClass: {
                            confirmButton:
                                "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:scale-105",
                        },
                        buttonsStyling: false,
                    });
                } catch (error) {
                    console.log(error);
                } finally {
                    alertBox.close();
                }
            }
        });
    };

    const [selectedType, setSelectedType] = useState("tout");
    const [searchResults, setSearchResults] = useState([]);

    const handleTypeChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedType(selectedValue === "tout" ? "" : selectedValue);
    };
    const handleSearch = async () => {
        if (selectedType === "") {
            await fetchReunions();
        } else {
            try {
                const response = await axios.get(
                    `/api/reunions?type=${selectedType}`
                );
                setReunions(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <Main_content
            user={auth.user}
            Title={"Les réunions"}
            Description={"test test test "}
            ClassName="p-0"
        >
            <Head title=" Réunions" />
            <div className="">
                <div className="bg-white dark:bg-white-800 w-full rounded-40">
                    <div className="w-full flex flex-row items-center gap-10 p-6 my-2">
                        <div className="flex items-center gap-4 w-full justify-between">
                            <select
                                value={selectedType}
                                onChange={handleTypeChange}
                                name="type"
                                id="type"
                                className=" w-full text-sm h-min border border-gray-300 rounded-md focus:outline-none p-1 px-2 focus:ring-primary-color"
                            >
                                <option disabled value="">
                                    Veuillez choisir le type de réunions :
                                </option>
                                <option value="assemblees_generales">
                                    Assemblées génerales
                                </option>
                                <option value="reunion_informations">
                                    Réunions d'informations
                                </option>
                                <option value="tout">Toutes</option>
                            </select>
                            <button
                                onClick={handleSearch}
                                className=" w-min py-1 px-2 text-left text-sm font-medium bg-gray-300 text-black border-[1px] border-solid rounded-md hover:bg-gray-50 focus:outline-none"
                            >
                                <div className="text-md flex flex-row items-center">
                                    <div className="text-xl">
                                        <TbSearch className="mr-2 items-center" />
                                    </div>

                                    <div>Rechercher</div>
                                </div>
                            </button>
                            {searchResults.length > 0 && (
                                <div>
                                    <ul>
                                        {searchResults.map((reunion) => (
                                            <li key={reunion.id}>
                                                {reunion.titre}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <AddButton href={"/reunions/ajouter"}>
                                Ajouter une réunion
                            </AddButton>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-white dark:bg-white-800 rounded shadow overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-primary-color uppercase tracking-wider">
                                            Titre
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-primary-color uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-primary-color uppercase tracking-wider">
                                            Heure
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-primary-color uppercase tracking-wider">
                                            Lieu
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-primary-color uppercase tracking-wider">
                                            Sujet
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-primary-color uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                {searchResults.length > 0 ? (
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {searchResults.map((reunion) => (
                                            <tr
                                                className="hover:bg-gray-50"
                                                key={reunion.id}
                                            ></tr>
                                        ))}
                                    </tbody>
                                ) : (
                                    <tbody className="bg-white divide-y divide-gray-200 ">
                                        {reunions?.map((reunion) => (
                                            <tr
                                                className="hover:bg-gray-50"
                                                key={reunion.id}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm whitespace-normal text-gray-900 ">
                                                        {reunion.titre}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {reunion.date}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {reunion.heure}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm whitespace-normal  text-gray-900">
                                                        {reunion.lieu}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm whitespace-normal text-gray-900">
                                                        {reunion.sujet}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex justify-end">
                                                        <div className="flex items-center space-x-2">
                                                            <a
                                                                href={`/reunions/consulter/${reunion.id}`}
                                                            >
                                                                <button className="text-blue-500 border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2 ">
                                                                    <HiEye />
                                                                </button>
                                                            </a>
                                                            <a
                                                                href={`/reunions/modifier/${reunion.id}`}
                                                            >
                                                                <button className="text-primary-color border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-purple-400 hover:bg-primary-color hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2  ">
                                                                    <HiPencil />
                                                                </button>
                                                            </a>
                                                            <button
                                                                className="text-red-500 border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-red-400 hover:bg-red-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2  "
                                                                onClick={() =>
                                                                    supprimer(
                                                                        reunion.id
                                                                    )
                                                                }
                                                            >
                                                                <HiTrash />
                                                            </button>
                                                            <button className="text-gray-700 border-solid border-gray-200 border-[1.5px] bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:border-gray-700 hover:bg-gray-700 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white  w-min p-2 ">
                                                                <HiPrinter />
                                                            </button>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
