import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Checkbox from "@/Components/Checkbox";
import RowCheckbox from "@/Components/Table/RowCheckbox";
import HeaderCheckbox from "@/Components/Table/HeaderCheckbox";
import AddButton from "@/Components/Buttons/AddButton";
import THead from "@/Components/Table/THead";
import THeader from "@/Components/Table/THeader";
import TData from "@/Components/Table/TData";
import TRow from "@/Components/Table/TRow";
import DeleteButton from "@/Components/Buttons/DeleteButton";
import ModifyButton from "@/Components/Buttons/ModifyButton";
import Main_content from "@/main _content/Main_content";
import Swal from "sweetalert2";
import axios from "axios";

export default function Proprietaire({ auth }) {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [isModifyHidden, setIsModifyHidden] = useState(false);
    const [selectedCount, setSelectedCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [proprietaires, setProprietaires] = useState([]);
    const [selectedProprietaires, setSelectedProprietaires] = useState([]);
    const [selectedProprietaire, setSelectedProprietaire] = useState(null);
    const [proprietaireId , setProprietaireId] = useState();

    const [perPage, setPerPage] = useState(() => {
        // Check if the perPage value is stored in localStorage
        const storedPerPage = localStorage.getItem("perPage");
        return storedPerPage ? parseInt(storedPerPage) : 10; // Default value is 10
    });
    useEffect(() => {
        if (!proprietaires.length) {
            fetchProprietaires();
            localStorage.setItem("perPage", perPage);
        }
    }, [currentPage, perPage]);

    const handleCheckboxChange = (id) => {
        setProprietaireId(id);
        let updatedSelectedProprietaires;
        if (id === "all") {
            if (selectedCheckboxes.length === data.length) {
                updatedSelectedProprietaires = [];
                setIsModifyHidden(false);
            } else {
                updatedSelectedProprietaires = data.map((item) => item);
                setIsModifyHidden(true);
            }
        } else {
            if (selectedCheckboxes.includes(id)) {
                updatedSelectedProprietaires = selectedProprietaires.filter(
                    (proprietaire) => proprietaire.id !== id
                );
            } else {
                const selectedProprietaire = data.find(
                    (item) => item.id === id
                );
                updatedSelectedProprietaires = [
                    ...selectedProprietaires,
                    selectedProprietaire,
                ];
            }
            setIsModifyHidden(updatedSelectedProprietaires.length !== 1);
        }
        if (updatedSelectedProprietaires.length === 1) {
            const selectedProprietaire = data.find((item) => item.id === id);
            setSelectedProprietaire(selectedProprietaire);
        } else {
            setSelectedProprietaire(null);
        }
        setSelectedCheckboxes(
            updatedSelectedProprietaires.map((proprietaire) => proprietaire.id)
        );
        setSelectedCount(updatedSelectedProprietaires.length);
    };

    const fetchProprietaires = async () => {
        const response = await axios.get(
            `/api/proprietaires?page=${currentPage}&perPage=${perPage}`
        );
        setProprietaires(response.data);
    };

    const data = proprietaires;

    const paginatedData = data.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );
    const handlePerPageChange = (e) => {
        const value = parseInt(e.target.value);
        setPerPage(value);
        localStorage.setItem("perPage", value); // Store the perPage value in localStorage
    };

    const totalPages = Math.ceil(data.length / perPage);

    /* /////////////////////////// */

    const supprimerProprietaire = async (proprietaireIds) => {
        try {
            const result = await Swal.fire({
                title: "Attention!",
                icon: "warning",
                html: `
        <h2 class="text-lg font-bold text-red-500">
          Êtes-vous sûr de vouloir effectuer la suppression ?
        </h2>
        <p class="text-gray-800">
          Vous ne pouvez plus récupérer ces éléments après suppression !
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
            });

            if (result.isConfirmed) {
                const requests = proprietaireIds.map((proprietaireId) =>
                    axios.delete(`/api/proprietaires/${proprietaireId}`)
                );
                const responses = await Promise.all(requests);
                setProprietaires((prevProprietaires) =>
                    prevProprietaires.filter(
                        (proprietaire) =>
                            !proprietaireIds.includes(proprietaire.id)
                    )
                );

                await Swal.fire({
                    title: "Supprimé",
                    text: "Les propriétaires ont été supprimés avec succès.",
                    icon: "success",
                    customClass: {
                        confirmButton:
                            "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:scale-105",
                    },
                    buttonsStyling: false,
                });
                fetchProprietaires();
                // Clear the selected checkboxes
                setSelectedCheckboxes([]);
                // Reset the selected count and modify button visibility
                setSelectedCount(0);
                setIsModifyHidden(false);
    
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Main_content user={auth.user} Title={"Les propriétaires"}>
                <Head title="Propriétaires" />

                <div className="-m-14">
                    <div className="mx-auto container bg-white dark:bg-white-800 w-full  rounded-40">
                        <div className="w-full flex flex-row justify-between items-center pt-3 px-5 pb-1 bg-green-50 rounded-t-20">
                            <div className="flex flex-row justify-between gap-4 ">
                                <ModifyButton
                                    href={`/proprietaires/modifier/${proprietaireId}`}
                                    isModifyHidden={
                                        selectedCheckboxes.length !== 1
                                    }
                                    selectedCheckboxes={selectedCheckboxes}
                                />
                                <DeleteButton
                                    onClick={() =>
                                        supprimerProprietaire(
                                            selectedCheckboxes
                                        )
                                    }
                                    selectedCheckboxes={selectedCheckboxes}
                                />
                                <span className="ml-3 my-auto text-sm font-medium text-gray-500">
                                    {selectedCount === 0
                                        ? "0 sélectionné"
                                        : `${selectedCount} sélectionné`}
                                </span>
                            </div>
                            <AddButton href={"/proprietaires/ajouter"} ClassName=" bg-pinky-color">
                                Ajouter un propriétaire
                            </AddButton>

                            <div className="absolute right-0 top-5 w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                                <div className="lg:ml-6 flex items-center">
                                    <Checkbox
                                        id="all"
                                        checked={
                                            selectedCheckboxes.length ===
                                            data.length
                                        }
                                        onChange={() =>
                                            handleCheckboxChange("all")
                                        }
                                        className="hidden"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full overflow-x-scroll xl:overflow-x-hidden rounded-b-40">
                            {data.length === 0 && (
                                <div className="p-4 text-center text-red-500  bg-green-50">
                                    Veuillez remplir votre tableau !
                                </div>
                            )}
                            {/* on va l utiliser si kle tableu devient vide  */}
                            <table className="min-w-full bg-white dark:bg-white-800">
                                <THeader>
                                    <tr className="w-full h-16 border-white-300 dark:border-white-200 border-b  py-8">
                                        <HeaderCheckbox
                                            data={data}
                                            selectedCheckboxes={
                                                selectedCheckboxes
                                            }
                                            handleCheckboxChange={
                                                handleCheckboxChange
                                            }
                                        />
                                        <THead>Nom</THead>
                                        <THead>Prénom</THead>
                                        <THead>Genre</THead>
                                        <THead>Date de naissance</THead>
                                        <THead>CNI</THead>
                                        <THead>Nationalité</THead>
                                        <THead>N° Téléphone</THead>
                                        <THead>Adresse e-mail</THead>
                                    </tr>
                                </THeader>
                                <tbody>
                                    {paginatedData.map((item) => (
                                        <TRow
                                            key={item.id}
                                            Key={item.id}
                                            selectedCheckboxes={
                                                selectedCheckboxes
                                            }
                                        >
                                            <RowCheckbox
                                                item={item}
                                                handleCheckboxChange={
                                                    handleCheckboxChange
                                                }
                                                selectedCheckboxes={
                                                    selectedCheckboxes
                                                }
                                            />
                                            <TData>{item.nom}</TData>
                                            <TData>{item.prenom}</TData>
                                            <TData>
                                                {item.genre == "Male"
                                                    ? "M"
                                                    : "F"}
                                            </TData>
                                            <TData ClassName="text-[11px]">
                                                {item.date_naissance}
                                            </TData>
                                            <TData>{item.cni}</TData>
                                            <TData>{item.nationalite}</TData>
                                            <TData>
                                                <div className=" h-full bg-pinky-color bg-opacity-20 px-2 rounded-2xl flex justify-center items-center">
                                                    <span className="text-xs text-pinky-color  block ">
                                                        {item.tel}
                                                    </span>
                                                </div>
                                            </TData>
                                            <TData>{item.email}</TData>
                                        </TRow>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="ml-5 flex items-center text-xs">
                                <span>Propriétaires par page:</span>
                                <select
                                    value={perPage}
                                    onChange={handlePerPageChange}
                                    className=" h-min bg-transparent text-md  rounded-3xl px-auto appearance-none border-transparent text-primary-color  font-medium focus:border-none outline-none focus:ring-transparent"
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                </select>
                            </div>
                            <div className="text-primary-color font-medium flex flex-row gap-10 h-max  items-center justify-end mr-6 text-xs">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() =>
                                        setCurrentPage(currentPage - 1)
                                    }
                                    className="flex flex-row gap-3 items-center my-4 disabled:text-gray-400"
                                >
                                    <HiChevronLeft /> Précédent
                                </button>
                                <span className="text-xs font-regular text-gray-600">
                                    Page: {currentPage} sur {totalPages}
                                </span>
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() =>
                                        setCurrentPage(currentPage + 1)
                                    }
                                    className="flex flex-row gap-3 items-center my-4 disabled:text-gray-400"
                                >
                                    Suivant <HiChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Main_content>
        </>
    );
}
