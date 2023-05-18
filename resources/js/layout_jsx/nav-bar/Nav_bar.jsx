import React from "react";
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
                <Nav_bar_item text="Tableau de bord" icon={<HiHome />} />
            </a>
            <a href="">
                <Nav_bar_item text="Propriétaires" icon={<HiUserGroup />} />
            </a>
            <a href="">
                <Nav_bar_item text="Locataires" icon={<HiUsers />} />
            </a>
            <a href="/lot">
                <Nav_bar_item text="Lots" icon={<HiKey />} />
            </a>
            <a href="">
                <Nav_bar_item text="Cotisations" icon={<HiCurrencyDollar />} />
            </a>
            <a href="">
                <Nav_bar_item text="Dépenses" icon={<HiTruck />} />
            </a>
            <a href="">
                <Nav_bar_item text="Fournisseurs" icon={<HiBuildingOffice />} />
            </a>
            <a href="/copopriete">
                <Nav_bar_item text="Copropriete" icon={<HiWallet />} />
            </a>
            <hr className="mx-6 my-1" />
            <a href="">
                <Nav_bar_item text="Paramètres" icon={<HiCog8Tooth />} />
            </a>
            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                <Logout_item
                        text="Se deconnecter"
                        icon={<HiArrowSmallLeft />}
                    />
            </ResponsiveNavLink>
        </div>
    );
}
