var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import {NgxGraphModule} from '@swimlane/ngx-graph';
// import {scaleLinear} from "d3-scale";
import { ExecutiontabComponent } from './executiontab/executiontab.component';
import { GraphcontainerComponent } from './graphcontainer/graphcontainer.component';
import { SelectDialogComponent } from './select-dialog/select-dialog.component';
import { PolettecontainerComponent } from './polettecontainer/polettecontainer.component';
import { TranscontainerComponent } from './transcontainer/transcontainer.component';
import { DatasetscontainerComponent } from './datasetscontainer/datasetscontainer.component';
import { PrestcontainerComponent } from './prestcontainer/prestcontainer.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                ExecutiontabComponent,
                GraphcontainerComponent,
                PolettecontainerComponent,
                TranscontainerComponent,
                DatasetscontainerComponent,
                PrestcontainerComponent,
                SelectDialogComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                DragDropModule,
                FormsModule,
                HttpClientModule,
                MatDialogModule,
                BrowserAnimationsModule,
                MatCheckboxModule
                //,
                // NgxGraphModule,
                // scaleLinear
            ],
            providers: [],
            bootstrap: [AppComponent],
            entryComponents: [SelectDialogComponent, GraphcontainerComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map