import Main_content from "@/main _content/Main_content";
import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { HiTruck } from "react-icons/hi2";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import axios from "axios";
import Swal from "sweetalert2";


export default function AjouterFournisseur({auth}) {
    const [raison, setRaison] = useState("");
    const [ice, setIce] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [ville, setVille] = useState("");
    const [adresse, setAdresse] = useState("");

    const ajouter = async (e) => {
        e.preventDefault();
        const fournisseur = {
            raison,
            ice,
            tel,
            email,
            ville,
            adresse,
        };
        try {
            await axios.post(`/api/fournisseurs`, fournisseur);

            Swal.fire({
                icon: "success",
                title: "Votre fournisseur a été ajoutée avec succès !",
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
                window.location.href = "/fournisseurs";
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Main_content
                user={auth.user}
                Title={"Ajouter un fournisseur"}
                Description={
                    "Entrez les informations correspondantes à votre fournisseur"
                }
            >
                <div>
                    <Head title="Ajouter un fournisseur " />

                    <div>
                        <span className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                            <HiTruck />
                        </span>
                        <form
                            className="space-y-6"
                            onSubmit={(e) => ajouter(e)}
                        >
                            <div className="grid  grid-cols-2 gap-x-16">
                                <div>
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
                                                type="text"
                                                value={raison}
                                                onChange={(e) =>
                                                    setRaison(e.target.value)
                                                }
                                                required
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
                                            onChange={(e) =>
                                                setIce(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setTel(e.target.value)
                                            }
                                            type="tel"
                                            required
                                        />
                                    </div>
                                </div>
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
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            type="email"
                                            required
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
                                            onChange={(e) =>
                                                setAdresse(e.target.value)
                                            }
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div >
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
                                            onChange={(e) =>
                                                setVille(e.target.value)
                                            }
                                            autoComplete="current-ville"
                                            required
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
                                        Ajouter
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
