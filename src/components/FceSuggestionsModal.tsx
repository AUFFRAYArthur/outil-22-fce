import React from 'react';
    import { X, PlusCircle } from 'lucide-react';
    import type { Category, FCE } from '../types';

    interface FceSuggestionsModalProps {
      isOpen: boolean;
      onClose: () => void;
      category: Category;
      selectedFceIds: Set<string>;
      onAddFce: (fceId: string) => void;
    }

    const FceSuggestionsModal: React.FC<FceSuggestionsModalProps> = ({ isOpen, onClose, category, selectedFceIds, onAddFce }) => {
      if (!isOpen) return null;

      const availableFces = category.fces.filter(fce => !selectedFceIds.has(fce.id));

      const handleAddClick = (fceId: string) => {
        onAddFce(fceId);
      };

      return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center no-print" onClick={onClose}>
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full relative flex flex-col" style={{ maxHeight: '80vh' }} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b pb-3 mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                    Suggestions pour : <span className="text-indigo-600">{category.name}</span>
                </h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <X size={24} />
                </button>
            </div>
            
            <div className="flex-grow overflow-y-auto pr-2">
              {availableFces.length > 0 ? (
                <ul className="space-y-3">
                  {availableFces.map((fce) => (
                    <li key={fce.id} className="p-3 bg-slate-50 rounded-md border border-slate-200">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold text-slate-800">{fce.name}</p>
                          <p className="text-sm text-slate-500 mt-1">
                            <span className="font-medium">Mitigation suggérée :</span> {fce.mitigation}
                          </p>
                        </div>
                        <button
                          onClick={() => handleAddClick(fce.id)}
                          title={`Ajouter: ${fce.name}`}
                          className="ml-4 flex-shrink-0 flex items-center space-x-1.5 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
                        >
                          <PlusCircle size={16} />
                          <span>Ajouter</span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-slate-500 py-8">Tous les facteurs prédéfinis pour cette catégorie ont déjà été ajoutés.</p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t">
                <button
                    type="button"
                    onClick={onClose}
                    className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Fermer
                </button>
            </div>
          </div>
        </div>
      );
    };

    export default FceSuggestionsModal;
