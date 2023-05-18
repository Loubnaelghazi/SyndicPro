import React from "react";
import Main_content from "@/main _content/Main_content";
import {HiBuildingOffice} from "react-icons/hi2"
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

const AddCopopriete = ({auth}) => {
    return (
        <>
            <Main_content user={auth.user}>
                <div>
                    {/* ************************************************************************** */}
                    <Head title="Ajouter Copoprietés" />

                    <div>
                        <span className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                            <HiBuildingOffice />
                        </span>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-x-16 ">
                                <div>
                                    <label
                                        htmlFor="nomCop"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Nom
                                    </label>
                                    <div className="mt-2">
                                        <TextInput
                                            id="nomCop"
                                            name="nomcop"
                                            type="text"
                                            autoComplete="nomCop"
                                            //    value={data.nomCop}

                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="adresse"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Adresse
                                        </label>
                                        <div className="mt-2">
                                            <TextInput
                                                id="adresse"
                                                name="adresse"
                                                type="text"
                                                required
                                                //    value={data.adresse}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="type"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Type
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <select
                                                id="type"
                                                name="types"
                                                type="password"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                            >
                                                <option value="" selected>
                                                    Veuillez choisir un type
                                                </option>
                                                <option
                                                    value="immeuble"
                                                    id="immeuble"
                                                >
                                                    Immeuble
                                                </option>
                                                <option
                                                    value="villa"
                                                    id="villa"
                                                >
                                                    Villa
                                                </option>
                                                <option
                                                    value="autre"
                                                    id="autre"
                                                >
                                                    Autre
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
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
                                            //    value={data.ville}
                                            autoComplete="current-ville"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="code_postale "
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Code Postale
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <TextInput
                                                id="code_postale"
                                                name="code_postale"
                                                //    value={data.code_postale}

                                                type="number"
                                                maxLength="5"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="balance"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Balance(DH)
                                        </label>
                                        <div className="mt-2">
                                            <TextInput
                                                id="balance"
                                                name="balance"
                                                type="number"
                                                //    value={data.balance}

                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row justify-center">
                                <PrimaryButton className="w-40  py-2 ">
                                    Ajouter
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    {/* *********************************************** */}
                </div>
            </Main_content>
        </>
    );
};

export default AddCopopriete;
