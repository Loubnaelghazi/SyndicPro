import React, { useRef, useState } from "react";
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
} from "react-icons/hi2";
import Logout_item from "../nav-bar/Logout_item";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Header({ user }) {
    const [display, setDesplay] = useState("none");

    function hideElement() {
        if (display == "none") {
            setDesplay("block");
        } else {
            setDesplay("none");
        }
    }

    return (
        <div className="bg-white text-primary-color border-solid border-[1px] border-gray-300 h-min mt-4 rounded-20  mr-6 shadow-csh">
            <div className="  flex flex-row  p-4  justify-between ">
                <div className="flex flex-row justify-between">
                    <a className="lg:hidden duration-500 text-2xl ml-2 mr-5 hover:text-third-color hover:bg-primary-color rounded-md">
                        <button onClick={hideElement}>
                            <HiBars3 />
                        </button>
                    </a>
                    Residence <span className="font-semibold">Nour</span>
                </div>
                <div className="flex flex-row">
                    <div className="text-2xl mx-1 hover:shadow-csh">
                        <HiExclamationTriangle />
                    </div>
                    <div className="text-2xl mx-1">
                        <HiBell />
                    </div>
                    <div className="text-2xl mx-1 ml-7">
                        <HiUserCircle />
                    </div>
                    <div className="text-black font-semibold mx-3">
                        {user.name}{" "}
                    </div>
                </div>
            </div>
            <div
                style={{ display: `${display}` }}
                className=" transition-all lg:hidden duration-400"
            >
                <hr className="mx-6 mb-2" />
                <div className="text-lg h-min max-w-full  mx-4 pb-2 flex flex-row  justify-between ">
                    <a href="">
                        <Nav_bar_item text="" icon={<HiHome />} />
                    </a>
                    <a href="">
                        <Nav_bar_item text="" icon={<HiUserGroup />} />
                    </a>
                    <a href="">
                        <Nav_bar_item text="" icon={<HiUsers />} />
                    </a>
                    <a href="">
                        <Nav_bar_item text="" icon={<HiKey />} />
                    </a>
                    <a href="">
                        <Nav_bar_item text="" icon={<HiCurrencyDollar />} />
                    </a>
                    <a href="">
                        <Nav_bar_item text="" icon={<HiTruck />} />
                    </a>
                    <a href="">
                        <Nav_bar_item text="" icon={<HiBuildingOffice />} />
                    </a>
                    <a href="">
                        <Nav_bar_item text="" icon={<HiWallet />} />
                    </a>
                    <a href="">
                        <Nav_bar_item text="" icon={<HiCog8Tooth />} />
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
