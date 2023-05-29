import Main_content from "@/main _content/Main_content";
import React from "react";
import { useState } from "react";
import { HiPencil, HiPhoto, HiUserCircle } from "react-icons/hi2";

export default function AjouterReclamation({ auth }) {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Main_content
            user={auth.user}
            Title={"Reclamation N°"}
            ClassName="p-3 h-min"
        >
            <div className="flex flex-row gap-8 rounded-40 h-min">
                <div className=" grid grid-rows-3 gap-2 h-full rounded-40 p-3 border-solid border-gray-200 border-[0.5px]">
                    <div className=" w-56 h-32 flex items-center justify-center">
                            <label
                                for="dropzone-file"
                                className="flex p-2 h-full w-full flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center text-4xl text-gray-700 ">
                                    <HiPhoto/>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            cliquez pour télécharger
                                        </span>{" "}
                                        
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG (MAX. 3mb)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <div className=" w-56 h-32 flex items-center justify-center">
                            <label
                                for="dropzone-file"
                                className="flex p-2 h-full w-full flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center text-4xl text-gray-700 ">
                                    <HiPhoto/>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            cliquez pour télécharger
                                        </span>{" "}
                                        
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG (MAX. 3mb)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <div className=" w-56 h-32 flex items-center justify-center">
                            <label
                                for="dropzone-file"
                                className="flex p-2 h-full w-full flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center text-4xl text-gray-700 ">
                                    <HiPhoto/>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            cliquez pour télécharger
                                        </span>{" "}
                                        
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG (MAX. 3mb)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </div>
                </div>
                <div className="py-3 w-full pr-10 flex flex-col gap-2 h-min">
                    <textarea
                        id="message"
                        placeholder="Titre de la reclamtion"
                        rows="2"
                        className="block font-semibold p-2.5 w-full text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-min"
                    ></textarea>
                    <textarea
                        id="message"
                        placeholder="Description de la reclamation ..."
                        rows="6"
                        className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-min"
                    />
                    <div className="flex flex-row gap-10 items-center mt-4">
                        <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>
                                Sélectionnez un propriétaire
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-row gap-10 mt-7 justify-between items-start">
                        <div className=" -mt-[10px] items-start align-top font-medium rounded-l-lg bg-white w-max text-gray-500">
                            <span>Priorité:</span>
                        </div>
                        <div className="w-1/2 flex flex-col gap-2  justify-start align-top">
                            <div className=" flex items-center">
                                <input
                                    id="small-range"
                                    type="range"
                                    defaultValue={value}
                                    min="0"
                                    max="4"
                                    step="1"
                                    className="h-1 w-full accent-primary-color bg-gray-100 rounded-lg appearance-none cursor-pointer  range-sm range range-warning ring-primary-color focus:ring-primary-color "
                                    onChange={handleChange}
                                    style={{
                                        "--thumb-color": "green",
                                        "--thumb-size": "16px",
                                    }}
                                />
                            </div>
                            <div className="flex flex-row px-2 text-xs text-gray-400 justify-between">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                            </div>
                        </div>
                        <a href="">
                            <button className="w-min p-0.5 px-5 border-[2.5px] border-blue-200 flex flex-row items-center gap-3 rounded-xl text-blue-500 justify-start hover:bg-blue-500 hover:text-white">
                                Ajouter
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
