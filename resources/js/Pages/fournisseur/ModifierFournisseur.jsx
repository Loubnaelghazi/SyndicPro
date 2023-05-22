import Main_content from "@/main _content/Main_content";
import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { HiUserGroup } from "react-icons/hi2";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function ModifierFournisseur({auth}) {

const [raison, setRaison] = useState("");
const [ice, setIce] = useState("");
const [cni, setCni] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [ville, setVille] = useState("");
const [adresse, setAdresse] = useState("");
const url = window.location.href;
const fournisseurID = url.substring(url.lastIndexOf("/") + 1);

useEffect(() => {
    // Fetch the copropriete data from the server and update the state
    fetchFournisseurData();
}, []);

const fetchFournisseurData = async () => {
    try {
        /* const response = await axios.get(
            `/api/proprietaires/${proprietaireID}`
        ); */
        const { data } = response;
        setRaison(data.raison_sociale);
        setIce(data.ice);
        setCni(data.cni);
        setEmail(data.email);
        setPhone(data.phone);
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
        case "phone":
            setPhone(value);
            break;
        case "cni":
            setCni(value);
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
        cni,
        phone,
        email,
        ville,
        adresse,
    };

    try {
       /*  const response = await axios.put(
            `/api/coproprietes/${coproprieteID}`,
            updatedCopropriete
        ); */

        const { data } = response;
        console.log("Updated Fournisseur:", data);

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
                    // Redirection vers la page /copropriete après la fermeture du message
                    window.location.href = "/copropriete";
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
                            <HiUserGroup />
                        </span>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-rows-3 grid-cols-2 gap-x-16">
                                <div>
                                    <label
                                        htmlFor="cni"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        CNI
                                    </label>
                                    <div className="mt-2">
                                        <TextInput
                                            id="cni"
                                            name="cni"
                                            type="text"
                                            value={cni}
                                            onChange={handleInputChange}
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
                                            onChange={handleInputChange}
                                            type="number"
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
                                            onChange={handleInputChange}
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start mt-2 w-1/2 mx-auto col-span-2">
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
                                        Modifier
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
