import { User } from './../../../../model/user';
import { Component, Inject, OnInit, DoCheck } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dt-dialog',
  templateUrl: './user-dt-dialog.component.html',
  styleUrls: ['./user-dt-dialog.component.css']
})
export class UserDtDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< UserDtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }


  ngOnInit(): void {

    console.log(this.data,'mo5tar93_7')
  }

  onNoClick(){

    this.dialogRef.close();
    console.log("cancel");

  }

}

