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
import * as go from 'gojs';
var DatasetscontainerComponent = /** @class */ (function () {
    function DatasetscontainerComponent(data) {
        this.data = data;
    }
    DatasetscontainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getDataSets().subscribe(function (data) {
            _this.datasets$ = data;
            var palette = _this.data.$(go.Palette, "myDataSetsDiv", // create a new Palette in the HTML DIV element
            {
                // share the template map with the Palette
                nodeTemplateMap: _this.data.myDiagram.nodeTemplateMap,
                autoScale: go.Diagram.Uniform // everything always fits in viewport
            });
            _this.datasets$.forEach(function (element) {
                element.columns = element.columns;
                element.category = element.type + "File";
                console.log(element);
            });
            // palette.model.nodeDataArray = [
            //   { category: "xlsxFile",name:"file1.xlsx",info: {} },
            //   // { }, // default node
            //   { category: "csvFile",name:"file2.csv",info: {} },
            //   { category: "xlsxFile",name:"file3.xlsx",info: {}},
            //   { category: "csvFile",name:"file4.csv",info: {} }
            // ];
            palette.model.nodeDataArray = _this.datasets$;
        });
    };
    DatasetscontainerComponent = __decorate([
        Component({
            selector: 'app-datasetscontainer',
            templateUrl: './datasetscontainer.component.html',
            styleUrls: ['./datasetscontainer.component.scss']
        }),
        __metadata("design:paramtypes", [DatasetsService])
    ], DatasetscontainerComponent);
    return DatasetscontainerComponent;
}());
export { DatasetscontainerComponent };
//# sourceMappingURL=datasetscontainer.component.js.map