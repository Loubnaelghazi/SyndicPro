import React, { useEffect, useState } from 'react'
import { FiAlertTriangle } from "react-icons/fi";

const Alerte = ({display}) => {


  return (
      <div style={`${display}`}>
          
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 backdrop-blur">
                  <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md relative flex">
                      <div className="flex-shrink-0 text-8xl bg-red-600 text-white rounded-l-lg flex items-center justify-center px-6">
                          <FiAlertTriangle />
                      </div>
                      <div className="flex-grow pl-4">
                          <button
                              className="absolute top-2 right-2 p-1"
                          >
                              <svg
                                  className="h-6 w-6 text-gray-600 hover:text-gray-800"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"
                                  />
                              </svg>
                          </button>
                          <div className="mb-4">
                              <h5 className="text-lg font-bold text-red-600">
                                  Attention!
                              </h5>
                              <h2 className="text-lg font-bold text-red-500">
                                  Êtes-vous sûr de vouloir supprimer test ?
                              </h2>
                              <p className="text-gray-800">
                                  Vous ne pouvez plus récupérer ces éléments
                                  après suppression !
                              </p>
                          </div>
                          <div className="flex justify-end">
                              <button className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 hover:scale-105">
                                  Supprimer
                              </button>
                              <button
                                  onClick={handleAlertClose}
                                  className="px-4 py-2 bg-white border-[1px] border-solid border-red-500 text-red-500 rounded hover:scale-105"
                              >
                                  Annuler
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          
      </div>
  );
}

export default Alerte;
