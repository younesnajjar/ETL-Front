import { Component, OnInit } from '@angular/core';
import {DatasetsService} from '../datasets.service';
import * as go from 'gojs';

@Component({
  selector: 'app-datasetscontainer',
  templateUrl: './datasetscontainer.component.html',
  styleUrls: ['./datasetscontainer.component.scss']
})
export class DatasetscontainerComponent implements OnInit {

  constructor(private data:DatasetsService) { }

  ngOnInit() {
    this.data.getDataSets().subscribe(
      (data:any) => {

        let palette = this.data.$(go.Palette, "myDataSetsDiv",  // create a new Palette in the HTML DIV element
          {
            // share the template map with the Palette
            nodeTemplateMap: this.data.myDiagram.nodeTemplateMap,
            autoScale: go.Diagram.Uniform  // everything always fits in viewport
          });

        data.forEach(element => {
          console.log("aaaaa"+element.type);
          element.category = element.type + "File"; // Adding file Categories for each dataset
        });
        palette.model.nodeDataArray = data;
      }
    );
   
  }

}
