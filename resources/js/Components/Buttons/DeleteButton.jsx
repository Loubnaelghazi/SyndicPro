import React from "react";
import { HiTrash } from "react-icons/hi2";

export default function DeleteButton({ selectedCheckboxes, onClick }) {
    return (
        <button
            onClick={onClick}
            disabled={selectedCheckboxes.length === 0}
            className={`text-red-500 border-solid border-gray-200 border-[1.5px] h-min  p-2 bg-white dark:bg-white-700 dark:hover:bg-white-600 hover:bg-red-500 hover:text-white cursor-pointer rounded-[7px] focus:outline-none focus:border-white-800 focus:shadow-outline-white ${
                selectedCheckboxes.length === 0 ? "hidden" : ""
            }`}
            title="Supprimer"
        >
            <HiTrash />
        </button>
    );
}
