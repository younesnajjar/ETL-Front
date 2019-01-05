import { Component, OnInit,Inject,Directive } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { moveItemInArray ,CdkDragDrop} from '@angular/cdk/drag-drop';

export interface selectColumn {
  name:string;
  state:boolean;
}

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  columnsState: Array<boolean> = [];
  disabled = false;
  columns$:Object;
  x:boolean;
  base:any;
  returnData:any;
  items=[["AND","OR","NOT"],["LIKE","WHERE"],["=",">","<","<>",">=","<="],["AVG","MIN","MAX"],["(","+","-","*","/",")"]];



  constructor(
    public dialogRef: MatDialogRef<SelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public node: any) {
      
      this.returnData = {columns: node.data.columns,query:node.data.query}


      if( this.returnData.query == undefined)
        this.returnData.query  = "";

      if(this.returnData.columns == {} && node.parentData.category == "Select"){
        this.returnData.columns = [];
        

        for(let column of node.parentData.columns){
          if(column.state == true){
            this.returnData.columns.push({name:column.name,state:false});
          }
        }
    }else if (node.parentData.category == "Select"){
      
      let returnDataClone = this.returnData.columns;
      this.returnData.columns = [];
      for(let i=0;i<node.parentData.columns.length;i++){
        if(node.parentData.columns[i].state){
          if(this.isCheckedInNode(node.parentData.columns[i],this.returnData)){
            this.returnData.columns.push(node.parentData.columns[i]);
          }
          else{
            this.returnData.columns.push({name:node.parentData.columns[i].name,state:false});
          }
        }
        
      }
    }
    else if (this.returnData.columns == undefined) {
      this.returnData.columns = [];
      for(let column of node.parentData.columns){
        this.returnData.columns.push({name:column.name,state:column.state})
      }
      //this.returnData.columns = node.parentData.columns;
    }
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onItemDrop(e:any){
    this.returnData.query = this.returnData.query + e.dragData + " ";
  }
  addData(e:any,data){
    this.returnData.query = this.returnData.query + data + " ";
  }
  onBackPressed($event){
    this.removeLastAdded();
  }
  removeLastAdded(){
    let i=0;
    if(this.returnData.query.length !=0){
      while(true){
        if(this.returnData.query.slice(this.returnData.query.length-1,this.returnData.query.length)==' '){
          i++;
        }
        if(i==2 || this.returnData.query.length ==0){
          break;
        }
        this.returnData.query = this.returnData.query.slice(0,-1);
      }
    }
    
  }
  isCheckedInNode(toCheckColumn,columns){
    for(let column of columns){
      if(column.name == toCheckColumn.name && column.state == toCheckColumn.state)
        return true;
    }
    return false;
  }
  addText(e,text){
    if(isNaN(text)) this.returnData.query = this.returnData.query + "'";
    this.returnData.query = this.returnData.query + text;
    if(isNaN(text)) this.returnData.query = this.returnData.query + "'";
    this.returnData.query = this.returnData.query + " ";
  }

  ngOnInit() {}

}
