import Main_content from "@/main _content/Main_content";
import React from "react";
import { useState } from "react";
import { HiPencil, HiUserCircle } from "react-icons/hi2";
import Datepicker from "react-tailwindcss-datepicker";

export default function ModifierReclamation({ auth }) {
    const [valueR, setValueR] = useState(0);
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    const handleChange = (event) => {
        setValueR(event.target.value);
    };
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    const handleValueChange2 = (newValue) => {
        console.log("newValue:", newValue);
        setValue2(newValue);
    };

    return (
        <Main_content
            user={auth.user}
            Title={"Reclamation N°"}
            ClassName="p-3 h-min"
        >
            <div className="flex flex-row gap-2 rounded-40 h-min">
                <div className=" grid grid-rows-3 gap-2 h-full rounded-40 p-3 ">
                    <div className=" w-56 h-32">
                        <img
                            src="https://i.pinimg.com/474x/60/c5/c0/60c5c07e4ed74dcd1d874cc36ffbb32e.jpg"
                            alt=""
                            className=" rounded-t-xl object-cover object-center w-full h-full "
                        />
                    </div>
                    <div className=" w-56 h-32 ">
                        <img
                            src="https://i.pinimg.com/474x/f3/2e/88/f32e88f7cc3e86a8f3c0e4e33ba49b00.jpg"
                            alt=""
                            className=" object-cover object-center w-full h-full "
                        />
                    </div>
                    <div className=" w-56 h-32 ">
                        <img
                            src="https://i.pinimg.com/474x/c8/24/23/c824235f4e93183b13f7482e521a9226.jpg"
                            alt=""
                            className=" rounded-b-xl object-cover object-center w-full h-full "
                        />
                    </div>
                </div>
                <div className="py-3 w-full pr-10 flex flex-col gap-2 h-min">
                    <textarea
                        id="message"
                        defaultValue="Une fuite d'eau sous l'évier de votre cuisine. L'eau s'accumule et commence à endommager le placard en dessous."
                        rows="3"
                        className="block font-semibold p-2.5 w-full text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-min"
                        placeholder="Write your thoughts here..."
                    ></textarea>
                    <textarea
                        id="message"
                        defaultValue="Vous devez d'abord ajouter les proprietaires et leslocatairesVous devez d'abord ajouter les proprietaireset les locataires ...Vous devez d'abord ajouter lesproprietaires et les locatairesVous devez d'abordajouter les proprietaires et les locataires ...Vous devez d'abord ajouter les proprietaires et les locatairesVous devez d'abord ajouter les proprietai et les locataires ...Vous devez d'abord ajouter le proprietaires et les locatairesVous devez d'abordjouter les proprietaires et les locataires ..."
                        rows="6"
                        className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-min"
                    />
                    <div className="flex flex-row items-center gap-4 ">
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-color dark:focus:border-primary-color">
                            <option selected>
                                Sélectionnez le propriétaire
                            </option>
                        </select>
                        <div className="flex flex-row text-gray-400">
                            {" "}
                            <div>-</div> <div>ou</div>
                            <div>-</div>
                        </div>
                        <input
                            type="text"
                            className="bg-gray-50 whitespace-normal w-1/2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                            placeholder="Entrer un nom (si le reclameur n'est pas un propriétaire)"
                            required
                        ></input>
                    </div>
                    <div className="flex flex-row justify-between gap-2">
                        <div className="w-1/2">
                            <Datepicker
                                placeholder={"Date de reclamation"}
                                asSingle={true}
                                primaryColor={"violet"}
                                value={value}
                                onChange={handleValueChange}
                                useRange={false}
                                showShortcuts={true}
                                i18n={"fr"}
                                configs={{
                                    shortcuts: {
                                        today: "Aujourd'hui",
                                    },
                                    footer: {},
                                }}
                            />
                        </div>
                        <div className="w-1/2">
                            <Datepicker
                                placeholder={"Date de résolution (optionnel)"}
                                asSingle={true}
                                primaryColor={"violet"}
                                value={value2}
                                onChange={handleValueChange2}
                                useRange={false}
                            />
                        </div>
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
                                    defaultValue={valueR}
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
                                Enregistrer
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
