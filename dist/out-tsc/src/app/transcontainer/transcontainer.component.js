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
var TranscontainerComponent = /** @class */ (function () {
    function TranscontainerComponent(data) {
        this.data = data;
    }
    TranscontainerComponent.prototype.ngOnInit = function () {
        var palette = this.data.$(go.Palette, "myPaletteDiv", // create a new Palette in the HTML DIV element
        {
            // share the template map with the Palette
            nodeTemplateMap: this.data.myDiagram.nodeTemplateMap,
            autoScale: go.Diagram.Uniform // everything always fits in viewport
        });
        palette.model.nodeDataArray = [
            { category: "Select", info: {} },
            // { }, // default node
            { category: "GroupBy", info: {} },
            { category: "Combine", info: {} },
            { category: "Comment", info: {} }
        ];
    };
    TranscontainerComponent = __decorate([
        Component({
            selector: 'app-transcontainer',
            templateUrl: './transcontainer.component.html',
            styleUrls: ['./transcontainer.component.scss']
        }),
        __metadata("design:paramtypes", [DatasetsService])
    ], TranscontainerComponent);
    return TranscontainerComponent;
}());
export { TranscontainerComponent };
//# sourceMappingURL=transcontainer.component.js.map