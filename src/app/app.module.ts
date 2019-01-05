import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule,CdkDragDrop } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgDragDropModule } from 'ng-drag-drop';
import {MatIconRegistry} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgxSpinnerModule } from 'ngx-spinner';



import * as go from 'gojs';

// import {NgxGraphModule} from '@swimlane/ngx-graph';
// import {scaleLinear} from "d3-scale";



import { SelectDialogComponent } from './select-dialog/select-dialog.component';
import { PolettecontainerComponent } from './polettecontainer/polettecontainer.component';
import { TranscontainerComponent } from './transcontainer/transcontainer.component';
import { DatasetscontainerComponent } from './datasetscontainer/datasetscontainer.component';
import { PrestcontainerComponent } from './prestcontainer/prestcontainer.component';
import { PreviewDialogComponent } from './preview-dialog/preview-dialog.component';
import { CombineDialogComponent } from './combine-dialog/combine-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    PolettecontainerComponent,
    TranscontainerComponent,
    DatasetscontainerComponent,
    PrestcontainerComponent,
    SelectDialogComponent,
    PreviewDialogComponent,
    CombineDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    NgDragDropModule.forRoot(),
    NgxSpinnerModule
     //,
    // NgxGraphModule,
    // scaleLinear
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[SelectDialogComponent,PrestcontainerComponent,PreviewDialogComponent,CombineDialogComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);