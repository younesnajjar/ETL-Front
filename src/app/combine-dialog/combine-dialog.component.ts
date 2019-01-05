import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface Link {
  key : number,
  column : string
}
@Component({
  selector: 'app-combine-dialog',
  templateUrl: './combine-dialog.component.html',
  styleUrls: ['./combine-dialog.component.scss']
})

export class CombineDialogComponent implements OnInit {
  leftColumns:any;
  rightColumns:any;
  leftLink:Link;
  rightLink:Link;
  returnData;
  constructor(public dialogRef: MatDialogRef<CombineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public node: any) { }

  ngOnInit() {
    
    this.leftLink = {key:0,column:""};
    this.rightLink = {key:0,column:""};
    this.returnData = {leftLink:this.leftLink,rightLink:this.rightLink};
    let iterable = this.node.findNodesInto();
    iterable.next();
    this.returnData.leftLink.key = iterable.value.data.key;

    this.leftColumns = this.assign(iterable.value.data);
    iterable.next();
    this.returnData.rightLink.key = iterable.value.data.key;

    this.rightColumns = this.assign(iterable.value.data);

    
  }
  assign(data){
    switch(data.category){
      case "Select":
        return this.clean(data.columns);
      break;
      default :
        return data.columns;
      }
  }
  clean(cols){
    let newColumns = [];
    for(let i = 0 ; i < cols.length ; i++){
      if(cols[i].state) newColumns.push(cols[i]);
    }
    return newColumns;
  }
  setLeftLink(e,col){
    this.returnData.leftLink.column = col;
  }
  setRightLink(e,col){
    this.returnData.rightLink.column = col;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
