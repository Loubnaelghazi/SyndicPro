import Main_content from "@/main _content/Main_content";
import { HiHome } from "react-icons/hi2";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head } from "@inertiajs/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

const ModifierLot = ({ auth }) => {
    const [numero, setNumero] = useState("");
    const [batiment, setBatiment] = useState("");
    const [etage, setEtage] = useState("");
    const [porte, setPorte] = useState("");
    const [type, setType] = useState("");
    const [proprietaire, setProprietaire] = useState("");
    const [locataire, setLocataire] = useState("");
    const [locataires, setLocataires] = useState([]);
    const [proprietaires, setProprietaires] = useState([]);
    const [proprietaire_id, setProprietaire_id] = useState("");
    const [locataire_id, setLocataire_id] = useState("");
    const url = window.location.href;
    const LotID = url.substring(url.lastIndexOf("/") + 1);

    useEffect(() => {
        // Fetch the Lot data from the server and update the state
        fetchLotsData();
        console.log(LotID);

        if (!proprietaires.length) {
            fetchProprietaires();
        }
        if (!locataires.length) {
            fetchLocataires();
        }
    }, []);

    const fetchLocataires = async () => {
        const response = await axios.get(`/api/locataires`);
        setLocataires(response.data);
    };

    const fetchProprietaires = async () => {
        const response = await axios.get(`/api/proprietaires`);
        setProprietaires(response.data);
    };

    const fetchLotsData = async () => {
        try {
            const response = await axios.get(`/api/lots/${LotID}`);
            const { data } = response;
            setNumero(data.numero);
            setBatiment(data.batiment);
            setEtage(data.etage);
            setPorte(data.porte);
            setType(data.type);
            setProprietaire_id(data.proprietaire_id); // Set the initial value to the proprietaire_id
            setLocataire_id(data.locataire_id); // Set the initial value to the locataire_id
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "numero":
                setNumero(value);
                break;
            case "batiment":
                setBatiment(value);
                break;
            case "etage":
                setEtage(value);
                break;
            case "porte":
                setPorte(value);
                break;
            case "type":
                setType(value);
                break;
            case "proprietaire_id":
                setProprietaire_id(value);
                break;
            case "locataire_id":
                setLocataire_id(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedLot = {
            numero,
            batiment,
            type,
            etage,
            porte,
            proprietaire_id,
            locataire_id,
        };

        try {
            const response = await axios.put(`/api/lots/${LotID}`, updatedLot);

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
                        window.location.href = "/lots";
                    });
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Main_content
                user={auth.user}
                Title={"Modifier un lot"}
                Description={
                    "Vous pouvez modifier librement les lots de votre copropriété"
                }
            >
                <div>
                    {/* ************************** */}
                    <Head title="Modifer lot" />

                    <div>
                        <span className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                            <HiHome />
                        </span>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-x-16 ">
                                <div>
                                    <label
                                        htmlFor="Modifier_numero"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Numero
                                    </label>
                                    <div className="mt-2">
                                        <TextInput
                                            id="Modifier_numero"
                                            name="nom"
                                            type="text"
                                            autoComplete="numero"
                                            value={numero}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="Modifier_batiment"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Batiment
                                        </label>
                                        <div className="mt-2">
                                            <TextInput
                                                id="Modifier_batiment"
                                                name="batiment"
                                                type="text"
                                                value={batiment}
                                                required
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="Modifier_locataire"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Locataire
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <select
                                                id="Modifier_locataire"
                                                name="locataire_id"
                                                type="password"
                                                value={locataire_id}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                                onChange={handleInputChange}
                                            >
                                                <option disabled value="">
                                                    Veuillez choisir un
                                                    locataire
                                                </option>
                                                {locataires.map((locataire) => (
                                                    <option
                                                        key={locataire.id}
                                                        value={locataire.id}
                                                    >
                                                        {locataire.nom +
                                                            " " +
                                                            locataire.prenom}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="Modifier_etage"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Etage
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <TextInput
                                            id="Modifer_etage"
                                            name="etage"
                                            type="text"
                                            value={etage}
                                            autoComplete="current-etage"
                                            required
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="Modifier_porte "
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Porte
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <TextInput
                                                id="Modifier_porte"
                                                name="porte"
                                                value={porte}
                                                type="number"
                                                maxLength="5"
                                                required
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="Modifier_proprietaire"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Proprietaire
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <select
                                                id="Modifier_proprietaire"
                                                name="proprietaire_id"
                                                type="password"
                                                value={proprietaire_id}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                                onChange={handleInputChange}
                                            >
                                                <option disabled value="">
                                                    Veuillez choisir un
                                                    proprietaire
                                                </option>
                                                {proprietaires.map(
                                                    (proprietaire) => (
                                                        <option
                                                            key={
                                                                proprietaire.id
                                                            }
                                                            value={
                                                                proprietaire.id
                                                            }
                                                        >
                                                            {proprietaire.nom +
                                                                " " +
                                                                proprietaire.prenom}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col mx-auto justify-center">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="Modifier_type"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Type
                                    </label>
                                </div>

                                <div className="mt-2">
                                    <select
                                        id="Modifier_type"
                                        name="type"
                                        type="password"
                                        required
                                        value={type}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                        onChange={handleInputChange}
                                    >
                                        <option disabled value="">
                                            Veuillez choisir un type
                                        </option>
                                        <option value="Appartement">
                                            Appartement
                                        </option>
                                        <option value="Local commercial">
                                            Local commercial
                                        </option>
                                        <option value="autre">autre</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-row justify-center">
                                <PrimaryButton className="w-40  py-2 ">
                                    Enregistrer
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    {/* ***************** */}
                </div>
            </Main_content>
        </>
    );
};
export default ModifierLot;
