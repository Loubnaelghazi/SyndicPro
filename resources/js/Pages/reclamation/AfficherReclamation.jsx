import Main_content from "@/main _content/Main_content";
import React from "react";
import { useState } from "react";
import { HiPencil, HiUserCircle } from "react-icons/hi2";

export default function AfficherReclamation({ auth }) {
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
                <div className="py-3 pr-10 flex flex-col gap-2 h-min">
                    <div className="text-3xl font-medium h-full">
                        Une fuite d'eau sous l'évier de votre cuisine. L'eau
                        s'accumule et commence à endommager le placard en
                        dessous.
                    </div>
                    <div className=" text-[14px] text-gray-500 font-light h-full">
                        Vous devez d'abord ajouter les proprietaires et les
                        locatairesVous devez d'abord ajouter les proprietaires
                        et les locataires ...Vous devez d'abord ajouter les
                        proprietaires et les locatairesVous devez d'abord
                        ajouter les proprietaires et les locataires ...Vous
                        devez d'abord ajouter les proprietaires et les
                        locatairesVous devez d'abord ajouter les proprietaires
                        et les locataires ...Vous devez d'abord ajouter les
                        proprietaires et les locatairesVous devez d'abord
                        ajouter les proprietaires et les locataires ...
                    </div>
                    <div className="flex flex-row gap-10 items-center mt-4">
                        <div className="flex flex-row gap-1 items-center">
                            <div className="text-3xl text-gray-400">
                                <HiUserCircle />
                            </div>
                            <div>
                                <div className="font-semibold text-sm text-gray-500">
                                    Mohamed El Mrabet
                                </div>
                                <div className="font-light text-xs text-gray-500">
                                    0612851293
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-gray-500 flex flex-row gap-5 items-center">
                            <div className="">
                                <div>
                                    Lot N°:{" "}
                                    <span className="ml-4  font-light">5</span>
                                </div>
                                <div>
                                    Etage:{" "}
                                    <span className="ml-4 font-light">3</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    Batiment:{" "}
                                    <span className="ml-4 font-light">A</span>
                                </div>
                                <div>
                                    Porte:{" "}
                                    <span className="ml-4 font-light">28</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 mt-7  align-top">
                        <div className=" -mt-[10px] items-start align-top font-medium rounded-l-lg bg-white w-max text-gray-500">
                            <span>Priorité:</span>
                        </div>
                        <div className="w-1/2 flex flex-col gap-2 justify-start align-top">
                            <div className=" flex items-center">
                                <input
                                    id="small-range"
                                    type="range"
                                    value={value}
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
                    </div>
                    <div>
                        <div className="w-full flex justify-between mt-2 items-center">
                            <div>
                                    <div className="bg-orange-100 text-sm font-medium text-orange-500 p-1 px-3 rounded-lg">
                                        En attente de traitement
                                    </div>
                            </div>
                            <a href="/reclamations/modifier">
                                <div className="w-min p-0.5 px-5 border-[2.5px] border-blue-200 flex flex-row items-center gap-3 rounded-xl text-blue-500 justify-start hover:bg-blue-500 hover:text-white">
                                    <div className="font-medium">Modifier</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Main_content>
    );
}
