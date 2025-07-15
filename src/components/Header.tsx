import React from 'react';
import ActionIcons from './ActionIcons';

interface HeaderProps {
  onInfoClick: () => void;
  onSaveClick: () => void;
  onPrintClick: () => void;
  onExportCsv: () => void;
  isGridPopulated: boolean;
}

const Header: React.FC<HeaderProps> = ({ onInfoClick, onSaveClick, onPrintClick, onExportCsv, isGridPopulated }) => {
  return (
    <header className="relative bg-white shadow-sm no-print">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-slate-900">
          Analyse des Facteurs Clés d'Échec (FCE)
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Outil d'aide à l'identification et à la mitigation des risques pour les projets de reprise en SCOP.
        </p>
        <ActionIcons
          onInfoClick={onInfoClick}
          onSaveClick={onSaveClick}
          onPrintClick={onPrintClick}
          onExportCsv={onExportCsv}
          isGridPopulated={isGridPopulated}
        />
      </div>
    </header>
  );
};

export default Header;
