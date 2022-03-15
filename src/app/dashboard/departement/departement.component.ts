import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from 'src/model/departement';
import { DepartementDialogComponent } from './departement-dialog/departement-dialog.component';
import { DepartementDtDialogComponent } from './departement-dt-dialog/departement-dt-dialog.component';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit, AfterViewInit, DoCheck  {

  departements$!: Observable<Departement[]>;
  dataSource!: MatTableDataSource<Departement>;
  displayedColumns: string[] = ['code', 'nom', 'detail', 'update', 'delete'];
  searchKey!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  bool: boolean = false;
  constructor(private dialog: MatDialog, private departementService: DepartementService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
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
    this.departementService.getAllDepartements().subscribe(data => {
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { nom: '' } as Departement;
    const dialogRef = this.dialog.open(DepartementDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined) {

        console.log(result);
        console.log(result.code);
        console.log(result.nom);

        this.departementService.saveDepartement(result).subscribe(
          res => {
            console.log(res);
            this.bool = true;

          },
          err => {
            console.log(err.message);
          }
        );
      }
    });

  }

  onDelete(departement: Departement) {

    this.departementService.deleteDepartement(departement).subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err.message);
        this.bool = true;
        console.log(err.status)
        if (err.status == 500) {
          this.openSnackBar("You must delete the associated users before delete", "Delete fail", 2800);

        }

      }
    );
    console.log("ondelete!!!!")
    console.log(departement, "aaaaaa");
  }


  onDetails(departement: Departement) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = departement;
    console.log("[" + departement.code + ", " + departement.nom + "]");
    const dialogRef = this.dialog.open(DepartementDtDialogComponent, dialogConfig);

  }


  onUpdate(departement: Departement) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = departement;
    console.log("[" + departement.code + ", " + departement.nom + "]");
    const dialogRef = this.dialog.open(DepartementDialogComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed update');
      if (result == undefined) {

        this.getData();

        console.log("vous avez clicker sur cancel");
      }
      else if (result.code == departement.code) {

        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(result.code);
        console.log("update sucsess");
        console.log(departement.code)
        this.departementService.updateDepartement(result).subscribe(
          res => {
            console.log(res);
            this.bool = true;

          },
          err => {
            console.log(err.message);

          }
        );

      }
      else {

        console.log("il ne faut pas changer le code service");

        this.openSnackBar("You  mustn't change the code service", "Update fail", 2800);

      }
    });

  }

  getAlldepartements() {

    this.departements$ = this.departementService.getAllDepartements().pipe(map(data => {
      console.log(data); return data
    }));

  }





}



