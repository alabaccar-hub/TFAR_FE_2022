import { Androgene } from './../../../model/androgene';
import { Cytogenetique } from './../../../model/cytogenetique';
import { Fiche } from 'src/model/fiche';
import { Patient } from './../../../model/patient';
import { Departement } from '../../../model/departement';
import { Component, OnDestroy, OnInit, ViewChild, DoCheck } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Observable} from 'rxjs';
import { Organisme } from 'src/model/organisme';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/user';
import { FormControl } from '@angular/forms';
import { FicheService } from 'src/app/services/fiche.service';
import { PatientComponent } from './patient/patient.component';
import { HistoireFamilialeComponent } from './histoire-familiale/histoire-familiale.component';
import { AndrogeneComponent } from './androgene/androgene.component';
import { CirconDeDecouverteComponent } from './circon-de-decouverte/circon-de-decouverte.component';
import { SyndromeMalformatifComponent } from './syndrome-malformatif/syndrome-malformatif.component';
import { EtudeCytoComponent } from './etude-cyto/etude-cyto.component';
import { SignesHemaComponent } from './signes-hema/signes-hema.component';
import { BiologieMoleculaireComponent } from './biologie-moleculaire/biologie-moleculaire.component';
import { CongelationCellComponent } from './congelation-cell/congelation-cell.component';
import { ScoreCliniqueComponent } from './score-clinique/score-clinique.component';
import { TraitementComponent } from './traitement/traitement.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fiche2Service } from 'src/app/services/fiche2.service';


@Component({
  selector: 'app-fiche2',
  templateUrl: './fiche2.component.html',
  styleUrls: ['./fiche2.component.css']
})
export class Fiche2Component implements OnInit, OnDestroy, DoCheck  {

  @ViewChild(PatientComponent) patientComponent!: PatientComponent;
  @ViewChild(AndrogeneComponent) androgeneComponent!: AndrogeneComponent;
  @ViewChild(HistoireFamilialeComponent) histoireFamilialeComponent!: HistoireFamilialeComponent;
  @ViewChild(CirconDeDecouverteComponent) circonDeDecouverteComponent!: CirconDeDecouverteComponent;
  @ViewChild(SyndromeMalformatifComponent) syndromeMalformatifComponent!: SyndromeMalformatifComponent;
  @ViewChild(EtudeCytoComponent) etudeCytoComponent!: EtudeCytoComponent;
  @ViewChild(SignesHemaComponent) SignesHemaComponent!: SignesHemaComponent;
  @ViewChild(BiologieMoleculaireComponent) biologieMoleculaireComponent!: BiologieMoleculaireComponent;
  @ViewChild(CongelationCellComponent) congelationCellComponent!: CongelationCellComponent;
  @ViewChild(ScoreCliniqueComponent) ScoreCliniqueComponent!: ScoreCliniqueComponent;
  @ViewChild(TraitementComponent) TraitementComponent!: TraitementComponent;


  var: boolean = false
  selectedDepartement: any;
  selectedOrganisme: any;
  selectedUser: any;
  organismes$!: Observable<Organisme[]>;
  departements$!: Observable<Departement[]>;
  users$!: Observable<User[]>;
  ndfiche: any;
  ficheI!: Fiche;
  date1 = new FormControl(new Date());
  date2 = new FormControl(new Date());
  ficheb!: Fiche;

  parentComponent!: any;

  ficheUpdate!: Fiche;
  patientupdate!: Patient | undefined;
  HistoireFamiliale!: Fiche;
  circonstanceDecouverte!: Fiche;
  SyndromeMalformatif!: Fiche;
  EtudeCyto!: Array<Cytogenetique> | undefined;
  androgene!: Array<Androgene> | undefined;
  SignesHema!: Fiche;
  BiologieMoleculaire!: Fiche;
  CongelationCell!: Fiche;
  ScoreClinique!: Fiche;
  Traitement!: Fiche;

  ficheToSave!:Fiche;

  idOfFiche!:number | undefined;






  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private ficheService: FicheService, private router: Router, private userService: UserService, private _snackBar: MatSnackBar, private fiche2Service: Fiche2Service) {






  }
  ngDoCheck(): void {

  }



  ngOnDestroy(): void {




  }

  ngOnInit(): void {
    this.getAllUsers();
    this.userService.getAllUsers().subscribe(data => this.selectedUser = data[0]?.code);

    this.ficheI = { dateDiagnostique: this.date1.value, dateEnregistrement: this.date2.value, codeUser: this.selectedUser } as Fiche;


    this.fiche2Service.receivedFiche().subscribe(data => {
      this.ficheUpdate = data;
      console.log('fiche update ', this.ficheUpdate);
      this.idOfFiche=this.ficheUpdate.idFiche;
      this.decomposeFicheUpdate(this.ficheUpdate);

    });




  }

  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, { duration: duration });
  }


  getAllUsers() {
    this.users$ = this.userService.getAllUsers().pipe(map(data => {
      console.log(data, "mpmpmp"); return data
    }));
  }

  saveFiche() {

    this.ficheService.saveFiche(this.recupererFicheInParent()).subscribe(
      res => {
        console.log('fiche saved   :  ',res)
        this.router.navigate(["dashboard/fiche"]);
      },
      err => {
        console.log(err.message);

        if (err.status == 500) {
          this.openSnackBar("You must enter the required attributes", "Submit data fail", 3000);

        }

      }
    );
  }

  updateFiche() {

    let ficheupd:Fiche=this.recupererFicheInParent();
    ficheupd.idFiche=this.ficheUpdate.idFiche;

    console.log(ficheupd);

    this.ficheService.updateFiche(ficheupd).subscribe(
      res => {
        console.log('fiche saved in update  :  ',res)
        this.router.navigate(["dashboard/fiche"]);
      },
      err => {
        console.log(err.message);

        if (err.status == 500) {
          this.openSnackBar("You must enter the required attributes", "Submit data fail", 3000);

        }

      }
    );
  }



  toFiche() {
    this.router.navigate(["dashboard/fiche"]);
  }

  do() {
    console.log(this.ficheI.dateEnregistrement, "ddddoooo");

    console.log(typeof (this.ficheI.dateEnregistrement), "ddddoooo1");
  }

  recupererFicheInParent():Fiche{

    this.ficheToSave = {} as Fiche;
    Object.assign(this.ficheToSave, this.ficheI);

    let patient = this.patientComponent.savePatientInformations();
    this.ficheToSave.patient = patient;
    //Object.assign(ficheToSave , patient);
    //ficheToSave.patient = patient;

    console.log('patient to :  ',this.ficheToSave.patient);

    let histoireFamiliale = this.histoireFamilialeComponent.saveFamille();
    Object.assign(this.ficheToSave, histoireFamiliale);

    let circonstanceDecouverte = this.circonDeDecouverteComponent.saveCirDecInformations();
    Object.assign(this.ficheToSave, circonstanceDecouverte);

    let SyndromeMalformatif = this.syndromeMalformatifComponent.saveSandMalInformations();
    Object.assign(this.ficheToSave, SyndromeMalformatif);

    let EtudeCyto = this.etudeCytoComponent.saveCytoInformations();
    this.ficheToSave.cytogenetique = EtudeCyto;

    let androgene = this.androgeneComponent.saveAndrogeneInformations();
    this.ficheToSave.androgene = androgene;

    let SignesHema = this.SignesHemaComponent.saveSigneHemaInformations();
    Object.assign(this.ficheToSave, SignesHema);

    let BiologieMoleculaire = this.biologieMoleculaireComponent.saveBioMolecInformations();
    Object.assign(this.ficheToSave, BiologieMoleculaire);

    let CongelationCell = this.congelationCellComponent.saveCongCellInformations();
    Object.assign(this.ficheToSave, CongelationCell);

    let ScoreClinique = this.ScoreCliniqueComponent.saveScoreCliInformations();
    Object.assign(this.ficheToSave, ScoreClinique);

    let Traitement = this.TraitementComponent.saveTraitInformations();
    Object.assign(this.ficheToSave, Traitement);

    console.log(this.ficheToSave, "mokkkkkk");

    return this.ficheToSave;



  }


  decomposeFicheUpdate(fiche: Fiche) {

    console.log('wxc',fiche);

    //this.ficheI.idFiche = fiche.idFiche;
    this.ficheI.dateDiagnostique = fiche.dateDiagnostique;
    this.ficheI.dateEnregistrement = fiche.dateEnregistrement;
    this.ficheI.codeUser = fiche.codeUser;
    this.ficheI.ndossierFiche = fiche.ndossierFiche;
    this.patientupdate = fiche.patient;
    console.log('update patient ', this.patientupdate);

    this.HistoireFamiliale = {
      degConsang: fiche.degConsang, nbVivant: fiche.nbVivant,
      nbMort: fiche.nbMort, placeEnfant: fiche.placeEnfant, mortNe: fiche.mortNe,
      avortement: fiche.avortement, nbCousin: fiche.nbCousin, nbMembre: fiche.nbMembre,
      arbreGenealogique: fiche.arbreGenealogique, arbreGenealogiqueCancer: fiche.arbreGenealogiqueCancer
    } as Fiche;

    this.circonstanceDecouverte = {
      syndromeAnemique: fiche.syndromeAnemique,
      syndromeHem: fiche.syndromeHem, syndromeInf: fiche.syndromeInf,
      enqueteFam: fiche.enqueteFam, decouverteFort: fiche.decouverteFort,
      cancer: fiche.cancer, typeCancer: fiche.typeCancer, autreCirDec: fiche.autreCirDec
    } as Fiche;

    this.SyndromeMalformatif = {
      tailleNaiss: fiche.tailleNaiss, poidsNaiss: fiche.poidsNaiss, hypotrophie: fiche.hypotrophie,
      troubleCroi: fiche.troubleCroi, aageChDiag: fiche.aageChDiag, aageOssDiag: fiche.aageOssDiag, ageRetard: fiche.ageRetard,
      poids: fiche.poids, taille: fiche.taille, mageChDiag: fiche.mageChDiag, mageOssDiag: fiche.mageOssDiag,
      poidsDS: fiche.poidsDS, tailleDS: fiche.tailleDS, atteinteCut: fiche.atteinteCut, tacheCaf: fiche.tacheCaf, dos: fiche.dos,
      ventre: fiche.ventre, membreSup: fiche.membreSup, membreInf: fiche.membreInf, visage: fiche.visage, thorax: fiche.thorax,
      hyperPig: fiche.hyperPig, couleurPeau: fiche.couleurPeau, autreAtCut: fiche.autreAtCut, atteinteTete: fiche.atteinteTete,
      microcephalie: fiche.microcephalie, facieTrig: fiche.facieTrig, traitsFin: fiche.traitsFin, microphtalmie: fiche.microphtalmie,
      autreAtTete: fiche.autreAtTete, malUro: fiche.malUro, uiv: fiche.uiv, echo: fiche.echo, reinEctop: fiche.reinEctop,
      siegeEctopie: fiche.siegeEctopie, reinFerChev: fiche.reinFerChev, petitRein: fiche.petitRein, reinUnique: fiche.reinUnique,
      ectopTest: fiche.ectopTest, anomVerge: fiche.anomVerge, anomVoisUri: fiche.anomVoisUri, typeAnomVoisUri: fiche.typeAnomVoisUri,
      retardPubertaire: fiche.retardPubertaire, mtanner: fiche.mtanner, ptanner: fiche.ptanner, ttanner: fiche.ttanner,
      autreUrogenital: fiche.autreUrogenital, atteinteOss: fiche.atteinteOss, anomPouce: fiche.anomPouce, anomAutreDoigts: fiche.anomAutreDoigts,
      courtsTrapus: fiche.courtsTrapus, syndactylie: fiche.syndactylie, autreAnomAutreDoigts: fiche.autreAnomAutreDoigts,
      agenesieRadius: fiche.agenesieRadius, anomOrteil: fiche.anomOrteil, typeAnomOrteil: fiche.typeAnomOrteil, bifide: fiche.bifide,
      luxCongHanche: fiche.luxCongHanche, anomRachis: fiche.anomRachis, autreAnomOss: fiche.autreAnomOss, anomNeuro: fiche.anomNeuro,
      retardMent: fiche.retardMent, performanceScolaire: fiche.performanceScolaire, hypoacousie: fiche.hypoacousie,
      autreAnomNeuro: fiche.autreAnomNeuro, strabisme: fiche.strabisme, anomCardVas: fiche.anomCardVas, echoCoeur: fiche.echoCoeur,
      preciseAnomCardio: fiche.preciseAnomCardio, anomDig: fiche.anomDig, preciseAnomDig: fiche.preciseAnomDig,
      endocrinopathie: fiche.endocrinopathie, diabete: fiche.diabete, hypothyroidie: fiche.hypothyroidie, ageDecouverte: fiche.ageDecouverte,
      autreSympEndo: fiche.autreSympEndo, deficiteGH: fiche.deficiteGH, autreAnomCong: fiche.autreAnomCong
    } as Fiche;

    this.EtudeCyto = fiche.cytogenetique;
    this.androgene = fiche.androgene;
    this.SignesHema = {
      hb: fiche.hb, vgm: fiche.vgm, retic: fiche.retic, leuco: fiche.leuco, pnn: fiche.pnn, plq: fiche.plq, ageDebutManiHema: fiche.ageDebutManiHema,
      hbInf: fiche.hbInf, plq_inf: fiche.plq_inf, pnnInf: fiche.pnnInf, electrophoreseHb: fiche.electrophoreseHb, hbf: fiche.hbf, myelogramme: fiche.myelogramme,
      cellularite: fiche.cellularite, erythroblaste: fiche.erythroblaste, morphologie: fiche.morphologie, bom: fiche.bom, pourcenAdipo: fiche.pourcenAdipo
    } as Fiche;

    this.BiologieMoleculaire = {
      ubiquitination: fiche.ubiquitination, resUbiquitination: fiche.resUbiquitination, groupComp: fiche.groupComp,
      mutationFANC: fiche.mutationFANC
    } as Fiche;

    this.CongelationCell = { congelationCellule: fiche.congelationCellule, labo: fiche.labo, typePrelevement: fiche.typePrelevement } as Fiche;

    this.ScoreClinique = { scoreClinique: fiche.scoreClinique, scoreEBMT: fiche.scoreEBMT, score: fiche.score } as Fiche


    this.Traitement = {
      transfusion: fiche.transfusion, ageTransf: fiche.ageTransf, nbCG: fiche.nbCG, chelationFer: fiche.chelationFer,
      delaiDiag: fiche.delaiDiag, nbCP: fiche.nbCP, chelateur: fiche.chelateur, nilevar: fiche.nilevar, oxymetholone: fiche.oxymetholone,
      androtordyl: fiche.androtordyl, autreAndrogene: fiche.autreAndrogene, androDebut: fiche.androDebut, androFin: fiche.androFin,
      observance: fiche.observance, toxicite: fiche.toxicite, autreToxicite: fiche.autreToxicite, enqueteHLA: fiche.enqueteHLA,
      pourquoiEnqHLA: fiche.pourquoiEnqHLA, nbFratTyp: fiche.nbFratTyp, nbFratNTyp: fiche.nbFratNTyp, donneurComp: fiche.donneurComp,
      preciseDonneur: fiche.preciseDonneur, donneur: fiche.donneur, greffeFaite: fiche.greffeFaite, delaiRappDiag: fiche.delaiRappDiag,
      pourquoiNfaite: fiche.pourquoiNfaite, cyclophosphamide: fiche.cyclophosphamide, doseCum1: fiche.doseCum1, fludarabine: fiche.fludarabine,
      doseCum2: fiche.doseCum2, busulfan: fiche.busulfan, doseCum3: fiche.doseCum3, autreConditionnement: fiche.autreConditionnement,
      irradiation: fiche.irradiation, serotherapie: fiche.serotherapie, sal: fiche.sal, doseSAL: fiche.doseSAL, sourceCellule: fiche.sourceCellule,
      sortieAplasie: fiche.sortieAplasie, gradeaGvH: fiche.gradeaGvH, cgvH: fiche.cgvH, mvo: fiche.mvo, complicationPulmonaire: fiche.complicationPulmonaire,
      preciseCompPulm: fiche.preciseCompPulm, survieJ100: fiche.survieJ100, smd: fiche.smd, critereDiagSMD: fiche.critereDiagSMD, traitementSMD: fiche.traitementSMD,
      ageDiagSMD: fiche.ageDiagSMD, transformationAigue: fiche.transformationAigue, ageDiagLA: fiche.ageDiagLA, traitementLA: fiche.traitementLA,
      cancerE: fiche.cancerE, localisation: fiche.localisation, typeHistologique: fiche.typeHistologique, traitementCancer: fiche.traitementCancer,
      preciseTraitement: fiche.preciseTraitement, evolution_cyto: fiche.evolution_cyto, formuleChrom: fiche.formuleChrom, ageE: fiche.ageE, autresCancers: fiche.autresCancers,
      ddn: fiche.ddn, statut: fiche.statut, survieGlobale: fiche.survieGlobale
    } as Fiche;


return this.ficheI.idFiche
  }

  submit(){
    if(Number.isFinite(this.idOfFiche)==true){

      console.log('update mokhtar');

      this.updateFiche();

  }else{

    this.saveFiche();

    console.log('create mokhtar');

  }

}

}

