import Main_content from "@/main _content/Main_content";
import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { HiUsers } from "react-icons/hi2";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function AjouterLocataire({ auth }) {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [cni, setCni] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [genre, setGenre] = useState("");
    const [date_naissance, setDate_naissance] = useState("");
    const [nationalite, setNationalite] = useState("");
    const [date_debut, setDateDebut] = useState("");
    const [date_fin, setDateFin] = useState("");

    const ajouter = async (e) => {
        e.preventDefault();
        const locataire = {
            nom,
            prenom,
            cni,
            phone,
            email,
            genre,
            date_naissance,
            nationalite,
            date_fin,
            date_debut,
        };
        try {
            await axios.post(`/api/`, locataire);

            Swal.fire({
                icon: "success",
                title: "Votre locataire a été ajoutée avec succès !",
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
                Title={"Ajouter un locataire"}
                Description={
                    "Entrez les informations correctes pour le locataire"
                }
            >
                <div>
                    <Head title="Ajouter un locataire " />

                    <div>
                        <span className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                            <HiUsers />
                        </span>
                        <form
                            className="space-y-6"
                            onSubmit={(e) => ajouter(e)}
                        >
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
                                            onChange={(e) =>
                                                setNom(e.target.value)
                                            }
                                            required
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
                                            required
                                            value={prenom}
                                            onChange={(e) =>
                                                setPrenom(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setGenre(e.target.value)
                                            }
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                        >
                                            <option disabled value="">
                                                Vous êtes?
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
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
                                            onChange={(e) =>
                                                setDate_naissance(
                                                    e.target.value
                                                )
                                            }
                                            type="date"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            N° Téléphone
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <TextInput
                                            id="phone"
                                            name="phone"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
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
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            autoComplete="current-email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start mt-2 w-full ">
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
                                            onChange={(e) =>
                                                setCni(e.target.value)
                                            }
                                            autoComplete="current-cni"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start mt-2 w-full">
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
                                            onChange={(e) =>
                                                setNationalite(e.target.value)
                                            }
                                            autoComplete="current-nationalite"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start mt-2 w-full">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="date_debut"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Date d'effet de bail
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <TextInput
                                            id="date_debut"
                                            name="date_debut"
                                            type="date"
                                            value={date_debut}
                                            onChange={(e) =>
                                                setDateDebut(e.target.value)
                                            }
                                            autoComplete="current-date_debut"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start mt-2 w-full">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="date_fin"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Date de fin de bail
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <TextInput
                                            id="date_fin"
                                            name="date_fin"
                                            type="date"
                                            value={date_fin}
                                            onChange={(e) =>
                                                setDateFin(e.target.value)
                                            }
                                            autoComplete="current-date_fin"
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
