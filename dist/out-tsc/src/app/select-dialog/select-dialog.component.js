var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var SelectDialogComponent = /** @class */ (function () {
    function SelectDialogComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.columns$ = data.columns;
        data.columns.array.forEach(function (element) {
            _this.columnsState.push(false);
        });
    }
    SelectDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SelectDialogComponent.prototype.ngOnInit = function () { };
    SelectDialogComponent = __decorate([
        Component({
            selector: 'app-select-dialog',
            templateUrl: './select-dialog.component.html',
            styleUrls: ['./select-dialog.component.scss']
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object])
    ], SelectDialogComponent);
    return SelectDialogComponent;
}());
export { SelectDialogComponent };
//# sourceMappingURL=select-dialog.component.js.map