import { Component, OnInit } from '@angular/core';
import {DatasetsService} from '../datasets.service';
import {MatDialog, MatDialogConfig,MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import { NgxSpinnerService } from 'ngx-spinner';


import * as go from 'gojs';
import { SelectDialogComponent } from '../select-dialog/select-dialog.component';
import { Graph } from '../models/graph';
import { PreviewDialogComponent } from '../preview-dialog/preview-dialog.component';
import { CombineDialogComponent } from '../combine-dialog/combine-dialog.component';

@Component({
  selector: 'app-prestcontainer',
  templateUrl: './prestcontainer.component.html',
  styleUrls: ['./prestcontainer.component.scss']
})
export class PrestcontainerComponent implements OnInit {
  system:any= '';
  mdialog:MatDialog;


  myArray:string;
  constructor(private dialog: MatDialog,private dataset:DatasetsService,private spinner: NgxSpinnerService) {
    this.mdialog = dialog;
  
  }

  generateBrush(startColor:string,endColor:string){
    return this.dataset.$(go.Brush, "Linear", { 0: startColor, 1: endColor })
  }
  init(mdialog) {
    let onClickAction = {
      click: function(e, node) {
       StaticVars.getInstance().setSelectedItem(node.data.key);
       console.log(StaticVars.getInstance().getSelectedItem());
      }
    };
    
    let yellowgrad  = this.generateBrush("#fec900","#fea200");
    let greengrad   = this.generateBrush("#98FB98","#9ACD32");
    let bluegrad    = this.generateBrush("#0066CC","#0066CC");
    let whitegrad   = this.generateBrush("#F0F8FF","#E6E6FA");
    let bigfont     = "bold 13pt Helvetica, Arial, sans-serif";
    let smallfont   = "bold 10pt Helvetica, Arial, sans-serif";
    // Common text styling
  
    function textStyle() {
      return {
        margin: 6,
        wrap: go.TextBlock.WrapFit,
        textAlign: "center",
        editable: false,
        font: bigfont 
      }
    };
    function fileTextStyle() {
      return {
        
        textAlign: "center",
        editable: false,
        width:60,
        height:75,
        verticalAlignment:go.Spot.MiddleBottom,
        font: smallfont,
        maxLines:1,
        overflow:go.TextBlock.OverflowEllipsis
      }
    };
    this.dataset.myDiagram =
      this.dataset.$(go.Diagram, "myDiagramDiv",
        {
          // have mouse wheel events zoom in and out instead of scroll up and down
          "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
          allowDrop: true,  // support drag-and-drop from the Palette
          initialAutoScale: go.Diagram.Uniform,
          "linkingTool.direction": go.LinkingTool.ForwardsOnly,
          initialContentAlignment: go.Spot.Center,
          layout: this.dataset.$(go.LayeredDigraphLayout, { isInitial: false, isOngoing: false, layerSpacing: 50 }),
          "undoManager.isEnabled": true
        });

    let defaultAdornment =
      this.dataset.$(go.Adornment, "Spot",
        this.dataset.$(go.Panel, "Auto",
          this.dataset.$(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
          this.dataset.$(go.Placeholder)),
      );
   

            // Elements Creation
            this.dataset.myDiagram.nodeTemplateMap.add("Select",
      this.dataset.$(go.Node, "Auto",
        // new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        this.dataset.$(go.Shape, "RoundedRectangle",
          { fill: yellowgrad,
          portId: "", toLinkable: true,fromLinkable:true,  cursor: "pointer", fromEndSegmentLength: 1,toEndSegmentLength:1,fromMaxLinks:1,toMaxLinks:1}),
        this.dataset.$(go.TextBlock, "SELECT", textStyle(),
          new go.Binding("text", "text").makeTwoWay()), {
             // second arg will be this GraphObject, which in this case is the Node itself:
            doubleClick: function(e, node) {
              openDialog(node);
            }
          },{
            linkDisconnected: function(node,g,f){
              node.data.columns = null                                                                                                                                                                 ;
            }
          },onClickAction
        )
        
      );
      this.dataset.myDiagram.nodeTemplateMap.add("xlsxFile",
      this.dataset.$(go.Node,{fromLinkable:true,fromEndSegmentLength: 1,margin:3},
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        this.dataset.$(go.Picture, { source: "../assets/xlsx-icon.png", width: 60, height: 60 }),
        this.dataset.$(go.TextBlock, new go.Binding("text", "name"), fileTextStyle(),
          new go.Binding("text", "text").makeTwoWay()),{
             // second arg will be this GraphObject, which in this case is the Node itself:
            doubleClick: function(e, node) {}
          },
          { // this tooltip shows the name and picture of the kitten
            toolTip:
            this.dataset. $(go.Adornment, "Auto",
            this.dataset. $(go.Shape, { fill: "lightyellow" }),
            this.dataset.$(go.Panel, "Vertical",
                    this.dataset.$(go.TextBlock, { margin: 3 },
                    new go.Binding("text", "name"))))
          },onClickAction
        )
        
      );
      //let test ;
      this.dataset.myDiagram.nodeTemplateMap.add("csvFile",
      this.dataset.$(go.Node, {fromLinkable:true,fromEndSegmentLength: 1},
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        this.dataset.$(go.Picture, { source: "../assets/csv-icon.png", width: 60, height: 60, }),
        this.dataset.$(go.TextBlock, new go.Binding("text", "name"), fileTextStyle(),
          new go.Binding("text", "text").makeTwoWay()),{
             // second arg will be this GraphObject, which in this case is the Node itself:
          },
          { // this tooltip shows the name and picture of the kitten
            toolTip:
            this.dataset. $(go.Adornment, "Auto",
            this.dataset. $(go.Shape, { fill: "lightyellow" }),
            this.dataset.$(go.Panel, "Vertical",
                    this.dataset.$(go.TextBlock, { margin: 3 },
                    new go.Binding("text", "name"))))
          },onClickAction
         
        )

        
      );
        this.dataset.myDiagram.nodeTemplateMap.add("GroupBy",
      this.dataset.$(go.Node, "Auto",
        this.dataset.$(go.Shape, "RoundedRectangle",
          { fill: greengrad, portId: "", toLinkable: true,fromLinkable:true, toEndSegmentLength: 1,fromMaxLinks:1,toMaxLinks:1 }),
        this.dataset.$(go.TextBlock, "GROUP BY", textStyle(),
          new go.Binding("text", "text").makeTwoWay())
          ,onClickAction));
        this.dataset.myDiagram.nodeTemplateMap.add("Combine",
      this.dataset.$(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        this.dataset.$(go.Shape, "RoundedRectangle",
          { fill: bluegrad, portId: "",fromLinkable:true, toLinkable: true, toEndSegmentLength: 50,fromMaxLinks:1 }),
        this.dataset.$(go.TextBlock, "COMBINE", textStyle(),
          new go.Binding("text", "text").makeTwoWay())
          ,onClickAction,{
            doubleClick: function (e,node){
              const dialogRef = mdialog.open(CombineDialogComponent,{data:node,height: '99%',
      width: '99%'});
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if(result){
          node.data.leftLink = result.leftLink;
          node.data.rightLink = result.rightLink;
        }
          
      });
            }
          }));
    // Undesired events have a special adornment that allows adding additional "reasons"
    let UndesiredEventAdornment =
      this.dataset.$(go.Adornment, "Spot",
        this.dataset.$(go.Panel, "Auto",
          this.dataset.$(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }),
          this.dataset.$(go.Placeholder)),
        // the button to create a "next" node, at the top-right corner
        // this.dataset.$("Button",
        //   { alignment: go.Spot.BottomRight,
        //     click: addReason },  // this function is defined below
        //   new go.Binding("visible", "", function(a) { return !a.diagram.isReadOnly; }).ofObject(),
        //   this.dataset.$(go.Shape, "TriangleDown", { desiredSize: new go.Size(10, 10) })
        // )
      );
    let reasonTemplate = this.dataset.$(go.Panel, "Horizontal",
      this.dataset.$(go.TextBlock, "Reason",
        {
          margin: new go.Margin(4,0,0,0),
          maxSize: new go.Size(200, NaN),
          wrap: go.TextBlock.WrapFit,
          stroke: "whitesmoke",
          editable: true,
          font: smallfont
        },
        new go.Binding("text", "text").makeTwoWay())
      );

    this.dataset.myDiagram.nodeTemplateMap.add("Comment",
      this.dataset.$(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        this.dataset.$(go.Shape, "Rectangle",
          { portId: "", fill: whitegrad, fromLinkable: true }),
        this.dataset.$(go.TextBlock, "A comment",
          { margin: 9,
            maxSize: new go.Size(200, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true,
            font: smallfont },
          new go.Binding("text", "text").makeTwoWay())
        // no ports, because no links are allowed to connect with a comment
        ));
    // clicking the button on an UndesiredEvent node inserts a new text object into the panel
    function addReason(e, obj) {
      let adorn = obj.part;
      if (adorn === null) return;
      e.handled = true;
      let arr = adorn.adornedPart.data.reasonsList;
      this.dataset.myDiagram.startTransaction("add reason");
      this.dataset.myDiagram.model.addArrayItem(arr, {});
      this.dataset.myDiagram.commitTransaction("add reason");
    }
    // clicking the button of a default node inserts a new node to the right of the selected node,
    // and adds a link to that new node
    function addNodeAndLink(e, obj) {
      let adorn = obj.part;
      if (adorn === null) return;
      e.handled = true;
      let diagram = adorn.diagram;
      diagram.startTransaction("Add State");
      // get the node data for which the user clicked the button
      let fromNode = adorn.adornedPart;
      let fromData = fromNode.data;
      // create a new "State" data object, positioned off to the right of the adorned Node
      let toData = { text: "new",loc:"" };
      let p = fromNode.location;
      toData.loc = p.x + 200 + " " + p.y;  // the "loc" property is a string, not a Point object
      // add the new node data to the model
      let model = diagram.model;
      model.addNodeData(toData);
      // create a link data from the old node data to the new node data
      let linkdata = {};
      linkdata[model.linkFromKeyProperty] = model.getKeyForNodeData(fromData);
      linkdata[model.linkToKeyProperty] = model.getKeyForNodeData(toData);
      // and add the link data to the model
      model.addLinkData(linkdata);
      // select the new Node
      let newnode = diagram.findNodeForData(toData);
      diagram.select(newnode);
      diagram.commitTransaction("Add State");
    }
    // replace the default Link template in the linkTemplateMap
    this.dataset.myDiagram.linkTemplate =
      this.dataset.$(go.Link,  // the whole link panel
        new go.Binding("points").makeTwoWay(),
        { curve: go.Link.Bezier, toShortLength: 15 },
        new go.Binding("curviness", "curviness"),
        this.dataset.$(go.Shape,  // the link shape
          { stroke: "#2F4F4F", strokeWidth: 2.5 }),
        this.dataset.$(go.Shape,  // the arrowhead
          { toArrow: "kite", fill: "#2F4F4F", stroke: null, scale: 2 })
    );
    this.dataset.myDiagram.linkTemplateMap.add("Comment",
      this.dataset.$(go.Link, { selectable: false },
        this.dataset.$(go.Shape, { strokeWidth: 2, stroke: "darkgreen" })));
    
    function openDialog(node):void {
      let parentData = node.findTreeParentNode().data;
      let data = node.data;

      const dialogRef = mdialog.open(SelectDialogComponent,{data: {parentData:parentData,data:data},height: '99%',
      width: '99%'});
      dialogRef.afterClosed().subscribe(result => {
        if(result)
          node.data.columns = result.columns;
          node.data.query = result.query;
      });
      
    }
  }
   
  layout() {
    this.dataset.myDiagram.layoutDiagram(true);
  }
  // Show the diagram's model in JSON format
  save() {
   // document.getElementById("mySavedModel").value = this.dataset.myDiagram.model.toJson();
    this.myArray = this.dataset.myDiagram.model.toJson();
    console.log(this.dataset.myDiagram.model);
    //this.dataset.runGraph(this.dataset.myDiagram.model);
    this.dataset.myDiagram.isModified = false;
    
    // console.log("Hello There");
  }
  load() {
    //this. myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
  }
  runGraph(e){
    console.log("Hello");
    console.log(this.dataset.myDiagram.model);
    this.spinner.show();
    this.dataset.runGraph(this.dataset.myDiagram.model).subscribe((data: Graph) => {
      // log the employee object after the post is completed
      
      console.log(data);
    },
    (error: any) => { console.log(error); },()=>{this.spinner.hide();});
  }
  showPreview(){
    this.dataset.getPreview(StaticVars.getInstance().getSelectedItem()).subscribe((data:any) => {
      let titles = Object.keys(JSON.parse(data[0]));
      let values = [];
      console.log(titles);
      console.log(data);
      for(let i = 0; i<data.length;i++){
        values.push(Object.values(JSON.parse(data[i])));
      }
      console.log(values);
      let dialogRef = this.mdialog.open(PreviewDialogComponent, {data:{titles:titles,values:values},
        
        height: '99%',
        width: '99%',
      });
    });
  }

   ngOnInit() {

    this.init(this.mdialog);
    
   }

}
export class StaticVars {
  private static instance: StaticVars;
  private selectedItem=0;
  private constructor() {
      // do something construct...
  }
  static getInstance() {
      if (!StaticVars.instance) {
        StaticVars.instance = new StaticVars();
          // ... any one time initialization goes here ...
      }
      return StaticVars.instance;
  }
  public getSelectedItem(){
    return this.selectedItem;
  }
  public setSelectedItem(key){
    this.selectedItem = key;
  }
}
