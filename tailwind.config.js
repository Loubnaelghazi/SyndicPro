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
                'login-bg': "url('https://www.nomadeprocess.com/images/diaporama/copropriete-loi-elan.jpg')",
              }
        },
    },

    plugins: [forms,
        require('tailwind-scrollbar'),
    ],
};
