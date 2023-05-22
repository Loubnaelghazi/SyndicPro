import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "primary-color": "#2DB259",
                "secondary-color": "#F4FFF8",
                "third-color": "#D5F2DF",
                "gray-color": "#A1A0BD",
                "p-gradient-color": "#5DEF8D",
                "t-color": "#464F60",
                "pinky-color": "#2DB29C",
            },
            borderRadius: {
                40: "25px",
                20: "17px",
            },
            boxShadow: {
                csh: "5px 5px 40px rgba(0, 0, 0, 0.09)",
            },
            gridTemplateRows: {
                7: "repeat(7, minmax(0, 1fr))",
            },
            backgroundImage: {
                "login-bg":
                    "url('https://www.nomadeprocess.com/images/diaporama/copropriete-loi-elan.jpg')",
                "l-bg": "url('https://www.usnews.com/object/image/00000181-d8ce-d1b7-a1d1-dddf4ac90000/gettyimages-1069330600.jpg?update-time=1657199952878&size=responsive970')",
            },
        },
    },

    plugins: [forms, require("tailwind-scrollbar"), require("flowbite/plugin")],
};
