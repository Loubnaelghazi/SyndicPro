import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import AddButton from "@/Components/Buttons/AddButton";
import { TbSearch } from "react-icons/tb";
import Checkbox from "@/Components/Checkbox";
import DeleteButton from "@/Components/Buttons/DeleteButton";
import ModifyButton from "@/Components/Buttons/ModifyButton";
import ShowButton from "@/Components/Buttons/ShowButton";
import HeaderCheckbox from "@/Components/Table/HeaderCheckbox";
import RowCheckbox from "@/Components/Table/RowCheckbox";
import Swal from "sweetalert2";
export default function Depense({ auth }) {
    const [depenses, setDepenses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [depenseID, setDepenseID] = useState();
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [isModifyHidden, setIsModifyHidden] = useState(false);
    const [bageColor, setBadgeColor] = useState(" bg-red-500");
    const [selectedCount, setSelectedCount] = useState(0);
    const [perPage, setPerPage] = useState(() => {
        // Check if the perPage value is stored in localStorage
        const storedPerPage = localStorage.getItem("perPage");
        return storedPerPage ? parseInt(storedPerPage) : 10; // Default value is 10
    });
    const [selectedFournisseur, setSelectedFournisseur] = useState("");

    const [selectedStatut, setSelectedStatut] = useState("toutes");

    const handleStatutChange = (event) => {
        setSelectedStatut(event.target.value);
    };

    const [fournisseurs, setFournisseurs] = useState([]);
    useEffect(() => {
        if (!fournisseurs.length) {
            fetchFournisseurs();
        }
    }, []); // Dépendances vides

    const fetchFournisseurs = async () => {
        const response = await axios.get(`/api/fournisseurs/getAll`);
        setFournisseurs(response.data);
    };

    useEffect(() => {
        if (!depenses.length) {
            fetchDepenses();
            localStorage.setItem("perPage", perPage);
        }
    }, [currentPage, perPage]);

    const [date, setDate] = useState(""); // État pour stocker la date complète
    const [annee, setAnnee] = useState(""); // État pour stocker l'année
    const [mois, setMois] = useState(""); // État pour stocker le mois
    const handleDateChange = (e) => {
        setDate(e.target.value);
        const selectedDate = new Date(e.target.value);
        const selectedYear = selectedDate.getFullYear();
        const selectedMonth = selectedDate.getMonth(); // Obtenir l'index du mois (0 - janvier, 1 - février, ...)
        setMois(selectedMonth);
        setAnnee(selectedYear);
    };

    // Générer les options pour les années
    const generateAnneeOptions = () => {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 5; // Définir la limite inférieure (par exemple, 5 ans en arrière)
        const endYear = currentYear; // Définir l'année actuelle comme limite supérieure
        const options = [];

        for (let year = startYear; year <= endYear; year++) {
            options.push(
                <option key={year} value={year}>
                    {year}
                </option>
            );
        }

        return options;
    };
    // Générer les options pour les mois
    const generateMoisOptions = () => {
        const moisNoms = [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
        ];

        const options = moisNoms.map((moisNom, index) => (
            <option key={index} value={index}>
                {moisNom}
            </option>
        ));

        return options;
    };
    const fetchDepenses = async (annee, mois) => {
        const response = await axios.get(
            `/api/depenses?page=${currentPage}&per_page=${perPage}`
        );
        setDepenses(response.data);
    };

    const data = depenses.data !== undefined ? depenses.data : [];

    const handleCheckboxChange = (id) => {
        setDepenseID(id);
        let updatedCheckboxes;
        if (id === "all") {
            if (selectedCheckboxes.length === data.length) {
                updatedCheckboxes = [];
                setIsModifyHidden(false);
            } else {
                updatedCheckboxes = data.map((item) => item.id);
                setIsModifyHidden(true);
            }
        } else {
            if (selectedCheckboxes.includes(id)) {
                updatedCheckboxes = selectedCheckboxes.filter(
                    (checkbox) => checkbox !== id
                );
            } else {
                updatedCheckboxes = [...selectedCheckboxes, id];
            }
            setIsModifyHidden(updatedCheckboxes.length !== 1);
        }

        setSelectedCheckboxes(updatedCheckboxes);
        setSelectedCount(updatedCheckboxes.length);
    };

    const handlePerPageChange = (e) => {
        const value = parseInt(e.target.value);
        setPerPage(value);
        localStorage.setItem("perPage", value); // Store the perPage value in localStorage
    };

    const fetchPrevnextItems = (link) => {
        try {
            const url = new URL(link);
            setCurrentPage(url.searchParams.get("page"));
        } catch (error) {
            console.error("Invalid URL:", link);
            // Handle the error, e.g., show an error message to the user
        }
    };

    const greenBadge =
        "bg-green-500 w-min px-2 p-0.5 text-white rounded-2xl flex items-center justify-center";
    const redBadge =
        "bg-red-500 w-min px-2 p-0.5 text-white rounded-2xl flex items-center justify-center";
    const orangeBadge =
        "bg-yellow-300 w-min px-4 p-0.5 text-white rounded-2xl flex items-center justify-center";

    const renderPagination = () => (
        <>
            {depenses.links?.map((link, index) => (
                <div key={index}>
                    <button
                        key={index}
                        className={`${
                            link.active
                                ? "bg-primary-color text-white py-1 px-2 rounded-md"
                                : ""
                        } flex flex-row gap-3 items-center my-4 disabled:text-gray-400 `}
                        onClick={() => fetchPrevnextItems(link.url)}
                    >
                        {link.label
                            .replace("&laquo; Previous", "Précédent")
                            .replace("Next &raquo;", "Suivant")}
                    </button>
                </div>
            ))}
        </>
    );

    const deleteSelectedItems = async () => {
        let alertBox = null;

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
                alertBox = Swal.fire({
                    title: "Suppression en cours...",
                    allowOutsideClick: false,
                    onBeforeOpen: () => {
                        Swal.showLoading();
                    },
                    showConfirmButton: false,
                });

                for (const depenseID of selectedCheckboxes) {
                    await axios.delete(`/api/depenses/${depenseID}`);
                }

                alertBox.close();
            }

            fetchDepenses();
            setSelectedCheckboxes([]);
            setSelectedCount(0);
            setIsModifyHidden(false);

            if (result.isConfirmed) {
                await Swal.fire({
                    title: "Supprimé",
                    text: "Les depenses ont été supprimés avec succès.",
                    icon: "success",
                    customClass: {
                        confirmButton:
                            "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:scale-105",
                    },
                    buttonsStyling: false,
                });
            }
        } catch (error) {
            console.error("Error deleting items:", error);
            // Gérer le cas d'erreur, par exemple, afficher un message d'erreur à l'utilisateur
        }
    };
    const handleSearch = async () => {
        if (setSearchValue === "") {
            await fetchDepenses();
        } else {
            try {
                const response = await axios.get(
                    `/api/depenses?designation=${searchValue}`
                );
                setDepenses(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <Main_content user={auth.user} Title={"Les dépenses"} ClassName={"p-0"}>
            <Head title="Dépenses" />
            <div className="bg-[#F8F8FF] dark:bg-gray-700 p-4 py-10   rounded-20 grid grid-cols-4 gap-6">
                <div className="col-span-3 z-10">
                    <div className="flex flex-row justify-start items-center gap-4 pl-4 h-8">
                        <ShowButton
                            href={"/depenses/afficher"}
                            isModifyHidden={isModifyHidden}
                            selectedCheckboxes={selectedCheckboxes}
                        />
                        <ModifyButton
                            href={`/depenses/modifier/${depenseID}`}
                            isModifyHidden={isModifyHidden}
                            selectedCheckboxes={selectedCheckboxes}
                        />
                        <DeleteButton
                            selectedCheckboxes={selectedCheckboxes}
                            onClick={deleteSelectedItems}
                        />
                        <span className="ml-3 my-auto  text-sm font-medium text-gray-500">
                            {selectedCount} sélectionnés
                        </span>
                    </div>
                    <div className="absolute right-0 top-5 w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="lg:ml-6 flex items-center">
                            <Checkbox
                                id="all"
                                checked={
                                    selectedCheckboxes.length === data.length
                                }
                                onChange={() => handleCheckboxChange("all")}
                                className="hidden"
                            />
                        </div>
                    </div>
                    <div className=" dark:bg-gray-700 rounded overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <HeaderCheckbox
                                        data={data}
                                        selectedCheckboxes={selectedCheckboxes}
                                        handleCheckboxChange={
                                            handleCheckboxChange
                                        }
                                        ClassName=" px-6 py-4 text-left text-sm font-medium text-purple-500"
                                    />
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
                                        <tr
                                            className="shadow-csh2 bg-white dark:hover:bg-gray-700 "
                                            key={item.id}
                                        >
                                            <td className="px-2 pl-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 rounded-l-md">
                                                <RowCheckbox
                                                    item={item}
                                                    handleCheckboxChange={
                                                        handleCheckboxChange
                                                    }
                                                    selectedCheckboxes={
                                                        selectedCheckboxes
                                                    }
                                                    ClassName=" "
                                                />
                                            </td>

                                            <td className="px-0 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 rounded-l-md">
                                                {item.designation}
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 ">
                                                {selectedFournisseur === ""
                                                    ? item.id_fournisseur ==
                                                      null
                                                        ? item.fournisseur_externe
                                                        : item.fournisseur
                                                              .raison
                                                    : fournisseurs.find(
                                                          (fournisseur) =>
                                                              fournisseur.id ===
                                                              selectedFournisseur
                                                      ).raison}
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 flex justify-center">
                                                <div
                                                    className={
                                                        item.statut ===
                                                        "non_payee"
                                                            ? redBadge
                                                            : item.statut ===
                                                              "payee"
                                                            ? greenBadge
                                                            : orangeBadge
                                                    }
                                                >
                                                    {item.statut === "non_payee"
                                                        ? "Non payée"
                                                        : item.statut ===
                                                          "payee"
                                                        ? "Payée"
                                                        : "Partiellement payée"}
                                                </div>
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 text-center">
                                                {item.montant}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap  text-sm text-gray-600 dark:text-gray-200 text-center">
                                                {item.paiements.map(
                                                    (paiement, index) => (
                                                        <div key={index}>
                                                            {index ===
                                                                item.paiements
                                                                    .length -
                                                                    1 &&
                                                                paiement.date_paiement}
                                                        </div>
                                                    )
                                                )}
                                            </td>
                                        </tr>
                                        <div className="my-2"></div>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex w-full flex-row justify-between items-center">
                        <div className="ml-5 flex items-center text-xs">
                            <span>Locataires par page:</span>
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
                        <div className="text-primary-color font-medium flex flex-row gap-7 h-max  items-center justify-end mr-6 text-xs">
                            {renderPagination()}
                        </div>
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
                                    className="block text-sm w-full rounded-md border-0 py-1.5 text-primary-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color"
                                    onChange={(e) =>
                                        setSelectedFournisseur(e.target.value)
                                    }
                                >
                                    <option
                                        disabled
                                        value="Chercher par fournisseur"
                                    >
                                        Chercher par fournisseur:
                                    </option>
                                    {fournisseurs.map((fournisseur) => (
                                        <option
                                            key={fournisseur.id}
                                            value={fournisseur.id}
                                        >
                                            {fournisseur.raison}
                                        </option>
                                    ))}
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
                                    value={annee}
                                    onChange={handleDateChange}
                                    className="text-sm w-full  h-min rounded-md py-1.5  border-0 text-primary-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color "
                                >
                                    <option
                                        disabled
                                        value="Sélectionner une année"
                                    >
                                        Sélectionner une année{" "}
                                    </option>
                                    {generateAnneeOptions()}
                                </select>
                            </div>
                            <div className="flex flex-col gap-0.5  text-sm ">
                                <label htmlFor="mois">Mois :</label>
                                <select
                                    name="mois"
                                    id="mois"
                                    value={mois}
                                    onChange={handleDateChange}
                                    className=" block text-sm w-full rounded-md  border-0 py-1.5 text-primary-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color"
                                >
                                    <option
                                        disabled
                                        value="Sélectionner un mois"
                                    >
                                        Sélectionner un mois{" "}
                                    </option>
                                    {generateMoisOptions()}
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
                                        className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                        onChange={handleStatutChange}
                                    />
                                    <label htmlFor="toutes" className="ml-4">
                                        Toutes
                                    </label>
                                </div>

                                <div className="flex flex-row items-center">
                                    <input
                                        type="radio"
                                        name="options"
                                        id="payee"
                                        value="payee"
                                        className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                        onChange={handleStatutChange}
                                    />
                                    <label htmlFor="payee" className="ml-4">
                                        Payées
                                    </label>
                                </div>

                                <div className="flex flex-row items-center">
                                    <input
                                        type="radio"
                                        name="options"
                                        id="partiellement_payee"
                                        value="partiellement_payee"
                                        className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                        onChange={handleStatutChange}
                                    />
                                    <label
                                        htmlFor="partiellement_payee"
                                        className="ml-4"
                                    >
                                        Partiellement payées
                                    </label>
                                </div>

                                <div className="flex flex-row items-center">
                                    <input
                                        type="radio"
                                        name="options"
                                        id="non-payee"
                                        value="non-payee"
                                        className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                        onChange={handleStatutChange}
                                    />
                                    <label htmlFor="non-payee" className="ml-4">
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
