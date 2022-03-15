import { Component,Inject ,OnInit } from '@angular/core';
import { Departement } from './../../../../model/departement';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-departement-dialog',
  templateUrl: './departement-dialog.component.html',
  styleUrls: ['./departement-dialog.component.css']
})
export class DepartementDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DepartementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public departement: Departement) { }

  ngOnInit(): void {
  }
  onNoClick(){

    this.dialogRef.close();
    console.log("cancel");

  }
}
