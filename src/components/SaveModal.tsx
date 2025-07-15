import React, { useRef } from 'react';
import { X, Upload, Download } from 'lucide-react';

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: () => void;
  onImport: (file: File) => void;
}

const SaveModal: React.FC<SaveModalProps> = ({ isOpen, onClose, onExport, onImport }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImport(file);
      onClose();
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center no-print" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sauvegarder / Charger</h2>
        
        <div className="space-y-6">
          {/* Export Section */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <Download className="mr-2 h-5 w-5 text-indigo-600" />
              Exporter la grille actuelle
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Sauvegardez votre grille d'analyse (risques sélectionnés et personnalisés) dans un fichier JSON. Vous pourrez le recharger plus tard.
            </p>
            <button
              onClick={onExport}
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Exporter en JSON
            </button>
          </div>

          {/* Import Section */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <Upload className="mr-2 h-5 w-5 text-emerald-600" />
              Importer une grille
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Chargez une grille d'analyse précédemment sauvegardée depuis un fichier JSON. Attention, cela remplacera votre grille actuelle.
            </p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".json"
              onChange={handleFileChange}
            />
            <button
              onClick={handleImportClick}
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Choisir un fichier...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveModal;
