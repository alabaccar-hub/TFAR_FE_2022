import { Cytogenetique } from './cytogenetique';
import { Frere } from './frere';
import { Androgene } from 'src/model/androgene';
import { Patient } from './patient';
import {Cousin} from './cousin'
export interface Fiche {

    idFiche?: number;

  ndossierFiche?: string;

  dateDiagnostique?: Date;

  dateEnregistrement?: Date;  //3

  //histoire familiale:

  degConsang?: string;

  nbVivant?: number;

  nbMort?: number;

  placeEnfant?: number;

  mortNe?: number;

  avortement?: number;

  nbCousin?: number;

  nbMembre: number;

  arbreGenealogique?: string;

  arbreGenealogiqueCancer?: string;  //10

  // circon de decouverte :

  syndromeAnemique?: string //Enum1;

  syndromeHem?: string //Enum1;

  syndromeInf?: string //Enum1;

  enqueteFam?: string //Enum1;

  decouverteFort?: string //Enum1;

  cancer?: string //Enum1;

  typeCancer?: string;

  autreCirDec?: string;   //8

  //sandrome malformatif :

  tailleNaiss?: number;

  poidsNaiss?: number;

  hypotrophie?: string //Enum1;

  troubleCroi?: string //Enum1;

  aageChDiag?: number;

  aageOssDiag?: number;

  ageRetard?: number;

  poids?: number;

  taille?: number;

  mageChDiag?: number;

  mageOssDiag?: number;

  poidsDS?: string;

  tailleDS?: string;

  atteinteCut?: string //Enum1;

  tacheCaf?: string //Enum1;

  dos?: string //Enum1;

  ventre?: string //Enum1;

  membreSup?: string //Enum1;

  membreInf?: string //Enum1;

  visage?: string //Enum1;

  thorax?: string //Enum1;

  hyperPig?: string //Enum1;

  couleurPeau?: string;

  autreAtCut?: string;

  atteinteTete?: string //Enum1;

  microcephalie?: string //Enum1;

  facieTrig?: string //Enum1;

  traitsFin?: string //Enum1;

  microphtalmie?: string //Enum1;

  autreAtTete?: string;

  malUro?: string //Enum1;

  uiv?: string //Enum2;

  echo?: string //Enum2;

  reinEctop?: string //Enum1;

  siegeEctopie?: string;

  reinFerChev?: string //Enum1;

  petitRein?: string;

  reinUnique?: string //Enum1;

  ectopTest?: string;

  anomVerge?:string;

  anomVoisUri?:string;

  typeAnomVoisUri?:string;

  retardPubertaire?: string //Enum1;

  mtanner?: string;

  ptanner?: string;

  ttanner?: string;

  autreUrogenital?: string;

  atteinteOss?: string //Enum1;

  anomPouce?: string //Enum1;

  anomAutreDoigts: string //Enum1;

  courtsTrapus?: string //Enum1;

  syndactylie?: string //Enum1;

  autreAnomAutreDoigts?: string

  agenesieRadius?: string //Enum1;

  anomOrteil?: string //Enum1;

  typeAnomOrteil?: string;

  bifide?: string //Enum1;

  luxCongHanche?: string //Enum1;

  anomRachis?: string //Enum1;

  autreAnomOss?: string;

  anomNeuro?: string //Enum1;

  retardMent?: string //Enum1;

  performanceScolaire?: string //Enum3;

  hypoacousie?: string //Enum1;

  autreAnomNeuro?: string;

  strabisme?: string //Enum1;

  anomCardVas?: string //Enum1;

  echoCoeur?: string //Enum1;

  preciseAnomCardio?: string;

  anomDig?: string //Enum1;

  preciseAnomDig?: string;

  endocrinopathie?: string //Enum1;

  diabete?: string //Enum1;

  hypothyroidie?: string //Enum1;

  ageDecouverte?: number;

  autreSympEndo?: string;

  deficiteGH?: string //Enum1;

  autreAnomCong?: string;

  //****************************** 78 */

  // signe hema :

  hb?: number;

  vgm?: number;

  retic?: number;

  leuco?: number;

  pnn?: number;

  plq?: number;

  ageDebutManiHema?: number;

  hbInf?: string //Enum1;

  plq_inf?: string //Enum1;

  pnnInf?: string //Enum1;

  electrophoreseHb?: string //Enum2;

  hbf?: number;

  myelogramme?: string //Enum2;

  cellularite?: string //Enum4;

  erythroblaste?: number;

  morphologie: string //Enum5;

  bom?: string //Enum6;

  pourcenAdipo?: number;

  /* 18 */

  // biologie moleculaire :

  ubiquitination?: string //Enum1;

  resUbiquitination?: string //Enum7;

  groupComp?: string;

  mutationFANC?: string;

  /* 4 */

  // congélation cellule :

  congelationCellule?: string //Enum2;

  labo?: string;

  typePrelevement?: string;

  /* 3 */

  // score clinique :

  scoreClinique?: number;

  scoreEBMT?: number;

  score?: string //Score;

  // traitement  :

  transfusion?: string //Enum1;

  ageTransf?: number;

  nbCG?: string //Enum8;

  chelationFer?: string //Enum1;

  delaiDiag?: number;

  nbCP?: string //Enum8;

  chelateur?: string;    //7


  nilevar?: string //Enum1;

  oxymetholone?: string //Enum1;

  androtordyl?: string //Enum1;

  autreAndrogene?: string;

  androDebut?: Date;

  androFin?: Date;

  observance?: string;  //7



  toxicite?: string //Toxicite;

  autreToxicite?: string;   //2



  enqueteHLA?: string //Enum1;

  pourquoiEnqHLA?: string;

  nbFratTyp?: number;

  nbFratNTyp?: number;

  donneurComp?: number;

  preciseDonneur?: string;

  donneur?: string;

  greffeFaite?: string //Enum1;

  delaiRappDiag?: number;

  pourquoiNfaite?: string;

  cyclophosphamide?: string //Enum1;

  doseCum1?: number;

  fludarabine?: string //Enum1;

  doseCum2?: number;

  busulfan?: string //Enum1;

  doseCum3?: number;

  autreConditionnement?: string;

  irradiation?: string;

  serotherapie?: string //Enum2;

  sal?: string //Enum1;

  doseSAL?: number;

  sourceCellule?: string;

  sortieAplasie?: number;

  gradeaGvH?: string //Enum9;

  cgvH?: string //Enum10;

  mvo?: string //Enum1;

  complicationPulmonaire?: string //Enum1;

  preciseCompPulm?: string;

  survieJ100?: string //Enum1;   //29



  smd?: string //Enum1;

  critereDiagSMD?: string;

  traitementSMD?: string;

  ageDiagSMD?: number;

  transformationAigue?: string //Enum11;

  ageDiagLA?: number;

  traitementLA?: string //Enum1;

  cancerE?: string //Enum1;

  localisation?: string;

  typeHistologique?: string;

  traitementCancer?: string //Enum1;

  preciseTraitement?: string;

  evolution_cyto?: string //Enum1;

  formuleChrom?: string;

  ageE?: number;

  autresCancers?: string;

  ddn?: Date;

  statut?: string //Statut;

  survieGlobale?: number;   //19

  /* 64 */


  codeUser?: number;



  // new attributs  :


  patient?:Patient;

  androgene?:Array<Androgene>;

  cousin?:Cousin;

  frere?:Frere;

  cytogenetique?:Array<Cytogenetique>;

}
