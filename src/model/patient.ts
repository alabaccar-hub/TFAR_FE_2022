export interface Patient {
    idPatient: number;

    ndPatient: string;
  
    nom: string;
  
    prenom: string;
  
    sexe?: string //Sexe;
  
    dateNaissance?: string;
  
    lieuNaissance?: string;
  
    adresse?: string;
  
    reperes?: string;
  
    gouvernorat?: string //Gouvernorat;
  
    tel?: string;
  
    prenomPere?: string;
  
    nomMere?: string;
  
    prenomMere?: string;
  
    nomGmp?: string;
  
    nomGmm?: string;
  
    //age?: number;
  
    idFiche: number;
  
}
