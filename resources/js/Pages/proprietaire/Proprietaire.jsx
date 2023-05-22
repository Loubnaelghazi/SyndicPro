import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { HiPencil, HiTrash, HiPlusSmall } from "react-icons/hi2";
import Checkbox from "@/Components/Checkbox";

import Main_content from "@/main _content/Main_content";

export default function Proprietaire({ auth }) {
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
        {
            id: 1,
            nom: "Loubna",
            prenom: "Loubna",
            cni: 7390,
            tel: 8078389,
            email: "lubna@gmail.com",
        },
        {
            id: 2,
            nom: "Yazan",
            prenom: "lina",
            cni: 4899,
            tel: 83092029004,
            email: "lina@gmail.com",
        },
        {
            id: 3,
            nom: "yussef",
            prenom: "siham",
            cni: 4904,
            tel: 94040,
            email: "Brahim@gmail.com",
        },
    ];

    return (
        <>
            <Main_content
                user={auth.user}
                Title={"Les propriétaires"}
                Description={"loubna ljamila"}
            >
                <Head title="Propriétaires" />

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
                                    href="proprietaires/modifier"
                                >
                                    <HiPencil />
                                </a>
                                <a
                                    className={`text-red-500 border-solid border-gray-200 border-[1.5px]  p-2 bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:bg-red-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white ${
                                        selectedCheckboxes.length === 0
                                            ? "hidden"
                                            : ""
                                    }`}
                                    href="#"
                                >
                                    <HiTrash />
                                </a>
                            </div>
                            <a
                                className="text-white px-2 pr-4 ml-4 my-1 cursor-pointer focus:outline-none border-[1.5px] border-gray-200 focus:border-white-800 focus:shadow-outline-white bg-pinky-color  transition duration-150 ease-in-out hover:bg-opacity-80 w-max h-8 rounded-[9px] flex items-center justify-center"
                                href="/proprietaires/ajouter"
                            >
                                <HiPlusSmall className="text-2xl pr-2" />{" "}
                                Ajouter un propriétaire
                            </a>
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
                            <table className="min-w-full bg-white dark:bg-white-800">
                                <thead className="bg-green-50 text-t-color text-md ">
                                    <tr className="w-full h-16 border-white-300 dark:border-white-200 border-b py-8">
                                        <th className="pl-8 text-white-600 dark:text-white-400 pr-6 text-left tracking-normal leading-4">
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
                                        <th className="text-white-600 dark:text-white-400 pr-6 text-left tracking-normal leading-4">
                                            Nom
                                        </th>
                                        <th className="text-white-600 dark:text-white-400 pr-6 text-left tracking-normal leading-4">
                                            Prénom
                                        </th>
                                        <th className="text-white-600 dark:text-white-400 pr-6 text-left tracking-normal leading-4">
                                            CNI
                                        </th>
                                        <th className="text-white-600 dark:text-white-400 pr-6 text-left tracking-normal leading-4">
                                            N° Téléphone
                                        </th>
                                        <th className="text-white-600 dark:text-white-400 pr-6 text-left tracking-normal leading-4">
                                            Adresse e-mail
                                        </th>
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
                                                {item.nom}
                                            </td>
                                            <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                                {item.prenom}
                                            </td>
                                            <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                                {item.cni}
                                            </td>
                                            <td className="pr-6 whitespace-no-wrap">
                                                <div className="w-[120px] h-full bg-pinky-color bg-opacity-20 px-[15px] py-[0.5px] rounded-2xl flex justify-center items-center">
                                                    <span className="text-sm text-pinky-color font-medium block ">
                                                        {item.tel}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="text-sm pr-6 whitespace-no-wrap text-white-800 dark:text-white-100 tracking-normal leading-4">
                                                {item.email}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Main_content>
        </>
    );
}
