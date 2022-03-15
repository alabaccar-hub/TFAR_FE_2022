import { FicheList } from './../../../model/fiche-list';
import { Fiche } from './../../../model/fiche';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FicheService } from 'src/app/services/fiche.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Fiche2Service } from 'src/app/services/fiche2.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {
  fiches$!: Observable<Fiche[]>;
  fiche$!: Observable<Fiche>;

  fichen!:Fiche;
  dataSource!: MatTableDataSource<FicheList>;
  //displayedColumns: string[] = ['code', 'num dossier','nom','prenom','date diagnostique','date d enregistrement','organisme','departement','impression','detail','update','delete'];

  displayedColumns: string[] = ['code', 'num_dossier', 'nom', 'prenom', 'date_diagnostic', 'date_enregistrement', 'organisme', 'departement', 'detail', 'update', 'delete'];

  //@Output() eventFiche:EventEmitter<Observable<Fiche>>=new EventEmitter<Observable<Fiche>>();
  searchKey!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  code!: number;
  nom!: string;
  bool: boolean = false;


  constructor(private router: Router, private ficheService: FicheService, private _snackBar: MatSnackBar,private fiche2Service:Fiche2Service) { }

  ngOnInit(): void {    this.getData();
  }
  ngDoCheck(): void {
    if (this.bool == true) {
      this.getData();
      this.bool = false;

    }
  }

  ngAfterViewInit(): void {
    this.sort1();
    this.paginator1();
    this.getAlldepartements();
  }

  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, { duration: duration });
  }

  sort1() {
    if (this.dataSource != undefined) {
      this.dataSource.sort = this.sort;
    }
  }

  paginator1() {
    if (this.dataSource != undefined) {
      this.dataSource.paginator = this.paginator;

    }

  }



  getData() {
    this.ficheService.getAllFicheLists().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.sort1();
      this.paginator1();

    });
  }





  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {

    this.router.navigate(["dashboard/fiche2"]);



  }

  onDelete(fiche: FicheList) {

    this.ficheService.deleteFiche(fiche).subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err.message);
        this.bool = true;
        console.log(err.status)
        if (err.status == 500) {
          this.openSnackBar("Delete fail", "Delete fail", 2800);

        }

      }
    );

  }


  onDetails(fiche: FicheList) {


    let doc = new jsPDF();
    const columns = [["Attribut", "Value"]];
    const data = [
      ["Code Fiche", String(fiche.idFiche)],
      ["NumDossier Fiche", String(fiche.ndossierFiche)],
      ["Nom Patient", String(fiche.nomPatient)],
      ["Prenom Patient", String(fiche.prenomPatient)],
      ["Date Diagnostique", String(fiche.dateDiagnostique)],
      ["Date d enregistrement", String(fiche.dateEnregistrement)],
      ["Organisme", String(fiche.nomOrgUserOfFiche)],
      ["Departement", String(fiche.nomDepUserOfFiche)]
    ];

    autoTable(doc, {
      head: columns,
      body: data,
      didDrawPage: (dataArg) => {
        doc.text('Detail of Fiche', dataArg.settings.margin.left, 10);
      }
    });

    doc.output("dataurlnewwindow");
  }


  onUpdate(ficheList: FicheList) {
    console.log('fichelist  :  ',ficheList)

    //let fiche={} as Fiche;

    this.fiche$=this.ficheService.findFicheById(ficheList);

    //this.eventFiche.emit(this.fiche$);

    this.fiche$.subscribe(data=>{
      console.log(data,"000000000000000000000000");
      this.fichen=data;
      this.fiche2Service.sendFiche(this.fichen);
    },err=>{
      console.log(err.message)
    }
    )



    this.router.navigate(["dashboard/fiche2"]);






  }


  getAlldepartements() {

    this.fiches$ = this.ficheService.getAllFiches().pipe(map(data => {
      console.log(data); return data
    }));

  }






}
