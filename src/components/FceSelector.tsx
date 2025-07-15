import React, { useState } from 'react';
    import { Lightbulb } from 'lucide-react';
    import type { Category } from '../types';
    import Card from './Card';
    import FceSuggestionsModal from './FceSuggestionsModal';

    interface FceSelectorProps {
      categories: Category[];
      selectedFceIds: Set<string>;
      onAddFce: (fceId: string) => void;
      onAddCustomFce: (riskName: string) => void;
    }

    const FceSelector: React.FC<FceSelectorProps> = ({ categories, selectedFceIds, onAddFce, onAddCustomFce }) => {
      const [customRiskInputs, setCustomRiskInputs] = useState<Record<string, string>>({});
      const [modalCategory, setModalCategory] = useState<Category | null>(null);

      const handleCustomInputChange = (categoryName: string, value: string) => {
        setCustomRiskInputs(prev => ({
          ...prev,
          [categoryName]: value,
        }));
      };

      const handleAddCustomClick = (categoryName: string) => {
        const riskName = customRiskInputs[categoryName];
        if (riskName && riskName.trim()) {
          onAddCustomFce(riskName.trim());
          setCustomRiskInputs(prev => ({
            ...prev,
            [categoryName]: '',
          }));
        }
      };

      return (
        <>
          <Card className="no-print">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-3">1. Sélectionnez ou ajoutez des Facteurs Clés d'Échec</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {categories.map((category) => {
                const customRiskValue = customRiskInputs[category.name] || '';

                return (
                  <div key={category.name} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-3">{category.name}</h3>
                    
                    <div className="flex-grow">
                      {/* Predefined risks trigger */}
                      <div className="mb-4">
                        <button
                          onClick={() => setModalCategory(category)}
                          className="group inline-flex items-center space-x-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                          <Lightbulb className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 group-hover:animate-pulse transition-colors" />
                          <span>Suggestions de FCE</span>
                        </button>
                      </div>

                      {/* Separator */}
                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center">
                          <span className="bg-white px-2 text-sm text-gray-500">ou</span>
                        </div>
                      </div>

                      {/* Custom risk */}
                      <div>
                        <label htmlFor={`custom-risk-${category.name}`} className="text-sm font-medium text-gray-700">
                          Ajouter un risque personnalisé :
                        </label>
                        <div className="mt-1 flex items-center space-x-2">
                          <input
                            id={`custom-risk-${category.name}`}
                            type="text"
                            value={customRiskValue}
                            onChange={(e) => handleCustomInputChange(category.name, e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddCustomClick(category.name)}
                            placeholder="Saisir un nouveau risque..."
                            className="block w-full pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          />
                          <button
                            onClick={() => handleAddCustomClick(category.name)}
                            disabled={!customRiskValue.trim()}
                            className="flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
                          >
                            Ajouter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {modalCategory && (
            <FceSuggestionsModal
              isOpen={!!modalCategory}
              onClose={() => setModalCategory(null)}
              category={modalCategory}
              onAddFce={onAddFce}
              selectedFceIds={selectedFceIds}
            />
          )}
        </>
      );
    };

    export default FceSelector;
