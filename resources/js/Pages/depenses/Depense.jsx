import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import AddButton from "@/Components/Buttons/AddButton";
import { TbSearch } from "react-icons/tb";





export default function Depense({auth}) {
  return (
      <Main_content user={auth.user} Title={"Les dépenses"} ClassName={"p-0 "}>
          <Head title="Dépenses" />
          <div className="mx-auto container bg-gray-100 dark:bg-gray-700  rounded-20 grid grid-cols-4 space-x-3 ">
              <div className="col-span-3 px-5 py-3">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded overflow-x-auto">
                      <table className="min-w-full ">
                          <thead>
                              <tr className="">
                                  <th
                                      scope="col"
                                      className="px-2 py-4 pb-6 pl-6 text-left text-xs font-medium text-purple-500 "
                                  >
                                      Désignation
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-2 py-4 pb-6 text-left text-xs font-medium text-purple-500 "
                                  >
                                      Fournisseur
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-2 py-4 pb-6 text-left text-xs font-medium text-purple-500 "
                                  >
                                      Montant (DH)
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-2 py-4 pb-6 text-left text-xs font-medium text-purple-500 "
                                  >
                                      Date de paiement
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-2 py-4 pb-6 text-left text-xs font-medium text-purple-500 "
                                  >
                                      Statut
                                  </th>
                              </tr>
                          </thead>
                          <tbody className="">
                              <tr className=" appearance-none bg-white dark:hover:bg-gray-700 ">
                                  <td className="px-1 pl-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200 rounded">
                                      lubna
                                  </td>
                                  <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                                      0612960535
                                  </td>
                                  <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                                      1000
                                  </td>
                                  <td className="px-1 py-4 whitespace-nowrap text-left text-sm text-gray-600 dark:text-gray-200">
                                      808098765
                                  </td>
                                  <td className="px-2 py-4 whitespace-nowrap text-left text-sm text-gray-600 dark:text-gray-200 ">
                                      3
                                  </td>
                              </tr>
                              <div className="my-2 text-transparent bg-transparent border-none"></div>
                          </tbody>
                      </table>
                      <div className="bg-primary-color rounded w-full  ">
                          <div className="  flex items-center justify-center">
                              <span className="text-white   ">
                                  Total des dépenses :{" "}
                              </span>
                              <span className=" ml-2 text-white ">
                                  80 00(DH)
                              </span>{" "}
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-span-1  pt-5  pb-10  ">
                  <div className="flex flex-col dark:bg-gray-700 rounded-20 space-y-3  ">
                      <div className="">
                          <AddButton ClassName="m-0 ">
                              Ajouter une dépense
                          </AddButton>
                      </div>
                      <div className="flex  flex-col  bg-white rounded-20 mr-5 p-4">
                          <div className="flex flex-col  ">
                              <label
                                  htmlFor="search"
                                  className=" mt-2 font-medium text-t-color "
                              >
                                  Rechercher :
                              </label>
                              <div className="relative">
                                  <input
                                      type="search"
                                      id="search"
                                      name="search"
                                      placeholder="Entrer la désignation :"
                                      className="w-full pl-2 pr-8 py-1.5 block rounded-md mb-4 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                  />
                                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 mb-4 ">
                                      <TbSearch className="h-4 w-4 text-gray-400" />
                                  </span>
                              </div>
                          </div>
                          <div className="flex flex-col  ">
                              <label
                                  htmlFor="fournisseur"
                                  className="font-medium text-t-color"
                              >
                                  Fournisseur :
                              </label>
                              <select
                                  name="fournisseur"
                                  id="fournisseur"
                                  className=" block w-full rounded-md mb-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                              >
                                  <option value=""> hey </option>{" "}
                                  <option value=""> hey </option>{" "}
                              </select>
                          </div>
                          <div className="flex flex-col  ">
                              <label
                                  htmlFor="annee"
                                  className="text-t-color font-medium"
                              >
                                  Année :
                              </label>
                              <select
                                  name="annee"
                                  id="annee"
                                  className="block w-full rounded-md mb-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                              >
                                  <option value="">hey </option>
                              </select>
                          </div>
                          <div className="flex flex-col   ">
                              <label htmlFor="mois">Mois :</label>
                              <select
                                  name="mois"
                                  id="mois"
                                  className="mb-4 block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                              >
                                  <option value=""> hey</option>
                              </select>
                          </div>
                      </div>
                      <div className="text-transparent bg-transparent border-none "></div>
                      <div className="bg-white rounded-20  mr-5   ">
                          <div className="flex flex-col m-3 space-y-3 ">
                              <div>
                                  <input
                                      type="radio"
                                      name="options"
                                      id="toutes"
                                      value="toutes"
                                      className="  form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                  />
                                  <label htmlFor="toutes" className="ml-4">
                                      Toutes
                                  </label>
                              </div>
                              <div>
                                  <input
                                      type="radio"
                                      name="options"
                                      id="payees"
                                      value="payees"
                                      className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                  />
                                  <label htmlFor="payees" className="ml-4">
                                      Payées
                                  </label>
                              </div>
                              <div>
                                  <input
                                      type="radio"
                                      name="options"
                                      id="part-payees"
                                      value="part-payees"
                                      className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                  />
                                  <label htmlFor="part-payees" className="ml-4">
                                      Partiellement payées
                                  </label>
                              </div>
                              <div>
                                  <input
                                      type="radio"
                                      name="options"
                                      id="non-payees"
                                      value="non-payees"
                                      className="form-radio h-4 w-4 text-purple-600 border-purple-600 rounded-full focus:ring-0 focus:ring-offset-0 focus:ring-opacity-0"
                                  />
                                  <label htmlFor="non-payees" className="ml-4">
                                      Non payées
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Main_content>
  );
}
