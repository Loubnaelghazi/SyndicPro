import Main_content from "@/main _content/Main_content";
import React from "react";
import { useState } from "react";
import { HiPencil, HiPhoto, HiUserCircle } from "react-icons/hi2";
import Datepicker from "react-tailwindcss-datepicker";
import { Head } from "@inertiajs/react";
import { useEffect } from "react";
import TextInput from "@/Components/TextInput";
export default function AjouterReclamation({ auth }) {
    const [valueR, setValueR] = useState(0);
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [proprietaire_id, setProprietaire_id] = useState("");
    const [proprietaires, setProprietaires] = useState([]);

    const [id_proprietaire, setIdProprietaire] = useState("");
    const [sujet, setSujet] = useState("");
    const [description, setDescription] = useState("");
    const [reclameur, setReclameur] = useState("");
    const [date, setDate] = useState("");
    const [date_resolution, setDateResolution] = useState("");
    const [statut, setStatut] = useState("en_attente");
    const [priorite, setPriorite] = useState("");

    const ajouter = async (e) => {
        e.preventDefault();
        const reclamation = {
            id_proprietaire,
            sujet,
            description,
            reclameur,
            date,
            date_resolution,
            statut: "en_attente",
            priorite: parseInt(valueR) + 1,
        };
        try {
            await axios.post(`/api/reclamations`, reclamation);
            Swal.fire({
                icon: "success",
                title: "Votre locataire a été ajoutée avec succès !",
                showConfirmButton: true,
                confirmButtonText: "OK",
                buttonsStyling: false,
                customClass: {
                    popup: "success-popup",
                    confirmButton:
                        "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md",
                },
                preConfirm: () => {
                    return new Promise((resolve) => {
                        resolve();
                    });
                },
            }).then(() => {
                window.location.href = "/locataires";
            });
        } catch (error) {}

        // Perform the necessary operations with the `reclamation` object
        // e.g., send it to the server, make an API request, etc.
    };

    useEffect(() => {
        if (!proprietaires.length) {
            fetchProprietaires();
        }
    });

    const fetchProprietaires = async () => {
        const response = await axios.get(`/api/proprietaires/getAll`);
        setProprietaires(response.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/reclamations", reclamation)
            .then((response) => {
                console.log(response.data);
                // Reset the form or redirect to another page
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleChange = (event) => {
        setValueR(event.target.value);
    };
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    const handleValueChange2 = (newValue) => {
        console.log("newValue:", newValue);
        setValue2(newValue);
    };

    return (
        <Main_content
            user={auth.user}
            Title={"Reclamation N°"}
            ClassName="p-2 h-min"
        >
            <Head title="Ajouter réclamation" />

            <div className="">
                <form
                    action=""
                    className="flex flex-row gap-2 rounded-40 h-min"
                    onSubmit={ajouter}
                >
                    <div className=" grid grid-rows-3 gap-5 h-full rounded-40 p-3 ">
                        <div className=" w-56 h-32 flex items-center justify-center">
                            <label
                                htmlFor="dropzone-file"
                                className="flex p-2 h-full w-full flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center text-4xl text-gray-700 ">
                                    <HiPhoto />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            cliquez pour télécharger
                                        </span>{" "}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG (MAX. 3mb)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                    name="image"
                                />
                            </label>
                        </div>
                        <div className=" w-56 h-32 flex items-center justify-center">
                            <label
                                htmlFor="dropzone-file"
                                className="flex p-2 h-full w-full flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center text-4xl text-gray-700 ">
                                    <HiPhoto />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            cliquez pour télécharger
                                        </span>{" "}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG (MAX. 3mb)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <div className=" w-56 h-32 flex items-center justify-center">
                            <label
                                htmlFor="dropzone-file"
                                className="flex p-2 h-full w-full flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center text-4xl text-gray-700 ">
                                    <HiPhoto />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            cliquez pour télécharger
                                        </span>{" "}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG (MAX. 3mb)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="py-3 w-full pr-2 flex flex-col gap-2 h-min">
                        <textarea
                            id="message"
                            placeholder="Sujet de la réclamation"
                            rows="2"
                            name="sujet"
                            value={sujet}
                            onChange={(e) => setSujet(e.target.value)}
                            className="block font-semibold p-2.5 w-full text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-color focus:border-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-color dark:focus:border-primary-color h-min"
                        ></textarea>
                        <textarea
                            id="message"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description de la réclamation ..."
                            rows="6"
                            className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-color focus:border-primary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-color dark:focus:border-primary-color h-min"
                        />
                        <div className="flex flex-row items-center gap-4 ">
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-color dark:focus:border-primary-color"
                                value={id_proprietaire}
                                onChange={(e) =>
                                    setIdProprietaire(e.target.value)
                                }
                                name="proprietaire"
                            >
                                <option disabled value="">
                                    Veuillez choisir un proprietaire
                                </option>
                                {proprietaires.map((proprietaire) => (
                                    <option
                                        key={proprietaire.id}
                                        value={proprietaire.id}
                                    >
                                        {proprietaire.nom +
                                            " " +
                                            proprietaire.prenom}
                                    </option>
                                ))}
                            </select>
                            <div className="flex flex-row text-gray-400">
                                {" "}
                                <div>-</div> <div>ou</div>
                                <div>-</div>
                            </div>
                            <input
                                type="text"
                                name="reclameur"
                                value={reclameur}
                                onChange={(e) => setReclameur(e.target.value)}
                                className="bg-gray-50 whitespace-normal w-1/2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                placeholder="Entrer un nom (si le réclameur n'est pas un propriétaire)"
                            ></input>
                        </div>
                        <div className="flex flex-row justify-between gap-2">
                            <div className="w-1/2">
                                <TextInput
                                    type="date"
                                    name="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full mt-2 bg-gray-50 h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                />
                            </div>
                            <div className="w-1/2">
                                <TextInput
                                    type="date"
                                    name="date_resolution"
                                    value={date_resolution}
                                    onChange={(e) =>
                                        setDateResolution(e.target.value)
                                    }
                                    className="w-full mt-2 bg-gray-50 h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color focus:border-purple-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row gap-10 mt-7 justify-between items-start">
                            <div className=" -mt-[10px] items-start align-top font-medium rounded-l-lg bg-white w-max text-gray-500">
                                <span>Priorité:</span>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2  justify-start align-top">
                                <div className=" flex items-center">
                                    <input
                                        id="small-range"
                                        type="range"
                                        defaultValue={valueR}
                                        min="0"
                                        max="4"
                                        step="1"
                                        name="priorite"
                                        className="h-1 w-full accent-primary-color bg-gray-100 rounded-lg appearance-none cursor-pointer  range-sm range range-warning ring-primary-color focus:ring-primary-color "
                                        onChange={handleChange}
                                        style={{
                                            "--thumb-color": "green",
                                            "--thumb-size": "16px",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-row px-2 text-xs text-gray-400 justify-between">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                </div>
                            </div>
                            <button
                                className="w-min p-0.5 px-5 border-[2.5px] border-blue-200 flex flex-row items-center gap-3 rounded-xl text-blue-500 justify-start hover:bg-blue-500 hover:text-white"
                                type="submit"
                            >
                                Ajouter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Main_content>
    );
}
