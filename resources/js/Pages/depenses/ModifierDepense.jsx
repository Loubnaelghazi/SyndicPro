import React from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";


export default function ModifierDepense({ auth }) {
    const [designation, setDesignation] = useState("");
    const [description, setDescription] = useState("");
    const [id_fournisseur, setIdFournisseur] = useState("");
    const [fournisseur_externe, setFournisseurExterne] = useState(null);
    const [montant, setMontant] = useState("");
    const [statut, setStatut] = useState("non_payee");
    const [montant_restant, setMontantRestant] = useState("");
    const [date_depense, setDateDepense] = useState("");
    const url = window.location.href;
    const depenseID = url.substring(url.lastIndexOf("/") + 1);
    const [fournisseurs, setFournisseurs] = useState([]);

    useEffect(() => {
        // Fetch the copropriete data from the server and update the state
        fetchDepensesData();

        if (!fournisseurs.length) {
            fetchFournisseurs();
        }
    }, []);

    const fetchFournisseurs = async () => {
        const response = await axios.get(`/api/fournisseurs/getAll`);
        setFournisseurs(response.data);
    };
    
    const fetchDepensesData = async () => {
        try {
            const response = await axios.get(`/api/depenses/${depenseID}`);
            const { data } = response;
            setDesignation(data.designation);
            setDescription(data.description);
            setIdFournisseur(data.id_fournisseur);
            setFournisseurExterne(data.fournisseur_externe);
            setMontant(data.montant);
            setStatut(data.statut);
            setMontantRestant(data.montant_restant);
            setDateDepense(data.date_depense);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "designation":
                setDesignation(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "id_fournisseur":
                setIdFournisseur(value);
                break;
            case "fournisseur_externe":
                setFournisseurExterne(value);
                break;
            case "montant":
                setMontant(value);
                break;
            case "statut":
                setStatut(value);
                break;
            case "montant_restant":
                setMontantRestant(value);
                break;
            case "date_depense":
                setDateDepense(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedDepense = {
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
            const response = await axios.put(`/api/depenses/${depenseID}`, updatedDepense);

            const { data } = response;
            console.log("Updated lot:", data);

            Swal.fire({
                title: "Êtes-vous sûr de vouloir effectuer ces modifications ?",
                text: "Vous venez de modifier les informations de ce lot, veuillez confirmer !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Oui",
                cancelButtonText: "Annuler",
                customClass: {
                    confirmButton:
                        "mx-2 px-4 py-2 bg-yellow-300 text-white rounded hover:bg-yellow-500 hover:scale-105",
                    cancelButton:
                        "mx-2 px-4 py-2 bg-white border-[1px] border-solid border-gray-500 text-gray-500 rounded hover:scale-105",
                },
                buttonsStyling: false,
                preConfirm: () => {
                    return new Promise((resolve) => {
                        resolve();
                    });
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Succès",
                        text: "La modification a été effectuée avec succès !",
                        icon: "success",
                        customClass: {
                            confirmButton:
                                "px-4 py-2 bg-primary-color text-white rounded hover:bg-green-600 hover:scale-105",
                        },
                        buttonsStyling: false,
                    }).then(() => {
                        // Redirection vers la page /lot après la fermeture du message
                        window.location.href = "/depenses";
                    });
                }
            });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Main_content
            user={auth.user}
            Title={`Modifier dépense N° ${depenseID}`}
            ClassName="p-12"
        >
            <Head title={`Modifier dépense N° ${depenseID}`} />
            <form className="" onSubmit={handleSubmit}>
                <div className=" ">
                    <div className="">
                        <div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <InputLabel
                                        htmlFor="designation"
                                        className="font-medium"
                                    >
                                        Désignation :
                                    </InputLabel>
                                    <TextInput
                                        name="designation"
                                        type="text"
                                        value={designation}
                                        id="designation"
                                        className="mb-0"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="description "
                                        className="font-medium"
                                    >
                                        Description :
                                    </InputLabel>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={description}
                                        onChange={handleInputChange}
                                        placeholder="Vous pouvez modifier vos informations içi "
                                        rows="3"
                                        className="block  p-2.5 w-full text-l text-gray-900  rounded-lg border border-gray-300 focus:ring-primary-color focus:border-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-color dark:focus:border-primary-color h-min"
                                    ></textarea>
                                </div>

                                <div className="">
                                    <InputLabel
                                        htmlFor="fournissuer"
                                        className="font-medium"
                                    >
                                        Fourisseur :
                                    </InputLabel>
                                    <div className="flex flex-row items-center gap-4">
                                        <select
                                            name="id_fournisseur"
                                            value={id_fournisseur}
                                            onChange={handleInputChange}
                                            id="fournisseur"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                        >
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
                                            name="fournisseur_externe"
                                            className="mb-0"
                                            value={fournisseur_externe}
                                            onChange={handleInputChange}
                                            placeholder="Modifier le nom içi"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="montant"
                                        className="font-medium"
                                    >
                                        {" "}
                                        Montant :
                                    </InputLabel>
                                    <TextInput
                                        type="number"
                                        name="montant"
                                        id="montant"
                                        value={montant}
                                        onChange={handleInputChange}
                                        placeholder="Montant (DH)"
                                        className="mb-0"
                                        required
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="date"
                                        className="font-medium"
                                    >
                                        Date de depense :
                                    </InputLabel>
                                    <TextInput
                                        type="date"
                                        name="date_depense"
                                        value={date_depense}
                                        onChange={handleInputChange}
                                        id="date"
                                        className="w-full  h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                        placeholder="Date de la réunion"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center ">
                    <PrimaryButton type="submit" className="w-40  py-2 ">
                        Enregistrer
                    </PrimaryButton>
                </div>
            </form>
        </Main_content>
    );
}
