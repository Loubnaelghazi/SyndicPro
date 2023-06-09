import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Main_content from "@/main _content/Main_content";
import { Head } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect } from "react";
export default function PayerDepense({ auth }) {
    const [date_paiement, setDatePaiement] = useState("");
    const [montant, setMontant] = useState("");
    const [mode_paiement, setModePaiement] = useState("");
    const [commentaire, setCommentaire] = useState("");
    const [type, setType] = useState("depense");
    const [file, setFile] = useState(null);
    const url = window.location.href;
    const depense_id = url.substring(url.lastIndexOf("/") + 1);
    const [depense, setDepense] = useState();

    useEffect(() => {
        // Fetch the copropriete data from the server and update the state
        fetchDepensesData();
    }, []);

    const fetchDepensesData = async () => {
        try {
            const response = await axios.get(`/api/depenses/${depense_id}`);
            setDepense(response?.data);
        } catch (error) {
            console.error(error);
        }
    };
    const data= depense !== undefined ? depense : [];
    if (data.length !== 0) {
        console.log(data.montant_restant);
        data.montant_restant = data.montant;
        console.log(data.montant_restant);

    }

    const ajouter = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("date_paiement", date_paiement);
        formData.append("montant", montant);
        formData.append("mode_paiement", mode_paiement);
        formData.append("commentaire", commentaire);
        formData.append("type", type);
        formData.append("depense_id", depense_id);
        formData.append("file", file);
        try {
            const response = await axios.post(`/api/paiements`, formData);
            const data = response.data;
            Swal.fire({
                icon: "success",
                title: "Votre paiement a été ajoutée avec succès !",
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
                window.location.href = "/depenses";
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <Main_content
            user={auth.user}
            Title={`Payer dépense N° ${depense_id}`}
            ClassName="p-10 px-14"
        >
            <Head title={`Payer dépense N° ${depense_id}`} />
            <div>
                <form onSubmit={ajouter}>
                    <div className="flex flex-col gap-3">
                        <div className="space-y-1">
                            <InputLabel htmlFor="date_paiement_partiel">
                                Date de paiement :
                            </InputLabel>
                            <TextInput
                                id="date_paiement_partiel"
                                name="date_paiement_partiel"
                                type="date"
                                value={date_paiement}
                                onChange={(e) =>
                                    setDatePaiement(e.target.value)
                                }
                            />
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="montant_partiel">
                                Montant (DH) :
                            </InputLabel>
                            <TextInput
                                id="montant_partiel"
                                name="montant_partiel"
                                type="number"
                                required
                                placeholder="Montant en (DH)"
                                value={montant}
                                onChange={(e) =>
                                    setMontant(e.target.value)
                                }
                            />
                        </div>

                        <div className="space-y-1">
                            <InputLabel htmlFor="mode_paiement_partiel">
                                Mode de paiement :
                            </InputLabel>
                            <select
                                required
                                className="w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 "
                                name="mode_paiemen_partielt"
                                id="mode_paiement_partiel"
                                value={mode_paiement}
                                onChange={(e) =>
                                    setModePaiement(e.target.value)
                                }
                            >
                                <option
                                    disabled
                                    value="Choisir le mode de paiement"
                                >
                                    Choisir le mode de paiement :
                                </option>
                                <option value="virement">Virement</option>
                                <option value="especes">Espèces</option>
                                <option value="versement">Versement</option>
                                <option value="cheque">Chèque</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="commentaire_partiel">
                                Commentaire :
                            </InputLabel>
                            <textarea
                                className="w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 "
                                name="commentaire_partiel"
                                id="commentaire_partiel"
                                placeholder="Taper votre commentaire içi"
                                value={commentaire}
                                onChange={(e) => setCommentaire(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="justificatif_partiel">
                                Justificatif :
                            </InputLabel>
                            <label htmlFor="dropzone-file">
                            <div
                                className="bg-white w-full cursor-pointer text-gray-500  hover:text-primary-color  hover:border-primary-color p-3  flex flex-col items-center justify-center  rounded-20 border-4 border-dashed border-gray-300"
                                htmlFor="dropzone-file"
                            >
                                <FaFileUpload className="text-2xl" />
                                <div className="text-sm">Déposer</div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                name="image"
                                onChange={handleFileChange}
                            />
                            </div>
                            </label>
                        </div>
                        <div className=" mt-6 flex justify-center ">
                    <PrimaryButton type="submit" className="w-40  py-2 ">
                        Ajouter
                    </PrimaryButton>
                </div>
                    </div>
                </form>
            </div>
        </Main_content>
    );
}
