import Main_content from "@/main _content/Main_content";
import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { HiUserGroup } from "react-icons/hi2";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import axios from "axios";
import Swal from "sweetalert2";

export default function ModifierProprietaire({ auth }) {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [cni, setCni] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [genre, setGenre] = useState("");
    const [date_naissance, setDate_naissance] = useState("");
    const [nationalite, setNationalite] = useState("");
    const url = window.location.href;
    const proprietaireID = url.substring(url.lastIndexOf("/") + 1);

    useEffect(() => {
        fetchProprietaireData();
    }, []);

    const fetchProprietaireData = async () => {
        try {
            const response = await axios.get(
                `/api/proprietaires/${proprietaireID}`
            );
            const { data } = response;
            setNom(data.nom);
            setPrenom(data.prenom);
            setCni(data.cni);
            setEmail(data.email);
            setTel(data.tel);
            setGenre(data.genre);
            setNationalite(data.nationalite);

            setDate_naissance(data.date_naissance);
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
            case "prenom":
                setPrenom(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "tel":
                setTel(value);
                break;
            case "cni":
                setCni(value);
                break;
            case "genre":
                setGenre(value);
                break;
            case "date_naissance":
                setDate_naissance(value);
            case "nationalite":
                setNationalite(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedProprietaire = {
            nom,
            prenom,
            cni,
            tel,
            email,
            genre,
            date_naissance,
            nationalite,
        };

        try {
            const response = await axios.put(
                `/api/proprietaires/${proprietaireID}`,
                updatedProprietaire
            );

            const { data } = response;
            console.log("Updated proprietaires:", data);

            Swal.fire({
                title: "Êtes-vous sûr de vouloir effectuer ces modifications ?",
                text: "Vous venez de modifier les informations d'un propriétaire, veuillez confirmer !",
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
                        window.location.href = "/proprietaires";
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
                Title={"Modifier les informations liées à un propriétaire "}
                Description={""}
            >
                <div>
                    <Head title="Modifier les propriétaires " />

                    <div>
                        <span className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                            <HiUserGroup />
                        </span>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-rows-3 grid-cols-2 gap-x-16">
                                <div>
                                    <label
                                        htmlFor="nom"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Nom
                                    </label>
                                    <div className="mt-2">
                                        <TextInput
                                            id="nom"
                                            name="nom"
                                            type="text"
                                            value={nom}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="prenom"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Prénom
                                    </label>
                                    <div className="mt-2">
                                        <TextInput
                                            id="prenom"
                                            name="prenom"
                                            type="text"
                                            value={prenom}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="genre"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Genre
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <select
                                            id="genre"
                                            name="genre"
                                            value={genre}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                        >
                                            <option disabled value="">
                                                Vous êtes?
                                            </option>
                                            <option value="male">Mâle</option>
                                            <option value="female">
                                                Femelle
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="date_naissance"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Date de naissance
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <TextInput
                                            id="date_naissance"
                                            name="date_naissance"
                                            value={date_naissance}
                                            onChange={handleInputChange}
                                            type="date"
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

                                <div className="flex flex-col justify-start mt-2 w-full mx-auto">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="cni"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            CNI
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <TextInput
                                            id="cni"
                                            name="cni"
                                            type="text"
                                            value={cni}
                                            onChange={handleInputChange}
                                            autoComplete="current-cni"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start mt-2 w-full mx-auto">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="nationalite"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nationalité
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <TextInput
                                            id="nationalite"
                                            name="nationalite"
                                            type="text"
                                            value={nationalite}
                                            onChange={handleInputChange}
                                            autoComplete="current-nationalite"
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
