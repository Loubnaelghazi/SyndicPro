import React from "react";
import Nav_bar from "../../layout_jsx/nav-bar/Nav_bar";
import Header from "../../layout_jsx/header/Header";
import Footer from "../../layout_jsx/footer/Footer";
import {
    HiArrowDownLeft,
    HiCheckCircle,
    HiCurrencyDollar,
    HiKey,
    HiPlus,
    HiPlusCircle,
    HiUserGroup,
    HiUsers,
    HiWallet,
    HiXCircle,
} from "react-icons/hi2";

export default function Dashboard({ auth }) {
    return (
        <div>
            <Nav_bar />
            <div className="flex-grow mx-6 lg:ml-72 transition-transform duration-700 ">
                <Header user={auth.user} />
                <div className="bg-primary-color py-6 px-4 shadow-csh rounded-20 mt-4">
                    <div className="font-meduim text-white text-2xl ">
                        Salut{" "}
                        <span className="font-semibold">{auth.user.name}</span>
                    </div>
                    <div className="font-meduim text-white text-2xl">
                        Content de te revoir
                    </div>
                    <div className="font-light text-white text-md">
                        Profitez d'une bonne gestion de votre copropriete,
                        cotisations, depenses...
                    </div>
                </div>

                <div className=" bg-white rounded-20 space-y-4 mt-4 shadow-csh p-3">
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
                                                    54
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
                                                    54
                                                </div>
                                                <div className="text-gray-400 font-light text-xs">
                                                    Total des cotisations non
                                                    payee
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-center CHART">
                                        Chart
                                    </div>
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
                                                    54
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
                                                        54
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
                                            <div className="flex flex-row gap-5">
                                                <a className="bg-third-color  rounded-xl p-2 flex items-center justify-center text-red-500 text-2xl">
                                                    <HiXCircle />
                                                </a>
                                                <div className="flex flex-col gap-1">
                                                    <div className="text-2xl font-semibold">
                                                        54
                                                    </div>
                                                    <div className="text-gray-400 font-light text-xs">
                                                        Non payees
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-center CHART">
                                        Chart
                                    </div>
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
                                Consulter les cotisations
                            </div>
                        </a>
                        <a className="flex flex-row items-center gap-4 px-6 p-2 text-primary-color bg-white rounded-20 shadow-csh w-full hover:text-white hover:bg-primary-color">
                            <div className="text-4xl">
                                <HiPlusCircle />
                            </div>
                            <div className="font-semibold">
                                Consulter les cotisations
                            </div>
                        </a>
                    </div>
                    <div className="bg-white rounded-20 shadow-csh p-2 w-full">
                        <div className="text-sm p-1 text-gray-400">2023</div>
                        <div className="flex flex-row ">
                            <div className="flex flex-col gap-2 w-1/2">
                                <div
                                    className="border
                        p-2 flex flex-row items-center first-line gap-6 rounded-xl  justify-between pr-4 w-1/2"
                                >
                                    <div className="flex flex-row gap-5">
                                        <a className="bg-third-color flex items-center  rounded-xl p-4 text-green-500 text-4xl">
                                            <HiCheckCircle />
                                        </a>
                                        <div className="flex flex-col gap-1">
                                            <div className="text-4xl font-semibold">
                                                54
                                            </div>
                                            <div className="text-gray-400 font-light text-xs">
                                                Debit
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="border
                        p-2 flex flex-row items-center first-line gap-6 rounded-xl  justify-between pr-4 w-1/2"
                                >
                                    <div className="flex flex-row gap-5">
                                        <a className="bg-third-color flex items-center  rounded-xl p-4 text-red-600 text-4xl">
                                            <HiXCircle />
                                        </a>
                                        <div className="flex flex-col gap-1">
                                            <div className="text-4xl font-semibold">
                                                54
                                            </div>
                                            <div className="text-gray-400 font-light text-xs">
                                                Credit
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-center CHART">
                                    Chart
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary-color text-center rounded-20 shadow-csh p-1 text-white text-lg w-full">
                        Solde : <span className="font-light">67 000.32 DH</span>
                    </div>
                    <div className="bg-white rounded-20 shadow-csh p-2 w-full">
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
