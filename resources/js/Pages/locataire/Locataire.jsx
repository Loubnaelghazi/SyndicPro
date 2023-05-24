import Main_content from "@/main _content/Main_content";
import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash, HiPlusSmall } from "react-icons/hi2";
import { Head } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import RowCheckbox from "@/Components/Table/RowCheckbox";
import HeaderCheckbox from "@/Components/Table/HeaderCheckbox";
import TableButton from "@/Components/Buttons/ModifyButton";
import AddButton from "@/Components/Buttons/AddButton";
import THead from "@/Components/Table/THead";
import THeader from "@/Components/Table/THeader";
import TData from "@/Components/Table/TData";
import TRow from "@/Components/Table/TRow";
import DeleteButton from "@/Components/Buttons/DeleteButton";
import ModifyButton from "@/Components/Buttons/ModifyButton";

export default function Locataire({ auth }) {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [isModifyHidden, setIsModifyHidden] = useState(false);
    const [locataires, setLocataires] = useState([]);

    useEffect(() => {
        if (!locataires.length) {
            fetchLocataires();
        }
    }, []);

    const fetchLocataires = async () => {
        const response = await axios.get(`/api/locataires`);
        setLocataires(response.data);
    };

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

    const data = locataires;

    return (
        <Main_content user={auth.user} Title={"Les locataires"}>
            <Head title="Locataires" />

            <div className="-m-14">
                <div className="mx-auto container bg-white dark:bg-white-800 w-full  rounded-40">
                    <div className="w-full flex flex-row justify-between items-center pt-3 px-5 pb-1 bg-green-50 rounded-t-20">
                        <div className="flex flex-row justify-between gap-4 ">
                            <ModifyButton
                                href={"/locataires/modifier"}
                                isModifyHidden={isModifyHidden}
                                selectedCheckboxes={selectedCheckboxes}
                            />
                            <DeleteButton selectedCheckboxes={selectedCheckboxes}/>
                        </div>
                        <AddButton href={"/locataires/ajouter"}>
                            Ajouter un locataire
                        </AddButton>
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
                            <THeader>
                                <tr className="w-full h-16 border-white-300 dark:border-white-200 border-b  py-8">
                                    <HeaderCheckbox
                                        data={data}
                                        selectedCheckboxes={selectedCheckboxes}
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
                                {data?.map((item) => (
                                    <TRow key={item.id} Key={item.id} selectedCheckboxes={selectedCheckboxes} >
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
                                        <TData>{item.genre=="Male" ? "M" : "F"}</TData>
                                        <TData ClassName="text-[11px]">{item.date_naissance}</TData>
                                        <TData>{item.cni}</TData>
                                        <TData>{item.nationalite}</TData>
                                        <TData>
                                            <div className=" h-full bg-my-red bg-opacity-20 px-2 rounded-2xl flex justify-center items-center">
                                                <span className="text-xs text-my-red  block ">
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
                    
                </div>
            </div>
        </Main_content>
    );
}
