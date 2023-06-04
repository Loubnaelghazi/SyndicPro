import React, { useRef, useState,useEffect } from "react";
import {
    HiBell,
    HiExclamationTriangle,
    HiUserCircle,
    HiBars3,
} from "react-icons/hi2";
import Nav_bar_item from "../nav-bar/Nav_bar_item";
import {
    HiHome,
    HiUserGroup,
    HiUsers,
    HiKey,
    HiCurrencyDollar,
    HiTruck,
    HiWallet,
    HiBuildingOffice,
    HiCog8Tooth,
    HiArrowSmallLeft,
    HiClipboardDocumentList
} from "react-icons/hi2";
import Logout_item from "../nav-bar/Logout_item";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Header({ user }) {
    const [display, setDesplay] = useState("none");

    const [simpleStyle, setSimpleStyle] = useState(
        "duration-400 hover:bg-third-color hover:text-primary-color p-3 px-6  text-gray-color flex flex-row rounded-md"
    );
    const [selectStyle, setSelectStyle] = useState(
        "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-primary-color to-p-gradient-color    text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
    );
    const [headerStyle, setHeaderStyle] = useState(
        "transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-2xl p-2 rounded-xl bg-gradient-to-tr from-primary-color to-p-gradient-color text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/40 active:opacity-[0.85] w-min flex items-center gap-4  capitalize"
    );
 
    function hideElement() {
        if (display == "none") {
            setDesplay("block");
        } else {
            setDesplay("none");
        }
        if (window.innerWidth > 1024) {
            setDesplay("none");
        }
    }

    return (
        <div className="bg-white text-primary-color  h-min mt-4 rounded-20 shadow-csh">
            <div className="  flex flex-row p-1 px-4 justify-between items-center">
                <div className="flex flex-row justify-between">
                    <a className="lg:hidden duration-500 text-2xl ml-2 mr-5 hover:text-third-color hover:bg-primary-color rounded-md">
                        <button onClick={hideElement}>
                            <HiBars3 />
                        </button>
                    </a>
                    Residence <span className="font-semibold">Nour</span>
                </div>

               

                <div className="flex flex-row gap-2 items-center">
                    <a
                        className={`${
                            location.pathname.startsWith("/reclamations")
                                ? headerStyle
                                : "text-2xl hover:bg-third-color items-center p-2 rounded-xl"
                        }`}
                        href="/reclamations"
                    >
                        <HiExclamationTriangle />
                    </a>
                    <div className="text-2xl hover:bg-third-color items-center p-2 rounded-xl">
                        <HiBell />
                    </div>
                    <div className="text-2xl hover:bg-third-color items-center p-2 rounded-xl">
                        <HiUserCircle />
                    </div>
                    <div className="text-black font-semibold mx-3">
                        {user.name}{" "}
                    </div>
                </div>
            </div>
            <div
                style={{ display: `${display}` }}
                className=" transition-all lg:hidden duration-400 overflow-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent rounded-md"
            >
                <hr className="mx-6 mb-2 w-full" />
                <div className="text-lg h-min max-w-full  mx-4 pb-2 flex flex-row  justify-between ">
                    <a href="">
                        <Nav_bar_item
                            icon={<HiHome />}
                            className={`${
                                location.pathname.startsWith("/tableau_de_bord")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>
                    <a href="/proprietaires">
                        <Nav_bar_item
                            icon={<HiUserGroup />}
                            className={`${
                                location.pathname.startsWith("/proprietaires")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>
                    <a href="/locataires">
                        <Nav_bar_item
                            icon={<HiUsers />}
                            className={`${
                                location.pathname.startsWith("/locataires")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>
                    <a href="/reunions">
                        <Nav_bar_item
                            icon={<HiClipboardDocumentList />}
                            className={`${
                                location.pathname.startsWith("/reunions")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>

                    <a href="/lots">
                        <Nav_bar_item
                            icon={<HiKey />}
                            className={`${
                                location.pathname.startsWith("/lots")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>
                    <a href="">
                        <Nav_bar_item
                            icon={<HiCurrencyDollar />}
                            className={`${
                                location.pathname.startsWith("/cotisations")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>
                    <a href="">
                        <Nav_bar_item
                            icon={<HiWallet />}
                            className={`${
                                location.pathname.startsWith("/dépenses")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>
                    <a href="">
                        <Nav_bar_item
                            icon={<HiTruck />}
                            className={`${
                                location.pathname.startsWith("/fournisseurs")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>
                    <a href="/copropriete">
                        <Nav_bar_item
                            icon={<HiBuildingOffice />}
                            className={`${
                                location.pathname.startsWith("/copropriete")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>
                    <hr className="mx-6 my-1" />
                    <a href="">
                        <Nav_bar_item
                            icon={<HiCog8Tooth />}
                            className={`${
                                location.pathname.startsWith("/parametres")
                                    ? selectStyle
                                    : simpleStyle
                            }`}
                        />
                    </a>
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        as="button"
                    >
                        <Logout_item text="" icon={<HiArrowSmallLeft />} />
                    </ResponsiveNavLink>
                </div>
            </div>
        </div>
    );
}
