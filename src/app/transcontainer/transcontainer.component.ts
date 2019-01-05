import { Component, OnInit } from '@angular/core';
import {DatasetsService} from '../datasets.service';
import * as go from 'gojs';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-transcontainer',
  templateUrl: './transcontainer.component.html',
  styleUrls: ['./transcontainer.component.scss']
})
export class TranscontainerComponent implements OnInit {

  constructor(private data:DatasetsService) {}

  ngOnInit() {
    // create a new Palette in the HTML DIV element
    let palette =
      this.data.$(go.Palette, "myTransitionsDiv",
        {
          nodeTemplateMap: this.data.myDiagram.nodeTemplateMap,// share the template map with the Palette
          autoScale: go.Diagram.Uniform  // everything always fits in viewport
        });
    palette.model.nodeDataArray = [
      { category: "Select" },
      { category: "GroupBy"},
      { category: "Combine"},
      { category: "Comment"}
    ];
  }

}
