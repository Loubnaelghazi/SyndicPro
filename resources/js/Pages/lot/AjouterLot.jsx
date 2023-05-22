import React, { useEffect, useState } from "react";
import Main_content from "@/main _content/Main_content";
import { HiHome } from "react-icons/hi2";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const AjouterLot = ({ auth }) => {
    const [numero, setNumero] = useState("");
    const [batiment, setBatiment] = useState("");
    const [etage, setEtage] = useState("");
    const [porte, setPorte] = useState("");
    const [type, setType] = useState("");
    const [proprietaire, setProprietaire] = useState("");
    const [locataire, setLocataire] = useState("");

    const ajouter = async (e) => {
        e.preventDefault();
        const lot = {
            numero,
            batiment,
            type,
            etage,
            porte,
            proprietaire,
            locataire,
        };
        try {
            await axios.post(`/api/`, lot);

            Swal.fire({
                icon: "success",
                title: "Votre lot a été ajoutée avec succès !",
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
                window.location.href = "/lots";
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Main_content
                user={auth.user}
                Title={"Ajouter un lot"}
                Description={"Entrez les informations correctes pour votre lot"}
            >
                <div>
                    <Head title="Ajouter lot" />

                    <div>
                        <span className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                            <HiHome />
                        </span>
                        <form
                            className="space-y-6"
                            onSubmit={(e) => ajouter(e)}
                        >
                            <div className="grid grid-cols-2 gap-x-16 ">
                                <div>
                                    <label
                                        htmlFor="numero"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Numéro
                                    </label>
                                    <div className="mt-2">
                                        <TextInput
                                            id="numero"
                                            name="numero"
                                            type="number"
                                            autoComplete="current-numero"
                                            value={numero}
                                            onChange={(e) =>
                                                setNumero(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="batiment"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Batiment
                                        </label>
                                        <div className="mt-2">
                                            <TextInput
                                                id="batiment"
                                                name="batiment"
                                                type="text"
                                                required
                                                value={batiment}
                                                onChange={(e) =>
                                                    setBatiment(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="locataire"
                                            className="block text-sm mt-4 font-medium leading-6 text-gray-900"
                                        >
                                            locataire
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="locataire"
                                                name="locataire"
                                                value={locataire}
                                                onChange={(e) =>
                                                    setLocataire(e.target.value)
                                                }
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                            >
                                                <option disabled value="">
                                                    Veuillez choisir un
                                                    locataire
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="etage"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Etage
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <TextInput
                                            id="etage"
                                            name="etage"
                                            type="number"
                                            value={etage}
                                            onChange={(e) =>
                                                setEtage(e.target.value)
                                            }
                                            autoComplete="current-ville"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="porte"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Porte
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <TextInput
                                                id="porte"
                                                name="porte"
                                                value={porte}
                                                onChange={(e) =>
                                                    setPorte(e.target.value)
                                                }
                                                type="text"
                                                maxLength="5"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="proprietaire"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Proprietaire
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="proprietaire"
                                                name="proprietaire"
                                                value={proprietaire}
                                                onChange={(e) =>
                                                    setProprietaire(
                                                        e.target.value
                                                    )
                                                }
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                            >
                                                <option disabled value="">
                                                    Veuillez choisir un
                                                    proprietaire
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col mx-auto justify-center">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="type_id"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Type
                                    </label>
                                </div>

                                <div className="mt-2">
                                    <select
                                        id="type_id"
                                        name="type_id"
                                        value={type}
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                    >
                                        <option disabled value="">
                                            Veuillez choisir un type
                                        </option>
                                        <option value="immeuble">
                                            Appartement
                                        </option>
                                        <option value="villa">
                                            Local commercial
                                        </option>
                                        <option value="autre">autre</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className="flex flex-row justify-center mt-11">
                            <PrimaryButton
                                type="submit"
                                className="w-40  py-2 "
                            >
                                Ajouter
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </Main_content>
        </>
    );
};

export default AjouterLot;
