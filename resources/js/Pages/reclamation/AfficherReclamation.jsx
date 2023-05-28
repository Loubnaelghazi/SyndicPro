import Main_content from "@/main _content/Main_content";
import React from "react";
import { HiUserCircle } from "react-icons/hi2";

export default function AfficherReclamation({ auth }) {
    return (
        <Main_content user={auth.user} Title={"Reclamation N°"} ClassName="p-3">
            <div className="flex flex-row gap-8 rounded-40 h-full">
                <div className=" flex flex-col gap-2">
                    <div className=" w-56 h-32 ">
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
                <div className="py-3">
                    <div className="text-4xl font-medium">
                        Une fuite d'eau sous l'évier de votre cuisine. L'eau
                        s'accumule et commence à endommager le placard en
                        dessous.
                    </div>
                    <div className=" text-base text-gray-500 mt-3 font-light">
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
                    <div className="flex flex-row ">
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
                </div>
            </div>
        </Main_content>
    );
}
