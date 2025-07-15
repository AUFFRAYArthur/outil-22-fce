import React from 'react';
import { Lightbulb, Save, Printer, FileSpreadsheet } from 'lucide-react';

interface ActionIconsProps {
  onInfoClick: () => void;
  onSaveClick: () => void;
  onPrintClick: () => void;
  onExportCsv: () => void;
  isGridPopulated: boolean;
}

const ActionIcons: React.FC<ActionIconsProps> = ({ onInfoClick, onSaveClick, onPrintClick, onExportCsv, isGridPopulated }) => {
  return (
    <div className="absolute top-6 right-8 flex items-center space-x-6">
      <button onClick={onInfoClick} className="text-gray-500 hover:text-yellow-400 transition-colors duration-200" title="Notice d'utilisation">
        <Lightbulb size={24} />
      </button>
      <button onClick={onSaveClick} className="text-gray-500 hover:text-blue-500 transition-colors duration-200" title="Sauvegarder / Charger">
        <Save size={24} />
      </button>
      <button onClick={onPrintClick} className="text-gray-500 hover:text-red-500 transition-colors duration-200" title="Imprimer">
        <Printer size={24} />
      </button>
      {isGridPopulated && (
        <button onClick={onExportCsv} className="text-gray-500 hover:text-green-600 transition-colors duration-200" title="Exporter en CSV">
          <FileSpreadsheet size={24} />
        </button>
      )}
    </div>
  );
};

export default ActionIcons;
