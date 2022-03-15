import { Organisme } from '../../../../model/organisme';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-organisme-dt-dialog',
  templateUrl: './organisme-dt-dialog.component.html',
  styleUrls: ['./organisme-dt-dialog.component.css']
})
export class OrganismeDtDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< OrganismeDtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Organisme) { }

  ngOnInit(): void {
  }

  onNoClick(){

    this.dialogRef.close();
    console.log("cancel");

  }
}
