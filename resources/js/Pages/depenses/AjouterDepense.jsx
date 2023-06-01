import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";

export default function AjouterDepense({ auth }) {
    return (
        <Main_content
            user={auth.user}
            Title={"Nouvelle dépense"}
            Description={"test test test "}
            ClassName="p-0"
        >
            <Head title=" Ajouter dépenses" />
            <form className="p-6 pt-8">
                <div className=" bg-white rounded-20  shadow-md p-6">
                    <div className="mb-4">
                       
                        <div>
                            <div className="flex flex-col gap-5">
                                <div className="">
                                    <label htmlFor="fournissuer" className="font-medium">Fourisseur :</label>
                                    <div className="flex flex-row items-center gap-4 mt-2">
                                        <select
                                            name="fournisseur"
                                            id="fournisseur"
                                            className="w-full h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                        >
                                            <option
                                                disabled
                                                value="Selectionez le fournisseur"
                                            >
                                                Selectionez le fournisseur
                                            </option>
                                            <option value=" ">1</option>
                                            <option value="">2</option>
                                        </select>
                                        <div className="flex flex-row text-gray-400">
                                            {" "}
                                            <div>-</div> <div>ou</div>
                                            <div>-</div>
                                        </div>
                                        <input
                                            type="text"
                                            class="w-full h-10 px-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                            placeholder="Entrer un nom "
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="designation"
                                        className="font-medium"
                                    >
                                        Désignation :
                                    </label>
                                    <select
                                        name="designation"
                                        id="designation"
                                        className="w-full mt-2 h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                    >
                                        <option
                                            disabled
                                            value="Décoration de l'immeuble "
                                        >
                                            Décoration de l'immeuble
                                        </option>
                                        <option value=" "></option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="date"
                                        className="font-medium"
                                    >
                                        Date de paiement :
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full mt-2 h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                        placeholder="Date de la réunion"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="montant"
                                        className="font-medium"
                                    >
                                        {" "}
                                        Montant :
                                    </label>
                                    <input
                                        type="text"
                                        name="montant"
                                        id="montant"
                                        className="w-full mt-2 h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                        placeholder="Montant (DH)"
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
                                        className="w-full mt-2 h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
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
                                    <label
                                        htmlFor="description "
                                        className="font-medium"
                                    >
                                        Description :
                                    </label>
                                    <textarea
                                        id="description"
                                        placeholder="Vous pouvez ajouter plus d'informations içi "
                                        rows="2"
                                        className="block mt-2  p-2.5 w-full text-l text-gray-900  rounded-lg border border-gray-300 focus:ring-primary-color focus:border-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-color dark:focus:border-primary-color h-min"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center ">
                    <button
                        type="submit"
                        className="px-4 py-2 w-40 bg-primary-color  hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color  text-white rounded-md mr-2"
                    >
                        Ajouter
                    </button>
                </div>
            </form>
        </Main_content>
    );
}
