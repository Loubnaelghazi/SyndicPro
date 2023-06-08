import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import Main_content from '@/main _content/Main_content'
import { Head } from '@inertiajs/react'
import React from 'react'
import { FaFileUpload } from 'react-icons/fa'

export default function PayerDepense({auth}) {
  return (
    <Main_content
            user={auth.user}
            Title={`Payer dépense N° `}
            ClassName="p-10 px-14"
        >
            <Head title={`Payer dépense N° `} />
            <div>
            <div className="flex flex-col gap-3">
                        <div className="space-y-1">
                            <InputLabel htmlFor="date_paiement_partiel">
                                Date de paiement :
                            </InputLabel>
                            <TextInput
                                id="date_paiement_partiel"
                                name="date_paiement_partiel"
                                type="date"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="montant_partiel">
                                Montant (DH) :
                            </InputLabel>
                            <TextInput
                                id="montant_partiel"
                                name="montant_partiel"
                                type="number"
                                required
                                placeholder="Montant en (DH)"
                            />
                        </div>

                        <div className="space-y-1">
                            <InputLabel htmlFor="mode_paiement_partiel">
                                Mode de paiement :
                            </InputLabel>
                            <select
                                required
                                className="w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 "
                                name="mode_paiemen_partielt"
                                id="mode_paiement_partiel"
                            >
                                <option
                                    disabled
                                    value="Choisir le mode de paiement"
                                >
                                    Choisir le mode de paiement :
                                </option>
                                <option value="virement">Virement</option>
                                <option value="especes">Espèces </option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="commentaire_partiel">
                                Commentaire :
                            </InputLabel>
                            <textarea
                                className="w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 "
                                name="commentaire_partiel"
                                id="commentaire_partiel"
                                placeholder="Taper votre commentaire içi"
                            ></textarea>
                        </div>
                        <div className="space-y-1">
                            <InputLabel htmlFor="justificatif_partiel">
                                Justificatif :
                            </InputLabel>
                            <a className="bg-white w-full cursor-pointer text-gray-500  hover:text-primary-color  hover:border-primary-color p-3  flex flex-col items-center justify-center  rounded-20 border-4 border-dashed border-gray-300">
                                <FaFileUpload className="text-2xl" />
                                <div className="text-sm">Déposer</div>
                            </a>
                        </div>
                    </div>
            </div>
</Main_content>
  )
}
