import Main_content from "@/main _content/Main_content";
import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { HiTruck } from "react-icons/hi2";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import axios from "axios";
import Swal from "sweetalert2";
export default function ModifierFournisseur({auth}) {

const [raison, setRaison] = useState("");
const [ice, setIce] = useState("");
const [tel, setTel] = useState("");
const [email, setEmail] = useState("");
const [ville, setVille] = useState("");
const [adresse, setAdresse] = useState("");
const url = window.location.href;
const fournisseurId = url.substring(url.lastIndexOf("/") + 1);

useEffect(() => {
    fetchFournisseurData();
}, []);

const fetchFournisseurData = async () => {
    try {
         const response = await axios.get(
            `/api/fournisseurs/${fournisseurId}`
        ); 
        const { data } = response;
        setRaison(data.raison);
        setIce(data.ice);
        setEmail(data.email);
        setTel(data.tel);
        setVille(data.ville);
        setAdresse(data.adresse);

    } catch (error) {
        console.error(error);
    }
};

const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
        case "raison":
            setRaison(value);
            break;
        case "ice":
            setIce(value);
            break;
        case "email":
            setEmail(value);
            break;
        case "tel":
            setTel(value);
            break;
        case "adresse":
            setAdresse(value);
            break;
        case "ville":
            setVille(value);
            break;
        default:
            break;
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFournisseur = {
        raison,
        ice,
        tel,
        email,
        ville,
        adresse,
    };

    try {
        const response = await axios.put(
            `/api/fournisseurs/${fournisseurId}`,
            updatedFournisseur
        ); 

        const { data } = response;
        console.log("Updated Fournisseur:", data);

        Swal.fire({
            title: "Êtes-vous sûr de vouloir effectuer ces modifications ?",
            text: "Vous venez de modifier les informations d'un fournisseur, veuillez confirmer !",
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
                    window.location.href = "/fournisseurs";
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
                Title={"Modifier les informations liées à un fournisseur "}
                Description={""}
            >
                <div>
                    <Head title="Modifier les fournisseurs " />

                    <div>
                        <span className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                            <HiTruck />
                        </span>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-rows-3 grid-cols-2 gap-x-16">

                                <div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Adresse e-mail
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <TextInput
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={handleInputChange}
                                                autoComplete="current-email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="ice"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        ICE
                                    </label>
                                    <div className="mt-2">
                                        <TextInput
                                            id="ice"
                                            name="ice"
                                            type="text"
                                            required
                                            value={ice}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="raison"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Raison sociale
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <TextInput
                                            id="raison"
                                            name="raison"
                                            value={raison}
                                            onChange={handleInputChange}
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="tel"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            N° Téléphone
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <TextInput
                                            id="tel"
                                            name="tel"
                                            value={tel}
                                            onChange={handleInputChange}
                                            type="tel"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="adresse"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Adresse
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <TextInput
                                            id="adresse"
                                            name="adresse"
                                            value={adresse}
                                            onChange={handleInputChange}
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start mt-2 w-full">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="ville"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Ville
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <TextInput
                                            id="ville"
                                            name="ville"
                                            type="text"
                                            value={ville}
                                            onChange={handleInputChange}
                                            autoComplete="current-ville"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-center mt-11 w-full">
                                    <PrimaryButton
                                        type="submit"
                                        className="w-40  py-2 "
                                    >
                                        Enregistrer
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Main_content>
        </>
    );
}
