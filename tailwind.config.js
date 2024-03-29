import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "primary-color":"#7650E3" ,
                // "primary-color": "#9a97ff",
                "secondary-color": "#F8F8FF",
                "third-color": "#E3D9FF",
                "darkly":"#283943",
                "gray-color": "#A1A0BD",
                "p-gradient-color": "#5E38CB",
                "t-color": "#464F60",
                "pinky-color": "#2DB29C",
                "purple-color": "#9C2DB2",
                "my-red": "#ef233c",
                "reunion-color": "#E4E3FF",
                "lavender": "#E7F0FE",
                "bright": "#ECE4F3",
            },
            borderRadius: {
                40: "12px",
                20: "12px",
            },
            boxShadow: {
                csh: "0px 0px 10px rgba(0, 0, 0, 0.07)",
                csh2: "0px 0px 10px rgba(0, 0, 0, 0.06)",
                cshb: "0px 0px 15px rgba(12, 12, 12, 0.15)",
            },
            gridTemplateRows: {
                7: "repeat(7, minmax(0, 1fr))",
            },
            backgroundImage: {
                "login-bg":
                    "url('https://cdn-s-www.lalsace.fr/images/1862732B-B81E-4FFC-AE9E-0640EB705144/NW_raw/l-entretien-de-l-immeuble-la-maintenance-de-l-ascenseur-les-travaux-les-honoraires-du-syndic-de-nombreuses-charges-pesent-sur-ceux-qui-habitent-dans-des-logements-collectifs-photo-adobe-stock-1675097063.jpg')",
                "l-bg": "url('https://www.usnews.com/object/image/00000181-d8ce-d1b7-a1d1-dddf4ac90000/gettyimages-1069330600.jpg?update-time=1657199952878&size=responsive970')",
            },
        },
    },

    plugins: [forms, require("tailwind-scrollbar"), require("flowbite/plugin")],
};
