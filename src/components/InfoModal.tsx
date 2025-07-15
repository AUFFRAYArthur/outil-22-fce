import React from 'react';
import { X } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center no-print" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Notice d'utilisation et Enjeux de l'outil</h2>
        
        <div className="space-y-4 text-gray-700 max-h-[70vh] overflow-y-auto pr-4">
          <p className="text-lg">
            Cet outil est conçu pour vous accompagner dans une étape critique de votre projet de reprise d'entreprise en SCOP: <strong>l'analyse des facteurs clés d'échec (FCE)</strong>.
          </p>

          <h3 className="font-semibold text-gray-800 pt-3 text-xl">Quels sont les enjeux ?</h3>
          <p>
            La reprise d'une entreprise est un projet complexe. L'analyse des risques n'est pas une simple formalité, mais une démarche stratégique qui vise à :
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Sécuriser le projet :</strong> Anticiper les difficultés permet de mettre en place des actions préventives et de renforcer la solidité de votre plan de reprise.</li>
            <li><strong>Aligner l'équipe :</strong> Construire une vision partagée des risques et des priorités entre tous les salariés repreneurs. C'est un premier acte fort de management coopératif.</li>
            <li><strong>Faciliter la prise de décision :</strong> Disposer d'une base objective pour orienter vos choix stratégiques, financiers et organisationnels.</li>
            <li><strong>Crédibiliser votre démarche :</strong> Présenter une analyse structurée des risques est un gage de sérieux et de maturité pour vos partenaires (banques, URSCOP, etc.).</li>
          </ul>

          <h3 className="font-semibold text-gray-800 pt-3 text-xl">Comment utiliser l'outil ?</h3>
          <ol className="list-decimal list-inside space-y-3 pl-4">
            <li>
              <strong>1. Identification des Risques :</strong>
              <br />
              Dans la section 1, parcourez les catégories (Humains, Financiers, etc.) et sélectionnez les risques qui vous semblent pertinents pour votre projet. Vous pouvez également ajouter des risques personnalisés qui sont spécifiques à votre situation.
            </li>
            <li>
              <strong>2. Évaluation et Analyse :</strong>
              <br />
              Votre sélection alimente la grille d'analyse dans la section 2. Pour chaque risque, évaluez sa <strong>Gravité</strong> (l'impact s'il survient) et sa <strong>Probabilité</strong> d'occurrence. Cette cotation vous aide à hiérarchiser les risques.
            </li>
            <li>
              <strong>3. Définition des Actions Correctives :</strong>
              <br />
              La colonne "Actions de mitigation" est le cœur de votre travail. Pour chaque risque identifié, définissez des actions concrètes, réalistes et mesurables pour le réduire ou le maîtriser. Les propositions initiales sont des pistes, à vous de les adapter.
            </li>
            <li>
              <strong>4. Sauvegarde et Partage :</strong>
              <br />
              Utilisez les icônes en haut à droite pour sauvegarder votre travail (format JSON) et le recharger plus tard, ou pour l'imprimer (format PDF) afin de l'utiliser comme support de discussion lors de vos réunions.
            </li>
          </ol>

          <blockquote className="border-l-4 border-yellow-400 bg-yellow-50 p-4 mt-6">
            <p className="font-semibold text-yellow-800">Un outil au service de votre réflexion</p>
            <p className="text-yellow-700">
              Cet outil ne remplace pas votre jugement. Il a pour vocation de structurer votre réflexion, de faciliter le dialogue et de vous aider à construire collectivement un projet de reprise plus robuste et plus serein. La qualité de l'analyse dépendra de votre implication et de la richesse de vos échanges.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
