import Main_content from "@/main _content/Main_content";
import React, { useState } from "react";
import { HiPencil, HiTrash, HiPlusSmall } from "react-icons/hi2";
import { Head } from "@inertiajs/react";
import THead from "@/Components/Table/THead";
import Checkbox from "@/Components/Checkbox";
import RowCheckbox from "@/Components/Table/RowCheckbox";
import HeaderCheckbox from "@/Components/Table/HeaderCheckbox";
import TableButton from "@/Components/Buttons/ModifyButton";
import AddButton from "@/Components/Buttons/AddButton";
import THeader from "@/Components/Table/THeader";
import TData from "@/Components/Table/TData";
import TRow from "@/Components/Table/TRow";
import DeleteButton from "@/Components/Buttons/DeleteButton";
import ModifyButton from "@/Components/Buttons/ModifyButton";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function Lot({ auth }) {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [isModifyHidden, setIsModifyHidden] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [lots, setLots] = useState([]);
    const [lotID, setLotID] = useState();
    const [perPage, setPerPage] = useState(() => {
        // Check if the perPage value is stored in localStorage
        const storedPerPage = localStorage.getItem("perPage");
        return storedPerPage ? parseInt(storedPerPage) : 10; // Default value is 10
    });

    useEffect(() => {
        if (!lots.length) {
            fetchLots();
            localStorage.setItem("perPage", perPage);
        }
    }, [currentPage, perPage]);

    const fetchLots = async () => {
        const response = await axios.get(
            `/api/lots?page=${currentPage}&perPage=${perPage}`
        );
        setLots(response.data);
    };

    const handleCheckboxChange = (id) => {
        setLotID(id);
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

    const data = lots;
    const paginatedData = data.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );
    const totalPages = Math.ceil(data.length / perPage);
    const sans = <div className=" italic text-gray-300 font-light text-2xl">sans</div>

    return (
        <Main_content
            user={auth.user}
            Title={"Lots de la copropriété"}
            Description={
                "Vous devez d'abord ajouter les proprietaires et les locataires"
            }
        >
            <Head title="Lots" />

            <div className="-m-14">
                <div className="mx-auto container bg-white dark:bg-white-800 w-full  rounded-40">
                    <div className="w-full flex flex-row justify-between items-center pt-3 px-5 pb-1 bg-green-50 rounded-t-20">
                        <div className="flex flex-row justify-between gap-4 ">
                            <a
                                className={`text-primary-color cursor-pointer border-solid border-gray-200 border-[1.5px] p-2  bg-white  hover:bg-primary-color hover:text-white rounded-[7px] ${
                                    isModifyHidden ? "hidden" : ""
                                } focus:shadow-outline-white ${
                                    selectedCheckboxes.length === 0
                                        ? "hidden"
                                        : ""
                                }`}
                                href="/lots/modifier"
                            >
                                <HiPencil />
                            </a>
                            <a
                                className={`text-red-500 border-solid border-gray-200 border-[1.5px]  p-2 bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:bg-red-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white ${
                                    selectedCheckboxes.length === 0
                                        ? "hidden"
                                        : ""
                                }`}
                            >
                                <HiTrash />
                            </a>
                        </div>
                        <a
                            className="text-white px-2 pr-4 ml-4 my-1 cursor-pointer focus:outline-none border-[1.5px] border-gray-200 focus:border-white-800 focus:shadow-outline-white bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-max h-8 rounded-[9px] flex items-center justify-center"
                            href="/lots/ajouter"
                        >
                            <HiPlusSmall className="text-2xl pr-2" /> Ajouter un
                            lot
                        </a>
                        <div className="absolute right-0 top-5 w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                            <div className="lg:ml-6 flex items-center">
                                <Checkbox
                                    id="all"
                                    checked={
                                        selectedCheckboxes.length ===
                                        data.length
                                    }
                                    onChange={() => handleCheckboxChange("all")}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden rounded-b-40">
                        <table className="min-w-full bg-white dark:bg-white-800">
                            <thead className="bg-green-50 text-t-color font-semibold">
                                <tr className="w-full h-16 border-white-300 dark:border-white-200 border-b py-8">
                                    <HeaderCheckbox
                                        data={data}
                                        selectedCheckboxes={selectedCheckboxes}
                                        handleCheckboxChange={
                                            handleCheckboxChange
                                        }
                                    />
                                    <THead>N°</THead>
                                    <THead>TYPE</THead>
                                    <THead>BATIMENT</THead>
                                    <THead>ETAGE</THead>
                                    <THead>PORTE</THead>
                                    <THead>PROPRIETAIRE</THead>
                                    <THead>LOCATAIRE</THead>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((item) => (
                                    <TRow
                                        key={item.id}
                                        Key={item.id}
                                        selectedCheckboxes={selectedCheckboxes}
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
                                        <TData>{item.numero}</TData>
                                        <TData>{item.batiment}</TData>
                                        <TData>{item.type}</TData>
                                        <TData>
                                            <div className="w-min h-min bg-blue-300 px-[15px] py-[0.5px] rounded-2xl">
                                                <span className="text-sm text-white font-medium">
                                                    {item.etage}
                                                </span>
                                            </div>
                                        </TData>
                                        <TData>{item.porte}</TData>
                                        <TData>{item.proprietaire_id == null
                                                ? sans
                                                : item.proprietaire.nom+" "+item.proprietaire.prenom}
                                        </TData>
                                        <TData>
                                            {item.locataire_id == null
                                                ? sans
                                                : item.locataire.nom+" "+item.locataire.prenom}
                                        </TData>
                                    </TRow>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="ml-5 flex items-center text-xs">
                            <span>Lots par page:</span>
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
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className="flex flex-row gap-3 items-center my-4 disabled:text-gray-400"
                            >
                                <HiChevronLeft /> Précédent
                            </button>
                            <span className="text-xs font-regular text-gray-600">
                                Page: {currentPage} sur {totalPages}
                            </span>
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="flex flex-row gap-3 items-center my-4 disabled:text-gray-400"
                            >
                                Suivant <HiChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
