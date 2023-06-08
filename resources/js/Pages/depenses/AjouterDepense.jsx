import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import { FaFileUpload } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function AjouterDepense({ auth }) {

    const [designation, setDesignation] = useState('');
    const [description, setDescription] = useState('');
    const [id_fournisseur, setIdFournisseur] = useState('');
    const [fournisseur_externe, setFournisseurExterne] = useState(null);
    const [montant, setMontant] = useState('');
    const [statut, setStatut] = useState('non_payee');
    const [montant_restant, setMontantRestant] = useState('');
    const [date_depense, setDateDepense] = useState('');
    const [fournisseurs, setFournisseurs] = useState([]);


    useEffect(() => {
        if (!fournisseurs.length) {
            fetchFournisseurs();
        }
    });

    const fetchFournisseurs = async () => {
        const response = await axios.get(`/api/fournisseurs/getAll`);
        setFournisseurs(response.data);
    };

    const ajouter = async (e) => {
        e.preventDefault();
        const depense = {
            designation,
            description,
            id_fournisseur,
            fournisseur_externe,
            montant,
            statut,
            montant_restant : montant,
            date_depense,
            };
        try {
            const response = await axios.post(`/api/depenses`, depense);
            const data = response.data;
            Swal.fire({
                icon: "success",
                title: "Votre depense a été ajoutée avec succès !",
                showConfirmButton: true,
                confirmButtonText: "OK",
                buttonsStyling: false,
                customClass: {
                    popup: "success-popup",
                    confirmButton:
                        "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md",
                },
                preConfirm: () => {
                    return new Promise((resolve) => {
                        resolve();
                    });
                },
            }).then(() => {
                window.location.href = "/depenses";
            });
        } catch (error) {
            console.log(error);
        }
    };
   
    return (
        <Main_content
            user={auth.user}
            Title={"Nouvelle dépense"}
            Description={"test test test "}
            ClassName="p-12"
        >
            <Head title=" Ajouter dépenses" />
            <form className="" onSubmit={ajouter}>
                <div className=" ">
                    <div className="">
                        <div>
                            <div className="flex flex-col gap-5">
                                <div className="space-y-1">
                                    <InputLabel
                                        htmlFor="designation"
                                        className="font-medium"
                                    >
                                        Désignation :
                                    </InputLabel>
                                    <TextInput
                                        name="designation"
                                        type="text"
                                        id="designation"
                                        value={designation}
                                        onChange={(e) =>
                                            setDesignation(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <InputLabel htmlFor="description ">
                                        Description :
                                    </InputLabel>
                                    <textarea
                                        id="description"
                                        placeholder="Vous pouvez ajouter plus d'informations içi "
                                        rows="3"
                                        className="block   p-2.5 w-full text-l text-gray-900  rounded-lg border border-gray-300 focus:ring-primary-color focus:border-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-color dark:focus:border-primary-color h-min"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    ></textarea>
                                </div>

                                <div className="space-y-1">
                                    <InputLabel htmlFor="fournissuer">
                                        Fourisseur :
                                    </InputLabel>
                                    <div className="flex flex-row items-center gap-4">
                                        <select
                                            name="fournisseur"
                                            id="fournisseur"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                            value={id_fournisseur}
                                            onChange={(e) =>
                                                setIdFournisseur(e.target.value)
                                            }
                                        >
                                            <option
                                                disabled value=""
                                            >
                                                Selectionez le fournisseur
                                            </option>
                                            {fournisseurs.map(
                                                    (fournisseur) => (
                                                        <option
                                                            key={
                                                                fournisseur.id
                                                            }
                                                            value={
                                                                fournisseur.id
                                                            }
                                                        >
                                                            {fournisseur.raison}
                                                        </option>
                                                    )
                                                )}
                                        </select>
                                        <div className="flex flex-row text-gray-400">
                                            {" "}
                                            <div>-</div> <div>ou</div>
                                            <div>-</div>
                                        </div>
                                        <TextInput
                                            type="text"
                                            name="fournisseur externe"
                                            id="fe"
                                            placeholder="Entrer un nom"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <InputLabel htmlFor="montant">
                                        {" "}
                                        Montant(DH) :
                                    </InputLabel>
                                    <TextInput
                                        type="number"
                                        name="montant"
                                        id="montant"
                                        value={montant}
                                        onChange={(e) =>
                                            setMontant(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Montant (DH)"
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <InputLabel htmlFor="date_paiement_partiel">
                                        Date de depense :
                                    </InputLabel>
                                    <TextInput
                                        id="date_depense"
                                        name="date_depense"
                                        type="date"
                                        value={date_depense}
                                        onChange={(e) =>
                                            setDateDepense(
                                                e.target.value
                                            )
                                        }
                                        
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-6 flex justify-center ">
                    <PrimaryButton type="submit" className="w-40  py-2 ">
                        Ajouter
                    </PrimaryButton>
                </div>
            </form>
        </Main_content>
    );
}
