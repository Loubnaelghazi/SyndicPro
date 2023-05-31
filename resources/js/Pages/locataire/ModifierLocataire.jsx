import Main_content from "@/main _content/Main_content";
import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { HiUserGroup } from "react-icons/hi2";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import Swal from "sweetalert2";

export default function ModifierLocataire({ auth }) {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [cni, setCni] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [genre, setGenre] = useState("");
    const [date_naissance, setDate_naissance] = useState("");
    const [nationalite, setNationalite] = useState("");
    const [date_debut, setDateDebut] = useState("");
    const [date_fin, setDateFin] = useState("");
    const url = window.location.href;
    const locataireID = url.substring(url.lastIndexOf("/") + 1);

    useEffect(() => {
        // Fetch the copropriete data from the server and update the state
        fetchLocatairesData();
    }, []);

    const fetchLocatairesData = async () => {
        try {
            const response = await axios.get(`/api/locataires/${locataireID}`);
            const { data } = response;
            setNom(data.nom);
            setPrenom(data.prenom);
            setCni(data.cni);
            setEmail(data.email);
            setTel(data.tel);
            setGenre(data.genre);
            setDate_naissance(data.date_naissance);
            setNationalite(data.nationalite);
            setDateDebut(data.date_debut);
            setDateFin(data.date_fin);
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
            case "phone":
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
            case "date_debut":
                setDateDebut(value);
                break;
            case "date_fin":
                setDateFin(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedLocataire = {
            nom,
            prenom,
            cni,
            tel,
            email,
            genre,
            date_naissance,
            nationalite,
            date_fin,
            date_debut,
        };

        try {
            const response = await axios.put(
                `/api/locataires/${locataireID}`,
                updatedLocataire
            );

            const { data } = response;
            console.log("Updated Locataire:", data);

            Swal.fire({
                title: "Êtes-vous sûr de vouloir effectuer ces modifications ?",
                text: "Vous venez de modifier les informations d'un locataire, veuillez confirmer !",
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
                        // Redirection vers la page /copropriete après la fermeture du message
                        window.location.href = "/locataires";
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
                Title={"Modifier les informations liées à un locataire"}
                Description={""}
            >
                <div>
                    <Head title="Modifier les locataires " />

                    <div>
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
                                            value={tel}
                                            onChange={handleInputChange}
                                            type="tel"
                                            required
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
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start mt-2 w-full">
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
                                            required
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
                                            onChange={handleInputChange}
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
                                            onChange={handleInputChange}
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
