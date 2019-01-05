var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DatasetsService } from '../datasets.service';
import { MatDialog } from "@angular/material";
import * as go from 'gojs';
import { SelectDialogComponent } from '../select-dialog/select-dialog.component';
var GraphcontainerComponent = /** @class */ (function () {
    function GraphcontainerComponent(dialog, dataset) {
        this.dialog = dialog;
        this.dataset = dataset;
        this.system = '';
        this.mdialog = dialog;
    }
    GraphcontainerComponent.prototype.init = function (mdialog) {
        // if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
        //let this.dataset.$ = go.GraphObject.make;  // for conciseness in defining templates
        var yellowgrad = this.dataset.$(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" });
        var greengrad = this.dataset.$(go.Brush, "Linear", { 0: "#98FB98", 1: "#9ACD32" });
        var bluegrad = this.dataset.$(go.Brush, "Linear", { 0: "#B0E0E6", 1: "#87CEEB" });
        var redgrad = this.dataset.$(go.Brush, "Linear", { 0: "#C45245", 1: "#871E1B" });
        var whitegrad = this.dataset.$(go.Brush, "Linear", { 0: "#F0F8FF", 1: "#E6E6FA" });
        var bigfont = "bold 13pt Helvetica, Arial, sans-serif";
        var smallfont = "bold 10pt Helvetica, Arial, sans-serif";
        // Common text styling
        function textStyle() {
            return {
                margin: 6,
                wrap: go.TextBlock.WrapFit,
                textAlign: "center",
                editable: false,
                font: bigfont
            };
        }
        ;
        function fileTextStyle() {
            return {
                textAlign: "center",
                editable: false,
                width: 60,
                height: 75,
                verticalAlignment: go.Spot.MiddleBottom,
                font: smallfont,
                maxLines: 1,
                overflow: go.TextBlock.OverflowEllipsis
            };
        }
        ;
        this.dataset.myDiagram =
            this.dataset.$(go.Diagram, "myDiagramDiv", {
                // have mouse wheel events zoom in and out instead of scroll up and down
                "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
                allowDrop: true,
                initialAutoScale: go.Diagram.Uniform,
                "linkingTool.direction": go.LinkingTool.ForwardsOnly,
                initialContentAlignment: go.Spot.Center,
                layout: this.dataset.$(go.LayeredDigraphLayout, { isInitial: false, isOngoing: false, layerSpacing: 50 }),
                "undoManager.isEnabled": true
            });
        // when the document is modified, add a "*" to the title and enable the "Save" button
        // this.myDiagram.addDiagramListener("Modified", function(e) {
        //   let button = document.getElementById("SaveButton");
        //   //if (button) button.disabled = !this.myDiagram.isModified;
        //   let idx = document.title.indexOf("*");
        //   // if (this.myDiagram.isModified) {
        //   //   if (idx < 0) document.title += "*";
        //   // } else {
        //   //   if (idx >= 0) document.title = document.title.substr(0, idx);
        //   // }
        // });
        var defaultAdornment = this.dataset.$(go.Adornment, "Spot", this.dataset.$(go.Panel, "Auto", this.dataset.$(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }), this.dataset.$(go.Placeholder)));
        // Elements Creation
        this.dataset.myDiagram.nodeTemplateMap.add("Select", this.dataset.$(go.Node, "Auto", 
        // new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        this.dataset.$(go.Shape, "RoundedRectangle", { fill: yellowgrad,
            portId: "", toLinkable: true, fromLinkable: true, cursor: "pointer", fromEndSegmentLength: 1, toEndSegmentLength: 1, fromMaxLinks: 1, toMaxLinks: 1 }), this.dataset.$(go.TextBlock, "SELECT", textStyle(), new go.Binding("text", "text").makeTwoWay()), {
            // second arg will be this GraphObject, which in this case is the Node itself:
            doubleClick: function (e, node) {
                openDialog(node.findTreeParentNode().data);
                node.data.info = { "test": "ok" };
            }
        }));
        this.dataset.myDiagram.nodeTemplateMap.add("xlsxFile", this.dataset.$(go.Node, { fromLinkable: true, fromEndSegmentLength: 1, margin: 3 }, new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), this.dataset.$(go.Picture, { source: "../assets/xlsx-icon.png", width: 60, height: 60 }), this.dataset.$(go.TextBlock, new go.Binding("text", "name"), fileTextStyle(), new go.Binding("text", "text").makeTwoWay()), {
            // second arg will be this GraphObject, which in this case is the Node itself:
            doubleClick: function (e, node) {
                node.data.info = { "test": "ok" };
            }
        }, {
            toolTip: this.dataset.$(go.Adornment, "Auto", this.dataset.$(go.Shape, { fill: "lightyellow" }), this.dataset.$(go.Panel, "Vertical", this.dataset.$(go.TextBlock, { margin: 3 }, new go.Binding("text", "name"))))
        }));
        this.dataset.myDiagram.nodeTemplateMap.add("csvFile", this.dataset.$(go.Node, { fromLinkable: true, fromEndSegmentLength: 1 }, new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), this.dataset.$(go.Picture, { source: "../assets/csv-icon.png", width: 60, height: 60, }), this.dataset.$(go.TextBlock, new go.Binding("text", "name"), fileTextStyle(), new go.Binding("text", "text").makeTwoWay()), {
            // second arg will be this GraphObject, which in this case is the Node itself:
            doubleClick: function (e, node) {
                node.data.info = { "test": "ok" };
            }
        }, {
            toolTip: this.dataset.$(go.Adornment, "Auto", this.dataset.$(go.Shape, { fill: "lightyellow" }), this.dataset.$(go.Panel, "Vertical", this.dataset.$(go.TextBlock, { margin: 3 }, new go.Binding("text", "name"))))
        }));
        this.dataset.myDiagram.nodeTemplateMap.add("GroupBy", this.dataset.$(go.Node, "Auto", new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), this.dataset.$(go.Shape, "RoundedRectangle", { fill: greengrad, portId: "", toLinkable: true, fromLinkable: true, toEndSegmentLength: 1, fromMaxLinks: 1, toMaxLinks: 1 }), this.dataset.$(go.TextBlock, "GROUP BY", textStyle(), new go.Binding("text", "text").makeTwoWay())));
        this.dataset.myDiagram.nodeTemplateMap.add("Combine", this.dataset.$(go.Node, "Auto", new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), this.dataset.$(go.Shape, "RoundedRectangle", { fill: bluegrad, portId: "", fromLinkable: true, toLinkable: true, toEndSegmentLength: 50, fromMaxLinks: 1 }), this.dataset.$(go.TextBlock, "COMBINE", textStyle(), new go.Binding("text", "text").makeTwoWay())));
        // Undesired events have a special adornment that allows adding additional "reasons"
        var UndesiredEventAdornment = this.dataset.$(go.Adornment, "Spot", this.dataset.$(go.Panel, "Auto", this.dataset.$(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 4 }), this.dataset.$(go.Placeholder)));
        var reasonTemplate = this.dataset.$(go.Panel, "Horizontal", this.dataset.$(go.TextBlock, "Reason", {
            margin: new go.Margin(4, 0, 0, 0),
            maxSize: new go.Size(200, NaN),
            wrap: go.TextBlock.WrapFit,
            stroke: "whitesmoke",
            editable: true,
            font: smallfont
        }, new go.Binding("text", "text").makeTwoWay()));
        // myDiagram.nodeTemplateMap.add("UndesiredEvent",
        //   this.dataset.$(go.Node, "Auto",
        //     new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        //     { selectionAdornmentTemplate: UndesiredEventAdornment },
        //     this.dataset.$(go.Shape, "RoundedRectangle",
        //       { fill: redgrad, portId: "", toLinkable: true, toEndSegmentLength: 50 }),
        //     this.dataset.$(go.Panel, "Vertical", {defaultAlignment: go.Spot.TopLeft},
        //       this.dataset.$(go.TextBlock, "Drop", textStyle(),
        //         { stroke: "whitesmoke",
        //           minSize: new go.Size(80, NaN) },
        //         new go.Binding("text", "text").makeTwoWay()),
        //       this.dataset.$(go.Panel, "Vertical",
        //         { defaultAlignment: go.Spot.TopLeft,
        //           itemTemplate: reasonTemplate },
        //         new go.Binding("itemArray", "reasonsList").makeTwoWay()
        //       )
        //     )
        //     ));
        this.dataset.myDiagram.nodeTemplateMap.add("Comment", this.dataset.$(go.Node, "Auto", new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), this.dataset.$(go.Shape, "Rectangle", { portId: "", fill: whitegrad, fromLinkable: true }), this.dataset.$(go.TextBlock, "A comment", { margin: 9,
            maxSize: new go.Size(200, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true,
            font: smallfont }, new go.Binding("text", "text").makeTwoWay())
        // no ports, because no links are allowed to connect with a comment
        ));
        // clicking the button on an UndesiredEvent node inserts a new text object into the panel
        function addReason(e, obj) {
            var adorn = obj.part;
            if (adorn === null)
                return;
            e.handled = true;
            var arr = adorn.adornedPart.data.reasonsList;
            this.dataset.myDiagram.startTransaction("add reason");
            this.dataset.myDiagram.model.addArrayItem(arr, {});
            this.dataset.myDiagram.commitTransaction("add reason");
        }
        // clicking the button of a default node inserts a new node to the right of the selected node,
        // and adds a link to that new node
        function addNodeAndLink(e, obj) {
            var adorn = obj.part;
            if (adorn === null)
                return;
            e.handled = true;
            var diagram = adorn.diagram;
            diagram.startTransaction("Add State");
            // get the node data for which the user clicked the button
            var fromNode = adorn.adornedPart;
            var fromData = fromNode.data;
            // create a new "State" data object, positioned off to the right of the adorned Node
            var toData = { text: "new", loc: "" };
            var p = fromNode.location;
            toData.loc = p.x + 200 + " " + p.y; // the "loc" property is a string, not a Point object
            // add the new node data to the model
            var model = diagram.model;
            model.addNodeData(toData);
            // create a link data from the old node data to the new node data
            var linkdata = {};
            linkdata[model.linkFromKeyProperty] = model.getKeyForNodeData(fromData);
            linkdata[model.linkToKeyProperty] = model.getKeyForNodeData(toData);
            // and add the link data to the model
            model.addLinkData(linkdata);
            // select the new Node
            var newnode = diagram.findNodeForData(toData);
            diagram.select(newnode);
            diagram.commitTransaction("Add State");
        }
        // replace the default Link template in the linkTemplateMap
        this.dataset.myDiagram.linkTemplate =
            this.dataset.$(go.Link, // the whole link panel
            new go.Binding("points").makeTwoWay(), { curve: go.Link.Bezier, toShortLength: 15 }, new go.Binding("curviness", "curviness"), this.dataset.$(go.Shape, // the link shape
            { stroke: "#2F4F4F", strokeWidth: 2.5 }), this.dataset.$(go.Shape, // the arrowhead
            { toArrow: "kite", fill: "#2F4F4F", stroke: null, scale: 2 }));
        this.dataset.myDiagram.linkTemplateMap.add("Comment", this.dataset.$(go.Link, { selectable: false }, this.dataset.$(go.Shape, { strokeWidth: 2, stroke: "darkgreen" })));
        // read in the JSON-format data from the "mySavedModel" element
        //this.load();
        //this.layout();
        function openDialog(data) {
            var dialogRef = mdialog.open(SelectDialogComponent, { data: data });
        }
    };
    GraphcontainerComponent.prototype.layout = function () {
        this.dataset.myDiagram.layoutDiagram(true);
    };
    // Show the diagram's model in JSON format
    GraphcontainerComponent.prototype.save = function () {
        // document.getElementById("mySavedModel").value = this.dataset.myDiagram.model.toJson();
        this.myArray = this.dataset.myDiagram.model.toJson();
        this.dataset.myDiagram.isModified = false;
        // console.log("Hello There");
    };
    GraphcontainerComponent.prototype.load = function () {
        //this. myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
    };
    // define a simple Node template
    // but use the default Link template, by not setting Diagram.linkTemplate
    // create the model data that will be represented by Nodes and Links
    GraphcontainerComponent.prototype.ngOnInit = function () {
        this.init(this.mdialog);
    };
    GraphcontainerComponent = __decorate([
        Component({
            selector: 'app-graphcontainer',
            templateUrl: './graphcontainer.component.html',
            styleUrls: ['./graphcontainer.component.scss']
        }),
        __metadata("design:paramtypes", [MatDialog, DatasetsService])
    ], GraphcontainerComponent);
    return GraphcontainerComponent;
}());
export { GraphcontainerComponent };
//# sourceMappingURL=graphcontainer.component.js.map