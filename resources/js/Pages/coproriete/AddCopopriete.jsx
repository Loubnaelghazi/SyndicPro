import React,{useEffect, useState} from "react";
import Main_content from "@/main _content/Main_content";
import {HiBuildingOffice} from "react-icons/hi2"
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head } from "@inertiajs/react";
import Swal from 'sweetalert2';
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";



const AddCopopriete = ({auth}) => {

const [nom,setNom]=useState('');
const [adresse, setAdresse] = useState("");
const [ville, setVille] = useState("");
const [code_postale, setCodePostale] = useState("");
const [type, setType] = useState("");

const [balance, setBalance] = useState("");


/* fonction d ajout */
const ajouter=async (e)=>{
e.preventDefault();
const copropriete = {
    nom,
    adresse,
    type,
    ville,
    code_postale,
    balance,
};
try {
await axios.post(`/api/coproprietes`, copropriete); /* send to this */
  
   Swal.fire({
       /* message de succes */
       // position:'top-end',
       icon: "success",
       title: "Votre coproprieté a été ajouté avec succés !",
       showConfirmButton: true,
       confirmButtonText: "OK",
       buttonsStyling: false,
       customClass: {
           popup: "success-popup",
           confirmButton:
               "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md",
       },
//preconfirm methode pour redireger vers la page apres cliquer sur ok 
       preConfirm: () => {
           return new Promise((resolve) => {
               resolve();
           });
       },
   }).then(() => {
       // Redirection vers la page /copropriete après la fermeture du message
       Inertia.visit("/copropriete", { method: "get" });
   }); 

} catch (error) {
    console.log(error);
}
}




/* const fetchTypes=async ()=>{
    const fetchedTypes=await useTypes;
    setTypes(fetchedTypes)
} */

    return (
        <>
            <Main_content user={auth.user}>
                <div>
                    {/* ************************************************************************** */}
                    <Head title="Ajouter Coproprietés" />

                    <div>
                        <span className="text-5xl mb-8 justify-center flex flex-row text-primary-color">
                            <HiBuildingOffice />
                        </span>
                        <form
                            className="space-y-6"
                            onSubmit={(e) => ajouter(e)}
                        >
                            <div className="grid grid-cols-2 gap-x-16 ">
                                <div>
                                    <label
                                        htmlFor="nom"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Nom
                                    </label>
                                    <div className="mt-2">
                                        <TextInput
                                            id="nom"
                                            name="nom"
                                            type="text"
                                            autoComplete="current-nom"
                                            value={nom}
                                            onChange={(e) =>
                                                setNom(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="adresse"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Adresse
                                        </label>
                                        <div className="mt-2">
                                            <TextInput
                                                id="adresse"
                                                name="adresse"
                                                type="text"
                                                required
                                                value={adresse}
                                                onChange={(e) =>
                                                    setAdresse(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="type_id"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Type
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <select
                                                id="type_id"
                                                name="type_id"
                                                value={type}
                                                onChange={(e) =>
                                                    setType(e.target.value)
                                                }
                                                /*  onChange={(e) =>
                                                    setTypeId(e.target.value)
                                                } */
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
                                            >
                                                <option disabled value="">
                                                    {" "}
                                                    {/* en react selected donne errer     */}
                                                    Veuillez choisir un type
                                                </option>{" "}
                                                <option value="immeuble">
                                                    immeuble
                                                </option>{" "}
                                                <option value="villa">
                                                    villa
                                                </option>{" "}
                                                <option value="autre">
                                                    autre
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="ville"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Ville
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <TextInput
                                            id="ville"
                                            name="ville"
                                            type="text"
                                            value={ville}
                                            onChange={(e) =>
                                                setVille(e.target.value)
                                            }
                                            autoComplete="current-ville"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="code_postale "
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Code Postale
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <TextInput
                                                id="code_postale"
                                                name="code_postale"
                                                value={code_postale}
                                                onChange={(e) =>
                                                    setCodePostale(
                                                        e.target.value
                                                    )
                                                }
                                                type="number"
                                                maxLength="5"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="balance"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Balance(DH)
                                        </label>
                                        <div className="mt-2">
                                            <TextInput
                                                id="balance"
                                                name="balance"
                                                type="number"
                                                value={balance}
                                                onChange={(e) =>
                                                    setBalance(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row justify-center">
                                <PrimaryButton
                                    type="submit"
                                    className="w-40  py-2 "
                                >
                                    Ajouter
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    {/* *********************************************** */}
                </div>
            </Main_content>
        </>
    );
};

export default AddCopopriete;
