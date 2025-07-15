import React from 'react';
    import { Trash2 } from 'lucide-react';
    import type { FCE, AnalysisData, Level } from '../types';
    import Card from './Card';

    interface GridItem extends FCE, AnalysisData {}

    interface FceGridProps {
      gridItems: GridItem[];
      onRequestDelete: (item: GridItem) => void;
      onAnalysisChange: (fceId: string, field: keyof AnalysisData, value: string) => void;
    }

    const FceGrid: React.FC<FceGridProps> = ({ gridItems, onRequestDelete, onAnalysisChange }) => {
      const getLevelColorClass = (level: Level): string => {
        switch (level) {
          case 'Élevée':
            return 'bg-red-100 border-red-300 text-red-800 font-semibold';
          case 'Moyenne':
            return 'bg-orange-100 border-orange-300 text-orange-800 font-semibold';
          case 'Faible':
            return 'bg-green-100 border-green-300 text-green-800 font-semibold';
          default:
            return 'bg-white border-gray-300';
        }
      };

      if (gridItems.length === 0) {
        return (
          <Card className="text-center no-print">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">2. Votre Grille d'Analyse</h2>
            <p className="text-slate-500">Sélectionnez un facteur dans la section 1 pour commencer à construire votre grille.</p>
          </Card>
        );
      }

      return (
        <Card className="printable-card">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-3">2. Votre Grille d'Analyse</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <colgroup>
                <col style={{ width: '25%' }} />      {/* Facteur Clé d'Échec */}
                <col style={{ width: '40%' }} />      {/* Mesure de Mitigation */}
                <col style={{ width: '12.5%' }} />    {/* Gravité */}
                <col style={{ width: '12.5%' }} />    {/* Probabilité */}
                <col style={{ width: '10%' }} />      {/* Actions */}
              </colgroup>
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Facteur Clé d'Échec
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mesure de Mitigation
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gravité
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Probabilité
                  </th>
                  <th scope="col" className="relative px-2 py-3 no-print">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {gridItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-normal align-top text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-normal align-top text-sm text-gray-500">
                      <textarea
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Décrire ou compléter la mesure de mitigation..."
                        value={item.mitigation}
                        onChange={(e) => onAnalysisChange(item.id, 'mitigation', e.target.value)}
                      />
                    </td>
                    <td className="px-3 py-4 align-top">
                      <select
                        value={item.severity}
                        onChange={(e) => onAnalysisChange(item.id, 'severity', e.target.value)}
                        className={`w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors ${getLevelColorClass(item.severity)}`}
                      >
                        <option value="">Sélectionner...</option>
                        <option value="Faible">Faible</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Élevée">Élevée</option>
                      </select>
                    </td>
                    <td className="px-3 py-4 align-top">
                      <select
                        value={item.probability}
                        onChange={(e) => onAnalysisChange(item.id, 'probability', e.target.value)}
                        className={`w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors ${getLevelColorClass(item.probability)}`}
                      >
                        <option value="">Sélectionner...</option>
                        <option value="Faible">Faible</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Élevée">Élevée</option>
                      </select>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center align-top no-print">
                      <button
                        onClick={() => onRequestDelete(item)}
                        className="text-slate-500 hover:text-red-600 p-1 rounded-full hover:bg-red-100 transition-colors duration-200"
                        title="Supprimer le facteur"
                      >
                        <Trash2 size={10} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      );
    };

    export default FceGrid;
