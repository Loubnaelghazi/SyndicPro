import React from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";


export default function ModifierDepense({ auth }) {
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
                <div className="mt-4 flex justify-center ">
                    <PrimaryButton type="submit" className="w-40  py-2 ">
                        Enregistrer
                    </PrimaryButton>
                </div>
            </form>
        </Main_content>
    );
}
