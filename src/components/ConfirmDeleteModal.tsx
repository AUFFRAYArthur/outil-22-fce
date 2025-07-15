import React from 'react';
    import { X, AlertTriangle } from 'lucide-react';
    import Card from './Card';

    interface ConfirmDeleteModalProps {
      isOpen: boolean;
      onClose: () => void;
      onConfirm: () => void;
      fceName: string;
    }

    const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm, fceName }) => {
      if (!isOpen) return null;

      return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center no-print" onClick={onClose}>
          <div className="bg-white rounded-lg shadow-xl p-0 max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <AlertTriangle className="h-6 w-6 text-red-600" aria-hidden="true" />
                </div>
                <div className="mt-0 ml-4 text-left flex-1">
                  <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-title">
                    Confirmer la suppression
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Êtes-vous sûr de vouloir supprimer définitivement le facteur de risque suivant ?
                    </p>
                    <p className="mt-2 font-semibold text-gray-700 bg-gray-100 p-2 rounded-md">
                      "{fceName}"
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Cette action est irréversible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-3 sm:flex sm:flex-row-reverse rounded-b-lg">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onConfirm}
              >
                Supprimer
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      );
    };

    export default ConfirmDeleteModal;
