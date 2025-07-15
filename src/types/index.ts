export interface FCE {
  id: string;
  name: string;
  mitigation: string;
}

export interface Category {
  name: string;
  fces: FCE[];
}

export type Level = 'Élevée' | 'Moyenne' | 'Faible' | '';

export interface AnalysisData {
  mitigation: string;
  severity: Level;
  probability: Level;
}

export interface SavedData {
  version: string;
  createdAt: string;
  data: {
    selectedFceIds: string[];
    customFces: FCE[];
    analysisData: { [key: string]: AnalysisData };
  }
}
