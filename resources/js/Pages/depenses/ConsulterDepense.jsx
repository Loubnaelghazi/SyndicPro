import React from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import InputLabel from "@/Components/InputLabel";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function ConsulterDepense({ auth }) {
    const url = window.location.href;
    const depenseID = url.substring(url.lastIndexOf("/") + 1);
    const [depense, setDepense] = useState();
    useEffect(() => {
        // Fetch the copropriete data from the server and update the state
        fetchDepensesData();
    }, []);

    const fetchDepensesData = async () => {
        try {
            const response = await axios.get(`/api/depenses/${depenseID}`);
            setDepense(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const Paiements = depense?.paiements !== undefined ? depense.paiements : [];

    const greenBadge =
        "bg-green-500 w-min h-min px-4 p-0.5 mt-4 text-white rounded-2xl flex items-center justify-center";
    const redBadge =
        "bg-red-500 w-min h-min px-4 mt-4 p-0.5 text-white rounded-2xl flex items-center justify-center";
    const orangeBadge =
        "bg-yellow-300 w-min h-min px-4 mt-4 p-0.5 text-white rounded-2xl flex items-center justify-center";

        console.log(Paiements);

    return (
        <Main_content
            user={auth.user}
            Title={`Dépense N° ${depenseID}`}
            ClassName="p-10 pb-1 px-14"
        >
            <Head title={`Dépense N° ${depenseID}`} />

            <div className="grid grid-rows-2 grid-cols-2    ">
                <div className="flex">
                    <InputLabel htmlFor="designation">
                        Désignation :{" "}
                    </InputLabel>
                    <span
                        id="designation"
                        className="mt-4 ml-4 text-primary-color"
                    >
                        {" "}
                        {depense?.designation}
                    </span>
                </div>
                <div className="flex">
                    <InputLabel htmlFor="date">Date de dépense : </InputLabel>
                    <span id="date" className="mt-4 ml-3 text-primary-color">
                        {" "}
                        {depense?.date_depense}
                    </span>
                </div>
                <div className="flex">
                    <InputLabel htmlFor="montant" className=" text-lg ">
                        Montant (DH) :{" "}
                    </InputLabel>
                    <span id="montant" className="mt-4 ml-2 text-primary-color">
                        {depense?.montant}
                    </span>
                </div>{" "}
                <div className="flex flex-row items-center gap-2">
                    <InputLabel htmlFor="statut">Statut : </InputLabel>
                    <div
                        id="statut"
                        className={ 
                            depense?.statut === "non_payee"
                                ? redBadge
                                : depense?.statut === "payee"
                                ? greenBadge
                                : orangeBadge
                        }
                    >
                        {depense?.statut}
                    </div>
                </div>{" "}
                <div className=" flex ">
                    <InputLabel
                        htmlFor="description"
                        className="whitespace-normal"
                    >
                        {" "}
                        Description:{" "}
                    </InputLabel>{" "}
                    <p
                        id="description"
                        className="mt-4 ml-4 text-primary-color"
                    >
                        {depense?.description}
                    </p>
                </div>
                <div className=" flex ">
                    <InputLabel
                        htmlFor="description"
                        className="whitespace-normal"
                    >
                        {" "}
                        Fournisseur:{" "}
                    </InputLabel>{" "}
                    <p
                        id="description"
                        className="mt-4 ml-4 text-primary-color"
                    >
                        {depense?.id_fournisseur == null
                            ? depense?.fournisseur_externe
                            : depense?.fournisseur.raison}
                    </p>
                </div>
            </div>

                <div className="flex my-6 mt-10 flex-row items-center justify-center">
                    <div className="w-1/2 border-b-[1px] border-gray-300 "></div>
                    <div className=" flex items-center justify-center px-6  text-gray-400 bold tracking-wider">
                        Paiements
                    </div>
                    <div className="w-1/2 border-b-[1px] border-gray-300 "></div>
                </div>
            <div className="">
                {" "}
                {Paiements.length !== 0  ?   
                (Paiements.map((paiement , index) => (
                <div className="grid grid-rows-3 grid-cols-2 gap-2  " key={index}>
                    <div className="flex">
                        <InputLabel htmlFor="id">Id de paiement : </InputLabel>
                        <span className="mt-4 ml-4 text-primary-color">
                            {" "}
                            {paiement.id}
                        </span>
                    </div>
                    <div className="flex">
                        <InputLabel htmlFor="date2">
                            Date de paiement:{" "}
                        </InputLabel>
                        <span
                            id="date2"
                            className="mt-4 ml-4 text-primary-color"
                        >
                            {paiement.date_paiement}
                        </span>
                    </div>
                    <div className="flex">
                        <InputLabel htmlFor="mode">
                            Mode de paiement :{" "}
                        </InputLabel>
                        <span
                            id="mode"
                            className="mt-4 ml-4 text-primary-color"
                        >
                            {paiement.mode_paiement}
                        </span>
                    </div>
                    <div className="flex">
                        <InputLabel htmlFor="montant2">
                            Montant (DH) :{" "}
                        </InputLabel>
                        <span
                            id="montant2"
                            className="mt-4 ml-4 text-primary-color"
                        >
                            {" "}
                            {paiement.montant}
                        </span>
                    </div>
                    <div className="flex">
                        <InputLabel htmlFor="commentaire">
                            Commentaire :{" "}
                        </InputLabel>
                        <span
                            id="commentaire"
                            className="mt-4 ml-4 text-primary-color"
                        >
                            {paiement.commentaire}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <InputLabel htmlFor="justificatif">
                            Justificatif :{" "}
                        </InputLabel>
                        <a href={`/depense/justificatif_de_paiement/download/${paiement.id}`}>
                            <div className="flex  space-x-1 ">
                                <HiOutlineDocumentDownload className="mt-4 ml-6 text-2xl text-primary-color" />
                                <span
                                    id="justificatif"
                                    className="mt-4 ml-4 text-primary-color "
                                >
                                    {" "}
                                    Télécharger le justificatif
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className=" col-span-2 border-b-[1px] border-gray-300 my-8 "></div>
                </div>
                ))
                ):(<div className="text-xl my-14 w-full text-center text-gray-300 italic">Aucun paiement n'a été ajouté</div>)}
            </div>
        </Main_content>
    );
}
