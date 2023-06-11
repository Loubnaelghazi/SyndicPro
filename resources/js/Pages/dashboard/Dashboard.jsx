import React from "react";
import Nav_bar from "../../layout_jsx/nav-bar/Nav_bar";
import Header from "../../layout_jsx/header/Header";
import Footer from "../../layout_jsx/footer/Footer";
import {
    HiArrowDownLeft,
    HiArrowUpRight,
    HiCheck,
    HiCheckCircle,
    HiClipboard,
    HiClock,
    HiCurrencyDollar,
    HiKey,
    HiPlus,
    HiPlusCircle,
    HiUserGroup,
    HiUsers,
    HiWallet,
    HiWrenchScrewdriver,
    HiXCircle,
} from "react-icons/hi2";
import { PieChart } from "@/Components/PieChart";
import { Head } from "@inertiajs/react";
import PieChart1 from "../../ressources/PieChart1.svg";
import PieChart2 from "../../ressources/PieChart2.svg";
import MonthsChart from "../../ressources/MonthsChart.svg";
import Coprop from "../../ressources/Coprop.svg";
import { HiClipboardCheck, HiExclamation } from "react-icons/hi";

export default function Dashboard({ auth }) {
    return (
        <div>
            <Head title="Tableau de bord" />
            <Nav_bar />
            <div className="flex-grow mx-6 lg:ml-72 transition-transform duration-700 ">
                <Header user={auth.user} />
                <div className="flex flex-row justify-between bg-primary-color pr-10 p-4 shadow-csh rounded-20 mt-4">
                    <div className="flex justify-center items-center    ">
                        <div>
                            <div className="font-meduim text-white text-2xl ">
                                Salut{" "}
                                <span className="font-semibold">
                                    {auth.user.name}
                                </span>
                            </div>
                            <div className="font-meduim text-white text-2xl">
                                Content de te revoir
                            </div>
                            <div className="font-light text-white text-md">
                                Profitez d'une bonne gestion de votre
                                copropriete, cotisations, depenses...
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={Coprop} alt="" className="w-36" />
                    </div>
                </div>

                <div className=" bg-secondary-color rounded-20 space-y-4 mt-4 shadow-csh p-3">
                    <div className="flex flex-row justify-between items-center gap-4">
                        <div
                            className="bg-white
                        w-full p-2 flex flex-row items-center first-line gap-6 rounded-xl shadow-csh justify-between pr-4"
                        >
                            <div className="flex flex-row gap-5">
                                <a className="bg-third-color  rounded-xl p-4 text-primary-color text-4xl">
                                    <HiKey />
                                </a>
                                <div className="flex flex-col gap-1">
                                    <div className="text-4xl font-semibold">
                                        33
                                    </div>
                                    <div className="text-gray-400 font-light text-sm text-md">
                                        Total des lots
                                    </div>
                                </div>
                            </div>
                            <a
                                className="bg-third-color text-primary-color p-2 w-min h-min rounded-20"
                                href=""
                            >
                                <HiPlus />
                            </a>
                        </div>
                        <div
                            className="bg-white
                        w-full p-2 flex flex-row items-center first-line gap-6 rounded-xl shadow-csh justify-between pr-4"
                        >
                            <div className="flex flex-row gap-5">
                                <a className="bg-third-color  rounded-xl p-4 text-primary-color text-4xl">
                                    <HiUserGroup />
                                </a>
                                <div className="flex flex-col gap-1">
                                    <div className="text-4xl font-semibold">
                                        209
                                    </div>
                                    <div className="text-gray-400  font-light text-xs text-md">
                                        Total des proprietaires
                                    </div>
                                </div>
                            </div>
                            <a
                                className="bg-third-color text-primary-color p-2 w-min h-min rounded-20"
                                href=""
                            >
                                <HiPlus />
                            </a>
                        </div>
                        <div
                            className="bg-white
                        w-full p-2 flex flex-row items-center first-line gap-6 rounded-xl shadow-csh justify-between pr-4"
                        >
                            <div className="flex flex-row gap-5">
                                <a className="bg-third-color  rounded-xl p-4 text-primary-color text-4xl">
                                    <HiUsers />
                                </a>
                                <div className="flex flex-col gap-1">
                                    <div className="text-4xl font-semibold">
                                        54
                                    </div>
                                    <div className="text-gray-400 font-light text-sm">
                                        Total des locataires
                                    </div>
                                </div>
                            </div>
                            <a
                                className="bg-third-color text-primary-color p-2 w-min h-min rounded-20"
                                href=""
                            >
                                <HiPlus />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row rounded-20 gap-4 ">
                        <div className="bg-white rounded-20 shadow-csh p-2 w-full">
                            <div className="text-sm p-1 text-gray-400">
                                Avril 2023
                            </div>
                            <div className="flex flex-row ">
                                <div className="flex flex-col gap-2 w-1/2">
                                    <div
                                        className="border
                        w-full p-2 flex flex-row items-center first-line gap-6 rounded-xl  justify-between pr-4"
                                    >
                                        <div className="flex flex-row gap-5">
                                            <a className="bg-third-color flex items-center  rounded-xl p-4 text-green-500 text-4xl">
                                                <HiCheckCircle />
                                            </a>
                                            <div className="flex flex-col gap-1">
                                                <div className="text-4xl font-semibold">
                                                    133/200
                                                </div>
                                                <div className="text-gray-400 font-light text-xs">
                                                    Total des cotisations payee
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="border
                        w-full p-2 flex flex-row items-center first-line gap-6 rounded-xl  justify-between pr-4"
                                    >
                                        <div className="flex flex-row gap-5">
                                            <a className="bg-third-color flex items-center  rounded-xl p-4 text-red-600 text-4xl">
                                                <HiXCircle />
                                            </a>
                                            <div className="flex flex-col gap-1">
                                                <div className="text-4xl font-semibold">
                                                    67/200
                                                </div>
                                                <div className="text-gray-400 font-light text-xs">
                                                    Total des cotisations non
                                                    payee
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mx-auto">
                                    <img src={PieChart1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-20 shadow-csh p-2 w-full">
                            <div className="text-sm p-1 text-gray-400">
                                Avril 2023
                            </div>
                            <div className="flex flex-row ">
                                <div className="flex flex-col gap-2">
                                    <div
                                        className="border
                        w-full p-2 flex flex-row items-center first-line gap-6 rounded-xl  justify-between pr-4"
                                    >
                                        <div className="flex flex-row gap-5">
                                            <a className="bg-third-color  rounded-xl p-4 text-primary-color text-4xl">
                                                <HiWallet />
                                            </a>
                                            <div className="flex flex-col gap-1">
                                                <div className="text-4xl font-semibold">
                                                    18
                                                </div>
                                                <div className="text-gray-400 font-light text-md">
                                                    Total des depenses
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-2 w-min">
                                        <div
                                            className="border
                        w-1/2 p-2 flex flex-row items-center first-line gap-6 rounded-xl  justify-between "
                                        >
                                            <div className="flex flex-row gap-5">
                                                <a className="bg-third-color  rounded-xl p-2 flex items-center justify-center text-green-500 text-2xl">
                                                    <HiCheckCircle />
                                                </a>
                                                <div className="flex flex-col gap-1">
                                                    <div className="text-2xl font-semibold">
                                                        11
                                                    </div>
                                                    <div className="text-gray-400 font-light text-xs">
                                                        Payees
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="border
                        w-1/2 p-2 flex flex-row items-center first-line gap-6 rounded-xl  justify-between "
                                        >
                                            <div className="flex flex-row gap-5 ">
                                                <a className="bg-third-color  rounded-xl p-2 flex items-center justify-center text-red-500 text-2xl">
                                                    <HiXCircle />
                                                </a>
                                                <div className="flex flex-col gap-1">
                                                    <div className="text-2xl font-semibold">
                                                        7
                                                    </div>
                                                    <div className="text-gray-400 font-light text-xs">
                                                        Non payees
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mx-auto">
                                    <img src={PieChart2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 w-full">
                        <a className="flex flex-row items-center gap-4 px-6 p-2 text-primary-color bg-white rounded-20 shadow-csh w-full hover:text-white hover:bg-primary-color">
                            <div className="text-4xl">
                                <HiCurrencyDollar />
                            </div>
                            <div className="font-semibold">
                                Consulter les cotisations
                            </div>
                        </a>
                        <a className="flex flex-row items-center gap-4 px-6 p-2 text-primary-color bg-white rounded-20 shadow-csh w-full hover:text-white hover:bg-primary-color">
                            <div className="text-4xl">
                                <HiWallet />
                            </div>
                            <div className="font-semibold">
                                Consulter les dépenses
                            </div>
                        </a>
                        <a className="flex flex-row items-center gap-4 px-6 p-2 text-primary-color bg-white rounded-20 shadow-csh w-full hover:text-white hover:bg-primary-color">
                            <div className="text-4xl">
                                <HiPlusCircle />
                            </div>
                            <div className="font-semibold">
                                Ajouter une dépense
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-row gap-4 justify-between">
                        <div className="bg-white rounded-20 shadow-csh p-2 w-full">
                            <div className="flex flex-row gap-6 h-full items-center">
                                <div className="flex flex-col justify-between shadow-lg bg-white rounded-20 items-center h-full">
                                    <div className="flex justify-center  bg-primary-color text-white  rounded-t-xl w-full ">
                                        <div className="uppercase">Juin</div>
                                    </div>
                                    <div className="px-2 pb-1 h-full flex flex-col justify-around">
                                        <div className="text-primary-color p-2 font-semibold text-3xl flex justify-center ">
                                            30
                                        </div>
                                        <div className="text-darkly font-medium text-md flex justify-center">
                                            Mercredi
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 font-light">
                                        Prochain reunion
                                    </div>
                                    <div className="text-xl font-semibold">
                                        AG
                                    </div>
                                    <div className="text-xl font-semibold">
                                        Assemblée générale 33
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="bg-white rounded-20 shadow-csh p-2 w-full">
                            <div
                                className="h-full
                    flex flex-row items-center first-line gap-6 rounded-xl  justify-between  w-full"
                            >
                                <div className="flex flex-row gap-5 h-full">
                                    <a className="bg-third-color flex items-center  rounded-xl p-4 px-2 text-primary-color text-4xl">
                                        <HiExclamation />
                                    </a>
                                    <div className="flex flex-col gap-1 justify-center">
                                        <div className="text-5xl font-semibold">
                                            25
                                        </div>
                                        <div className="text-gray-400 text-xl font-light">
                                            Total des réclamations
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full">
                            <div className="bg-white rounded-20 shadow-csh flex flex-row gap-2 p-2 w-full h-min">
                                {" "}
                                <a className="bg-third-color w-min flex items-center  rounded-xl p-4 px-2 text-primary-color text-2xl">
                                    <HiClock />
                                </a>
                                <div className="flex flex-col gap-1 justify-center">
                                    <div className="text-2xl font-semibold">
                                        25
                                    </div>
                                    <div className="text-gray-400 font-light text-xs">
                                        En attente
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-20 shadow-csh flex flex-row gap-2 p-2 w-full h-min">
                                {" "}
                                <a className="bg-third-color flex items-center  rounded-xl p-4 px-2 text-primary-color text-2xl">
                                    <HiCheckCircle />
                                </a>
                                <div className="flex flex-col gap-1 justify-center">
                                    <div className="text-2xl font-semibold">
                                        25
                                    </div>
                                    <div className="text-gray-400 font-light text-xs">
                                        Resolues
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-20 shadow-csh flex flex-row gap-2 p-2 w-full h-min">
                                {" "}
                                <a className="bg-third-color flex items-center  rounded-xl p-4 px-2 text-primary-color text-2xl">
                                    <HiWrenchScrewdriver />
                                </a>
                                <div className="flex flex-col gap-1 justify-center">
                                    <div className="text-2xl font-semibold">
                                        25
                                    </div>
                                    <div className="text-gray-400 font-light text-xs">
                                        En traitement
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-20 shadow-csh flex flex-row gap-2 p-2 w-full h-min">
                                {" "}
                                <a className="bg-third-color flex items-center  rounded-xl p-4 px-2 text-primary-color text-2xl">
                                    <HiXCircle />
                                </a>
                                <div className="flex flex-col gap-1 justify-center">
                                    <div className="text-2xl font-semibold">
                                        25
                                    </div>
                                    <div className="text-gray-400 font-light text-xs">
                                        Feremees
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row gap-4 w-full">
                        <a className="flex flex-row items-center gap-4 px-6 p-2 text-primary-color bg-white rounded-20 shadow-csh w-full hover:text-white hover:bg-primary-color">
                            <div className="text-4xl">
                                <HiClipboardCheck />
                            </div>
                            <div className="font-semibold">
                                Consulter les réunions
                            </div>
                        </a>
                        <a className="flex flex-row items-center gap-4 px-6 p-2 text-primary-color bg-white rounded-20 shadow-csh w-full hover:text-white hover:bg-primary-color">
                            <div className="text-4xl">
                                <HiExclamation />
                            </div>
                            <div className="font-semibold">
                                Consulter les réclamations
                            </div>
                        </a>
                        <a className="flex flex-row items-center gap-4 px-6 p-2 text-primary-color bg-white rounded-20 shadow-csh w-full hover:text-white hover:bg-primary-color">
                            <div className="text-4xl">
                                <HiPlusCircle />
                            </div>
                            <div className="font-semibold">
                                Ajouter une réclamations
                            </div>
                        </a>
                    </div>

                    <div className="bg-white rounded-20 shadow-csh p-2 w-full">
                        <div className="text-sm p-1 text-gray-400">2022</div>
                        <div className="flex flex-row gap-6">
                            <div className="flex flex-col gap-2 w-1/2">
                                <div
                                    className="border
                        p-2 flex w-full flex-row items-center first-line gap-6 rounded-xl  justify-between pr-4 "
                                >
                                    <div className="flex flex-row gap-5 ">
                                        <a className="bg-third-color flex items-center  rounded-xl p-4 text-primary-color text-4xl">
                                            <HiArrowDownLeft />
                                        </a>
                                        <div className="flex flex-col gap-1">
                                            <div className="text-4xl font-semibold">
                                                54 000.00 DH
                                            </div>
                                            <div className="text-gray-400 font-light text-xs">
                                                Débit
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="border
                        p-2 flex flex-row items-center first-line gap-6 rounded-xl  justify-between pr-4 w-full"
                                >
                                    <div className="flex flex-row gap-5">
                                        <a className="bg-third-color flex items-center  rounded-xl p-4 text-primary-color text-4xl">
                                            <HiArrowUpRight />
                                        </a>
                                        <div className="flex flex-col gap-1">
                                            <div className="text-4xl font-semibold">
                                                36 000.23 DH
                                            </div>
                                            <div className="text-gray-400 font-light text-xs">
                                                Crédit
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center mx-auto">
                                <img src={MonthsChart} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary-color text-center rounded-20 shadow-csh p-1 text-white text-lg w-full">
                        Solde : <span className="font-light">67 000.32 DH</span>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    );
}
