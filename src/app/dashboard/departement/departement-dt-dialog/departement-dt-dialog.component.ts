import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Departement } from 'src/model/departement';
@Component({
  selector: 'app-departement-dt-dialog',
  templateUrl: './departement-dt-dialog.component.html',
  styleUrls: ['./departement-dt-dialog.component.css']
})
export class DepartementDtDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DepartementDtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Departement) { }

  ngOnInit(): void {
  }
  onNoClick(){

    this.dialogRef.close();
    console.log("cancel");

  }
}
