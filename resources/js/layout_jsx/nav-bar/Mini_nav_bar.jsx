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
export default function Mini_nav_bar() {
    return (
        <div>
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
                <a href="">
                    <Logout_item text="" icon={<HiArrowSmallLeft />} />
                </a>
            </div>
        </div>
    );
}
