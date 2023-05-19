import Main_content from "@/main _content/Main_content";
import { HiBuildingOffice } from "react-icons/hi2";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ModifierCopropriete = ({ auth }) => {
    const [nom, setNom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [type, setType] = useState("");
    const [ville, setVille] = useState("");
    const [codePostale, setCodePostale] = useState("");
    const [balance, setBalance] = useState("");
    const [showCopropriete, setShowCopropriete] = useState(false);
    const url = window.location.href;
    const coproprieteID = url.substring(url.lastIndexOf('/')+1);

    useEffect(() => {
        // Fetch the copropriete data from the server and update the state
        fetchCoproprieteData();
        console.log(coproprieteID);
    }, []);

    const fetchCoproprieteData = async () => {
        try {
            const response = await axios.get(
                `/api/coproprietes/${coproprieteID}`
            );
            const { data } = response;
            setNom(data.nom);
            setAdresse(data.adresse);
            setType(data.type);
            setVille(data.ville);
            setCodePostale(data.code_postale);
            setBalance(data.balance);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "nom":
                setNom(value);
                break;
            case "adresse":
                setAdresse(value);
                break;
            case "type":
                setType(value);
                break;
            case "ville":
                setVille(value);
                break;
            case "code_postale":
                setCodePostale(value);
                break;
            case "balance":
                setBalance(value);
                break;
            default:
                break;
        }
    };

    const handleShowCopropriete = () => {
        setShowCopropriete(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const updatedCopropriete = {
            nom,
            adresse,
            type,
            ville,
            code_postale: codePostale,
            balance,
        };
    
        try {
            const response = await axios.put(
                `/api/coproprietes/${coproprieteID}`,
                updatedCopropriete
            );
    
            const { data } = response;
            console.log("Updated copropriete:", data);
            // Additional logic or redirect after successful update
    
            Swal.fire({
                title: " Modifer la copropriété ",
                text: "La copropriété a été modifié avec succès !",
                icon: "success",
                customClass: {
                    confirmButton:
                        "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:scale-105",
                },
                buttonsStyling: false,
            });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Main_content user={auth.user}>
                <div>
                    {/* ************************************************************************** */}
                    <Head title="Modifer Coproprieté" />

                    <div>
                        <span className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                            <HiBuildingOffice />
                        </span>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-x-16 ">
                                <div>
                                    <label
                                        htmlFor="Modifier_nomCop"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Nom
                                    </label>
                                    <div className="mt-2">
                                        <TextInput
                                            id="Modifier_nomCop"
                                            name="nom"
                                            type="text"
                                            autoComplete="nomCop"
                                            value={nom}
                                            onChange={handleInputChange}
                                            //    value={data.nomCop}

                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="Modifier_adresse"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Adresse
                                        </label>
                                        <div className="mt-2">
                                            <TextInput
                                                id="Modifier_adresse"
                                                name="adresse"
                                                type="text"
                                                value={adresse}
                                                required
                                                onChange={handleInputChange}
                                                //    value={data.adresse}
                                            />
                                        </div>
                                    </div>

                                    <div>
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
                                                <option
                                                    value="immeuble"
                                                    id="Modifier_immeuble"
                                                >
                                                    Immeuble
                                                </option>
                                                <option
                                                    value="villa"
                                                    id="villa"
                                                >
                                                    Villa
                                                </option>
                                                <option
                                                    value="autre"
                                                    id="autre"
                                                >
                                                    Autre
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="Modifier_ville"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Ville
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <TextInput
                                            id="Modifer_ville"
                                            name="ville"
                                            type="text"
                                            value={ville}
                                            //    value={data.ville}
                                            autoComplete="current-ville"
                                            required
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="Modifier_code_postale "
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Code Postale
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <TextInput
                                                id="Modifier_code_postale"
                                                name="code_postale"
                                                //    value={data.code_postale}
                                                value={codePostale}
                                                type="number"
                                                maxLength="5"
                                                required
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="Modifer_balance"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Balance(DH)
                                        </label>
                                        <div className="mt-2">
                                            <TextInput
                                                id="Modifer_balance"
                                                name="balance"
                                                type="number"
                                                value={balance}

                                                required
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row justify-center">
                                <PrimaryButton type="submit" className="w-40  py-2 ">
                                    Enregistrer
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    {/* *********************************************** */}
                </div>
            </Main_content>
        </>
    );
};
export default ModifierCopropriete;
