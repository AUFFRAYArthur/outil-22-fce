import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FceSelector from './components/FceSelector';
import FceGrid from './components/FceGrid';
import InfoModal from './components/InfoModal';
import SaveModal from './components/SaveModal';
import ConfirmDeleteModal from './components/ConfirmDeleteModal';
import { fceCategories } from './data/fceData';
import type { FCE, AnalysisData, SavedData, Level } from './types';

type GridItem = FCE & AnalysisData;

function App() {
  const [selectedFceIds, setSelectedFceIds] = useState<Set<string>>(new Set());
  const [customFces, setCustomFces] = useState<Map<string, FCE>>(new Map());
  const [analysisData, setAnalysisData] = useState<Map<string, AnalysisData>>(new Map());
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
  const [fceToDelete, setFceToDelete] = useState<GridItem | null>(null);

  const fceCategoryMap = useMemo(() => {
    const map = new Map<string, string>();
    fceCategories.forEach(category => {
      category.fces.forEach(fce => {
        map.set(fce.id, category.name);
      });
    });
    return map;
  }, []);

  const allFces = useMemo(() => {
    const fceMap = new Map<string, FCE>();
    fceCategories.forEach(category => {
      category.fces.forEach(fce => {
        fceMap.set(fce.id, fce);
      });
    });
    customFces.forEach((fce, id) => {
      fceMap.set(id, fce);
    });
    return fceMap;
  }, [customFces]);

  const gridItems = useMemo(() => {
    const items = Array.from(selectedFceIds).map(id => {
      const fce = allFces.get(id);
      const analysis = analysisData.get(id);
      return fce && analysis ? { ...fce, ...analysis } : null;
    }).filter((item): item is GridItem => item !== null);

    items.sort((a, b) => {
      const categoryA = fceCategoryMap.get(a.id) || "Risques Personnalisés";
      const categoryB = fceCategoryMap.get(b.id) || "Risques Personnalisés";
      const categorySortOrder = [...fceCategories.map(cat => cat.name), "Risques Personnalisés"];
      const indexA = categorySortOrder.indexOf(categoryA);
      const indexB = categorySortOrder.indexOf(categoryB);
      if (indexA !== indexB) return indexA - indexB;
      return a.name.localeCompare(b.name);
    });
    return items;
  }, [selectedFceIds, allFces, analysisData, fceCategoryMap]);

  const handleAddFce = (fceId: string) => {
    if (selectedFceIds.has(fceId)) return;
    const fce = allFces.get(fceId);
    if (!fce) return;
    setSelectedFceIds(prevIds => new Set(prevIds).add(fceId));
    setAnalysisData(prevData => new Map(prevData).set(fceId, { mitigation: fce.mitigation, severity: '', probability: '' }));
  };

  const handleAddCustomFce = (riskName: string) => {
    if (!riskName.trim()) return;
    const newId = `custom_${Date.now()}`;
    const newFce: FCE = { id: newId, name: riskName, mitigation: 'Personnalisée - à définir dans la grille.' };
    setCustomFces(prevMap => new Map(prevMap).set(newId, newFce));
    setSelectedFceIds(prevIds => new Set(prevIds).add(newId));
    setAnalysisData(prevData => new Map(prevData).set(newId, { mitigation: newFce.mitigation, severity: '', probability: '' }));
  };

  const handleRequestDelete = (item: GridItem) => {
    setFceToDelete(item);
  };

  const handleConfirmDelete = () => {
    if (!fceToDelete) return;
    const fceId = fceToDelete.id;

    setSelectedFceIds(prevIds => {
      const newIds = new Set(prevIds);
      newIds.delete(fceId);
      return newIds;
    });
    setAnalysisData(prevData => {
      const newData = new Map(prevData);
      newData.delete(fceId);
      return newData;
    });
    if (fceId.startsWith('custom_')) {
      setCustomFces(prevMap => {
        const newMap = new Map(prevMap);
        newMap.delete(fceId);
        return newMap;
      });
    }
    setFceToDelete(null); // Close modal after deletion
  };

  const handleAnalysisChange = (fceId: string, field: keyof AnalysisData, value: string) => {
    setAnalysisData(prevData => {
      const newData = new Map(prevData);
      const currentItem = newData.get(fceId);
      if (currentItem) {
        newData.set(fceId, { ...currentItem, [field]: value as Level });
      }
      return newData;
    });
  };

  const handleExport = () => {
    const dataToSave: SavedData = {
      version: "1.1.0",
      createdAt: new Date().toISOString(),
      data: {
        selectedFceIds: Array.from(selectedFceIds),
        customFces: Array.from(customFces.values()),
        analysisData: Object.fromEntries(analysisData),
      }
    };
    const jsonString = JSON.stringify(dataToSave, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scop-risk-analysis-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setSaveModalOpen(false);
  };

  const handleImport = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text !== 'string') throw new Error("File content is not a string");
        const parsedData: SavedData = JSON.parse(text);
        if (parsedData.version && parsedData.data && Array.isArray(parsedData.data.selectedFceIds) && Array.isArray(parsedData.data.customFces)) {
          const newCustomFces = new Map<string, FCE>(parsedData.data.customFces.map(fce => [fce.id, fce]));
          const newSelectedFceIds = new Set<string>(parsedData.data.selectedFceIds);
          const newAnalysisData = new Map(Object.entries(parsedData.data.analysisData || {}));
          setCustomFces(newCustomFces);
          setSelectedFceIds(newSelectedFceIds);
          setAnalysisData(newAnalysisData);
        } else {
          alert("Le fichier JSON n'est pas valide ou son format est incorrect.");
        }
      } catch (error) {
        console.error("Failed to parse JSON:", error);
        alert("Erreur lors de la lecture du fichier. Assurez-vous que c'est un fichier JSON valide exporté par cet outil.");
      }
    };
    reader.readAsText(file);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportCsv = () => {
    if (gridItems.length === 0) return;

    const escapeCsvCell = (cell: string) => {
      if (/[",\n]/.test(cell)) {
        return `"${cell.replace(/"/g, '""')}"`;
      }
      return cell;
    };

    const headers = ['Catégorie', 'Facteur Clé d\'Échec', 'Mesure de Mitigation', 'Gravité', 'Probabilité'];
    const rows = gridItems.map(item => {
      const category = fceCategoryMap.get(item.id) || "Risques Personnalisés";
      return [
        escapeCsvCell(category),
        escapeCsvCell(item.name),
        escapeCsvCell(item.mitigation),
        escapeCsvCell(item.severity),
        escapeCsvCell(item.probability)
      ].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scop-risk-analysis-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Header
        onInfoClick={() => setInfoModalOpen(true)}
        onSaveClick={() => setSaveModalOpen(true)}
        onPrintClick={handlePrint}
        onExportCsv={handleExportCsv}
        isGridPopulated={gridItems.length > 0}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <FceSelector categories={fceCategories} selectedFceIds={selectedFceIds} onAddFce={handleAddFce} onAddCustomFce={handleAddCustomFce} />
        <FceGrid gridItems={gridItems} onRequestDelete={handleRequestDelete} onAnalysisChange={handleAnalysisChange} />
      </main>
      <InfoModal isOpen={isInfoModalOpen} onClose={() => setInfoModalOpen(false)} />
      <SaveModal isOpen={isSaveModalOpen} onClose={() => setSaveModalOpen(false)} onExport={handleExport} onImport={handleImport} />
      <ConfirmDeleteModal
        isOpen={!!fceToDelete}
        onClose={() => setFceToDelete(null)}
        onConfirm={handleConfirmDelete}
        fceName={fceToDelete?.name || ''}
      />
    </>
  );
}

export default App;
