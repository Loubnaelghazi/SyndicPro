import React from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import InputLabel from "@/Components/InputLabel";
import {HiOutlineDocumentDownload} from "react-icons/hi"
export default function ConsulterDepense({auth}) {



    return (
        <Main_content
            user={auth.user}
            Title={"Consulter une dépense"}
            Description={"Fiche de dépense "}
            ClassName="p-10 px-14"
        >
            <Head title=" Dépenses" />

            <div className="grid grid-rows-2 grid-cols-2    ">
                <div className="flex">
                    <InputLabel htmlFor="designation">
                        Désignation :{" "}
                    </InputLabel>
                    <span id="designation" className="mt-4 ml-4 text-primary-color">
                        {" "}
                        descriptipon
                    </span>
                </div>
                <div className="flex">
                    <InputLabel htmlFor="date">Date de dépense : </InputLabel>
                    <span id="date" className="mt-4 ml-3 text-primary-color">
                        {" "}
                        29/10/2003
                    </span>
                </div>
                <div className="flex">
                    <InputLabel htmlFor="montant" className=" text-lg ">
                        Montant (DH) :{" "}
                    </InputLabel>
                    <span id="montant" className="mt-4 ml-2 text-primary-color"> 1000</span>
                </div>{" "}
                <div className="flex">
                    <InputLabel htmlFor="statut">Statut : </InputLabel>
                    <div id="statut" className=" text-white   my-3 ml-2  mt-4 bg-[#2AD46E] rounded-2xl px-4 flex items-center justify-center ">
                        statut
                    </div>
                </div>{" "}
                <div className=" flex col-span-2">
                    <InputLabel
                        htmlFor="description"
                        className="whitespace-normal"
                    >
                        {" "}
                        Description:{" "}
                    </InputLabel>{" "}
                    <p  id="description" className="mt-4 ml-4 text-primary-color">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero qui sint corrupti sunt laboriosam esse commodi
                        atque repellat incidunt excepturi deserunt, voluptas
                        culpa ex quo vitae adipisci laborum. Consequatur,
                        molestias?
                    </p>
                </div>
            </div>

            <div className=" px-2 my-4">
                {" "}
                <div className="flex my-10 flex-row items-center justify-center">
                    <div className="w-1/2 border-b-[1px] border-gray-300 "></div>
                    <div className=" flex items-center justify-center px-6 m-3 text-gray-400 bold tracking-wider">
                        Paiement
                    </div>
                    <div className="w-1/2 border-b-[1px] border-gray-300 "></div>
                </div>
                <div className="grid grid-rows-3 grid-cols-2 gap-2  ">
                    <div className="flex">
                        <InputLabel htmlFor="id">Id de paiement : </InputLabel>
                        <span className="mt-4 ml-4 text-primary-color">
                            {" "}
                            7389
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
                            {" "}
                            29/23/2008{" "}
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
                            {" "}
                            Especes
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
                            50 000
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
                            {" "}
                            coment.
                        </span>
                    </div>
                    <div className="flex items-center">
                        <InputLabel htmlFor="justificatif">
                            Justificatif :{" "}
                        </InputLabel>
                        <a href="">

                            <div className="flex  space-x-1 ">

                           < HiOutlineDocumentDownload className="mt-4 ml-6 text-2xl text-primary-color"/>
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
                </div>
            </div>
        </Main_content>
    );
}
