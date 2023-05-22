import Main_content from "@/main _content/Main_content";
import React, { useState } from "react";
import { HiPencil, HiTrash, HiPlusSmall } from "react-icons/hi2";
import { Head } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";

export default function Lot({ auth }) {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [isModifyHidden, setIsModifyHidden] = useState(false);

    const handleCheckboxChange = (id) => {
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
    };

    const data = [
        // Your data goes here
        // Example:
        { id: 1, type: "Appartement", building: "A", floor: 2, door: "11", owner: "Mohamed", tenant: "Mohamed" },
        { id: 2, type: "Appartement", building: "B", floor: 4, door: "21", owner: "Brahim", tenant: "Ayman" },
        { id: 3, type: "Appartement", building: "B", floor: 4, door: "21", owner: "Brahim", tenant: "Ayman" },
        { id: 4, type: "Appartement", building: "B", floor: 4, door: "21", owner: "Brahim", tenant: "Ayman" },
        { id: 5, type: "Appartement", building: "B", floor: 4, door: "21", owner: "Brahim", tenant: "Ayman" },
        { id: 6, type: "Appartement", building: "B", floor: 4, door: "21", owner: "Brahim", tenant: "Ayman" },
    ];

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
                <div className="mx-auto container bg-white dark:bg-white-800 w-full  rounded-40">
                    <div className="w-full flex flex-row justify-between items-center pt-3 px-5 pb-1 bg-green-50 rounded-t-20">
                        <div className="flex flex-row justify-between gap-4 ">
                            <a
                                className={`text-primary-color border-solid border-gray-200 border-[1.5px] p-2  bg-white  hover:bg-primary-color hover:text-white rounded-[7px] ${
                                    isModifyHidden ? "hidden" : ""
                                
                                } focus:shadow-outline-white ${
                                    selectedCheckboxes.length === 0
                                        ? "hidden"
                                        : ""
                                }`}
                                
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
                        <a className="text-white px-2 pr-4 ml-4 my-1 cursor-pointer focus:outline-none border-[1.5px] border-gray-200 focus:border-white-800 focus:shadow-outline-white bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-max h-8 rounded-[9px] flex items-center justify-center"
                        href="/lots/ajouter">
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
                                    <th className="pl-8 text-white-600 dark:text-white-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                        <Checkbox
                                            id="all"
                                            checked={
                                                selectedCheckboxes.length ===
                                                data.length
                                            }
                                            onChange={() =>
                                                handleCheckboxChange("all")
                                            }
                                        />
                                    </th>
                                    <th className="text-white-600 dark:text-white-400 font-normal pr-6 text-left text-xs tracking-normal leading-4">
                                        N°
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
                                {data.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="h-14 border-white-300 dark:border-white-200 border-b"
                                    >
                                        <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-white-800 dark:text-white-100 tracking-normal leading-4">
                                            <Checkbox
                                                id={item.id.toString()}
                                                checked={selectedCheckboxes.includes(
                                                    item.id
                                                )}
                                                onChange={() =>
                                                    handleCheckboxChange(
                                                        item.id
                                                    )
                                                }
                                            />
                                        </td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                            {item.id}
                                        </td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                            {item.type}
                                        </td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                            {item.building}
                                        </td>
                                        <td className="pr-6 whitespace-no-wrap">
                                            <div className="w-min h-min bg-blue-300 px-[15px] py-[0.5px] rounded-2xl">
                                                <span className="text-sm text-white font-medium">
                                                    {item.floor}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                            {item.door}
                                        </td>
                                        <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                            {item.owner}
                                        </td>
                                        <td className="text-sm pr-8 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                            {item.tenant}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
