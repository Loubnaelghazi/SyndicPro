import React from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";


export default function ModifierDepense({ auth }) {
     const [activeSection, setActiveSection] = useState("total");
     const handleSectionChange = (section) => {
         setActiveSection(section);
     };
    return (
        <Main_content
            user={auth.user}
            Title={"Modifier dépense"}
            Description={"test test test "}
            ClassName="p-12"
        >
            <Head title=" Modifier dépenses" />
            <form className="">
                <div className=" ">
                    <div className="">
                        <div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <label
                                        htmlFor="designation"
                                        className="font-medium"
                                    >
                                        Désignation :
                                    </label>
                                    <TextInput
                                        name="designation"
                                        type="text"
                                        id="designation"
                                        className="mb-0"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="description "
                                        className="font-medium"
                                    >
                                        Description :
                                    </label>
                                    <textarea
                                        id="description"
                                        placeholder="Vous pouvez modifier vos informations içi "
                                        rows="3"
                                        className="block  p-2.5 w-full text-l text-gray-900  rounded-lg border border-gray-300 focus:ring-primary-color focus:border-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-color dark:focus:border-primary-color h-min"
                                    ></textarea>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="fournissuer"
                                        className="font-medium"
                                    >
                                        Fourisseur :
                                    </label>
                                    <div className="flex flex-row items-center gap-4">
                                        <select
                                            name="fournisseur"
                                            id="fournisseur"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                        >
                                            <option
                                                disabled
                                                value="Selectionez le fournisseur"
                                            >
                                                Le fournisseur
                                            </option>
                                            <option value=" ">1</option>
                                            <option value="">2</option>
                                        </select>
                                        <div className="flex flex-row text-gray-400">
                                            {" "}
                                            <div>-</div> <div>ou</div>
                                            <div>-</div>
                                        </div>
                                        <TextInput
                                            type="text"
                                            className="mb-0"
                                            placeholder="Modifier le nom içi"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="montant"
                                        className="font-medium"
                                    >
                                        {" "}
                                        Montant :
                                    </label>
                                    <TextInput
                                        type="text"
                                        name="montant"
                                        id="montant"
                                        placeholder="Montant (DH)"
                                        className="mb-0"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="statut"
                                        className="font-medium"
                                    >
                                        {" "}
                                        Statut :{" "}
                                    </label>
                                    <select
                                        name="statut"
                                        id="statut"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                    >
                                        <option disabled value="Statut">
                                            {" "}
                                            Statut :
                                        </option>
                                        <option value="Payée">Payée</option>
                                        <option value="Partiellement payée ">
                                            Partiellement payée
                                        </option>
                                        <option value=" Non payée">
                                            {" "}
                                            Non payée
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="date"
                                        className="font-medium"
                                    >
                                        Date de paiement :
                                    </InputLabel>
                                    <TextInput
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full  h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                        placeholder="Date de la réunion"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex p-10  gap-x-20 justify-center">
                    <button
                        type="button"
                        className={`px-3 py-2 text-md font-medium  ${
                            activeSection === "total"
                                ? "bg-transparent text-primary-color border-[0.5-px] border-b-2  border-primary-color  cursor-pointer "
                                : "bg-transparent text-gray-300  "
                        } rounded-t-md focus:outline-none`}
                        onClick={() => handleSectionChange("total")}
                    >
                        Paiement total
                    </button>
                    <button
                        type="button"
                        className={`px-3 py-2  text-md font-medium ${
                            activeSection === "partiel"
                                ? "bg-transparent text-primary-color border-[0.5-px] border-b-2  border-primary-color  cursor-pointer "
                                : "bg-transparent text-gray-300  "
                        } rounded-t-md focus:outline-none`}
                        onClick={() => handleSectionChange("partiel")}
                    >
                        Paiement partiel
                    </button>
                </div>

                <div
                    className={`${
                        activeSection === "total" ? "block" : "hidden"
                    }`}
                >
                    <div className="flex flex-col gap-3">
                        <div className="space-y-1">
                            <InputLabel htmlFor="date_paiement">
                                Date de paiement :
                            </InputLabel>
                            <TextInput
                                required
                                id="date_paiement"
                                name="date_paiement"
                                type="date"
                            />
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="mode_paiement">
                                Mode de paiement :
                            </InputLabel>
                            <select
                                required
                                className="w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 "
                                name="mode_paiement"
                                id="mode_paiement"
                            >
                                <option
                                    disabled
                                    value="Choisir le mode de paiement"
                                >
                                    Choisir le mode de paiement :
                                </option>
                                <option value="virement">Virement</option>
                                <option value="especes">Espèces </option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="commentaire">
                                Commentaire :
                            </InputLabel>
                            <textarea
                                className="w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 "
                                name="commentaire"
                                id="commentaire"
                                placeholder="Modifier votre commentaire içi"
                            ></textarea>
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="justificatif">
                                Justificatif :
                            </InputLabel>
                            <a className="bg-white w-full cursor-pointer text-gray-500  hover:text-primary-color  hover:border-primary-color p-3  flex flex-col items-center justify-center  rounded-20 border-4 border-dashed border-gray-300">
                                <FaFileUpload className="text-2xl" />
                                <div className="text-sm">Déposer</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className={`${
                        activeSection === "partiel" ? "block" : "hidden"
                    }`}
                >
                    <div className="flex flex-col gap-3">
                        <div className="space-y-1">
                            <InputLabel htmlFor="date_paiement_partiel">
                                Date de paiement :
                            </InputLabel>
                            <TextInput
                                id="date_paiement_partiel"
                                name="date_paiement_partiel"
                                type="date"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="montant_partiel">
                                Montant :
                            </InputLabel>
                            <TextInput
                                id="montant_partiel"
                                name="montant_partiel"
                                type="number"
                                required
                                placeholder="Montant en (DH)"
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
                            >
                                <option
                                    disabled
                                    value="Choisir le mode de paiement"
                                >
                                    Choisir le mode de paiement :
                                </option>
                                <option value="virement">Virement</option>
                                <option value="especes">Espèces </option>
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
                                placeholder="Modifier votre commentaire içi"
                            ></textarea>
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="justificatif_partiel">
                                Justificatif :
                            </InputLabel>
                            <a className="bg-white w-full cursor-pointer text-gray-500  hover:text-primary-color  hover:border-primary-color p-3  flex flex-col items-center justify-center  rounded-20 border-4 border-dashed border-gray-300">
                                <FaFileUpload className="text-2xl" />
                                <div className="text-sm">Déposer</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center ">
                    <PrimaryButton type="submit" className="w-40  py-2 ">
                        Enregistrer
                    </PrimaryButton>
                </div>
            </form>
        </Main_content>
    );
}
