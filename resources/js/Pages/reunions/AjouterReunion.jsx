import React, { useState } from "react";
import axios from "axios";
import { Head } from "@inertiajs/react";
import Main_content from "@/main _content/Main_content";
import Swal from "sweetalert2";
import {TbFileUpload} from "react-icons/tb"







const AjouterReunion = ({ auth }) => {

    const [activeSection, setActiveSection] = useState("details");
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };
 const [titre, setTitre] = useState("");
 const [ordre_jour, setOrdre] = useState("");
 const [pv, setPv] = useState("");
 const [decision, setDecision] = useState("");
 const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
 const [lieu, setLieu] = useState("");
 const [sujet, setSujet] = useState("");
 const [type, setType] = useState("");
const [chemin_document ,setChemin]=useState("");

  const ajouter = async (e) => {
    
      e.preventDefault();
      const reunion = {
          titre,
          ordre_jour,
          pv,
          decision,
          date,
          heure,
          lieu,
          sujet,
          type,
          chemin_document,
      };
      try {
          await axios.post(`/api/reunions`, reunion); 

          Swal.fire({
             
              icon: "success",
              title: "Votre  réunion a été ajouté avec succés !",
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
              window.location.href = "/reunions";
          });
      } catch (error) {
          console.log(error);
          console.log('Erreurs');
      }
  };
    


    return (
        <Main_content
            user={auth.user}
            Title={"Ajouter une nouvelle réunion"}
            Description={"test test test "}
            ClassName="p-3"
        >
            <Head title=" Ajouter Réunions" />

            <div className="p-6">
                <div className="flex">
                    <button
                        className={`px-4 py-2 mr-4 text-sm font-medium  ${
                            activeSection === "details"
                                ? "bg-reunion-color text-white "
                                : "bg-white text-gray-700 "
                        } rounded-t-md focus:outline-none`}
                        onClick={() => handleSectionChange("details")}
                    >
                        Détails de la réunion
                    </button>
                    <button
                        className={`px-4 py-2 mr-4 text-sm font-medium ${
                            activeSection === "report"
                                ? "bg-reunion-color text-white "
                                : "bg-white text-gray-700 "
                        } rounded-t-md focus:outline-none`}
                        onClick={() => handleSectionChange("report")}
                    >
                        Compte-rendu (PV)
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium ${
                            activeSection === "decisions"
                                ? "bg-reunion-color text-white "
                                : "bg-white text-gray-700 "
                        } rounded-t-md focus:outline-none`}
                        onClick={() => handleSectionChange("decisions")}
                    >
                        Décisions
                    </button>
                </div>

                <form onSubmit={(e) => ajouter(e)}>
                    <div className=" bg-reunion-color rounded-b-lg  shadow-md p-6">
                        {activeSection === "details" && (
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-4  text-gray-700 ">
                                    DETAILS DE LA REUNION
                                </h2>
                                <div>
                                    <div className="flex flex-col gap-5">
                                        <select
                                            value={type}
                                            onChange={(e) =>
                                                setType(e.target.value)
                                            }
                                            name="type"
                                            id="type"
                                            className="w-full h-10 px-2 border border-gray-300 rounded  focus:ring-primary-color"
                                        >
                                            <option
                                                disabled
                                                value="   Le type de la réunion"
                                            >
                                                Le type de la réunion
                                            </option>
                                            <option value=" assemblees_generales">
                                                Assemblées génerales
                                            </option>
                                            <option value=" reunion_informations">
                                                Réunions d'informations
                                            </option>
                                        </select>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            value={date}
                                            onChange={(e) =>
                                                setDate(e.target.value)
                                            }
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Date de la réunion"
                                            required
                                        />
                                        <input
                                            type="time"
                                            name="heure"
                                            id="heure"
                                            value={heure}
                                            onChange={(e) =>
                                                setHeure(e.target.value)
                                            }
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Heure de la réunion"
                                            required
                                        />

                                        <input
                                            type="text"
                                            name="lieu"
                                            id="lieu"
                                            value={lieu}
                                            onChange={(e) =>
                                                setLieu(e.target.value)
                                            }
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Lieu de la réunion"
                                        />

                                        <input
                                            type="text"
                                            id="titre"
                                            name="titre"
                                            value={titre}
                                            onChange={(e) =>
                                                setTitre(e.target.value)
                                            }
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Titre de la réunion"
                                        />
                                        <input
                                            type="text"
                                            name="sujet"
                                            id="sujet"
                                            value={sujet}
                                            onChange={(e) =>
                                                setSujet(e.target.value)
                                            }
                                            className="w-full h-10 px-2 border border-gray-300 rounded"
                                            placeholder="Sujet de la réunion"
                                        />
                                        <textarea
                                            placeholder="Ordre du jour"
                                            className="  w-full h-24 px-2 border border-gray-300 rounded focus:ring-primary-color"
                                            name="ordre_jour"
                                            id="ordre_jour"
                                            value={ordre_jour}
                                            onChange={(e) =>
                                                setOrdre(e.target.value)
                                            }
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "report" && (
                            <div className="mb-4">
                                <div className="flex justify-between  mb-2 ">
                                    <h2 className="text-lg font-semibold  mb-4  text-gray-700 ">
                                        COMPTE RENDU DE LA REUNION
                                    </h2>
                                    <button className="w-min bg-primary-color text-white rounded-md hover:opacity-90 focus:outline-none  flex items-center ">
                                        <TbFileUpload className=" text-2xl inline-block m-1" />
                                        <span className="mr-2 mt-1">
                                            Déposer{" "}
                                        </span>
                                    </button>
                                    <input type="file" className="hidden" />
                                </div>
                                <textarea
                                    name="pv"
                                    id="pv"
                                    value={pv}
                                    required
                                    onChange={(e) => setPv(e.target.value)}
                                    className="w-full h-40 p-2 border border-gray-300 rounded-md focus:ring-primary-color"
                                ></textarea>
                            </div>
                        )}

                        <div
                            className={`${
                                activeSection === "decisions"
                                    ? "block"
                                    : "hidden"
                            }`}
                        >
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-4  text-gray-700 ">
                                    DECISIONS PRISES A LA FIN DE LA REUNION
                                </h2>
                                <textarea
                                    id="decision"
                                    name="decision"
                                    value={decision}
                                    onChange={(e) =>
                                        setDecision(e.target.value)
                                    }
                                    required
                                    className="w-full h-40 p-2 border border-gray-300 rounded-md  focus:ring-primary-color"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-start ">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary-color  hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color  text-white rounded-md mr-2"
                        >
                            Ajouter
                        </button>
                        <a
                            href="/reunions
                        "
                        >
                            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                                Annuler
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </Main_content>
    );
};

export default AjouterReunion;
