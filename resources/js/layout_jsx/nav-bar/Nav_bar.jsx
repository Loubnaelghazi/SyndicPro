import React, { useState } from "react";
import Nav_bar_item from "./Nav_bar_item";
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
} from "react-icons/hi2";
import Logout_item from "./Logout_item";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
export default function Nav_bar() {
    const [simpleStyle , setSimpleStyle] = useState("duration-400 hover:bg-third-color hover:text-primary-color p-3 px-6  text-gray-color flex flex-row rounded-md");
    const [selectStyle , setSelectStyle] = useState("middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-primary-color to-p-gradient-color    text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize");
    return (
        <div className="bg-white border-solid border-[1px] border-gray-300 rounded-40 p-2 shadow-csh w-64 h-[calc(100vh-26px)] fixed top-0 left-0  justify-between gap-[3px] my-3 ml-3 translate-x-[-300px] inset-0 lg:translate-x-0 transition-transform duration-300">
            <div className="my-5 h-min flex justify-center items-center">
                <img
                    className=" h-20"
                    src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/11/15130028/Grab.jpg"
                    alt=""
                />
            </div>
            <a href="">
                <Nav_bar_item text="Tableau de bord" icon={<HiHome />} className={`${location.pathname.startsWith('/tableau_de_bord') ? selectStyle : simpleStyle}`}/>
            </a>
            <a href="/proprietaires">
                <Nav_bar_item text="Propriétaires" icon={<HiUserGroup />} className={`${location.pathname.startsWith('/proprietaires') ? selectStyle : simpleStyle}`}/>
            </a>
            <a href="">
                <Nav_bar_item text="Locataires" icon={<HiUsers />} className={`${location.pathname.startsWith('/locataires') ? selectStyle : simpleStyle}`}/>
            </a>
            <a href="/lots">
                <Nav_bar_item text="Lots" icon={<HiKey />} className={`${location.pathname.startsWith('/lots') ? selectStyle : simpleStyle}`}/>
            </a>
            <a href="">
                <Nav_bar_item text="Cotisations" icon={<HiCurrencyDollar />} className={`${location.pathname.startsWith('/cotisations') ? selectStyle : simpleStyle}`}/>
            </a>
            <a href="">
                <Nav_bar_item text="Dépenses" icon={<HiWallet />} className={`${location.pathname.startsWith('/dépenses') ? selectStyle : simpleStyle}`}/>
            </a>
            <a href="">
                <Nav_bar_item text="Fournisseurs" icon={<HiTruck />} className={`${location.pathname.startsWith('/fournisseurs') ? selectStyle : simpleStyle}`}/>
            </a>
            <a href="/copropriete">
                <Nav_bar_item text="Copropriété" icon={<HiBuildingOffice />} className={`${location.pathname.startsWith('/copropriete') ? selectStyle : simpleStyle}`}/>
            </a>
            <hr className="mx-6 my-1" />
            <a href="">
                <Nav_bar_item text="Paramètres" icon={<HiCog8Tooth />} className={`${location.pathname.startsWith('/parametres') ? selectStyle : simpleStyle}`}/>
            </a>
            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                <Logout_item
                        text="Se déconnecter"
                        icon={<HiArrowSmallLeft />}
                    />
            </ResponsiveNavLink>
        </div>
    );
}
