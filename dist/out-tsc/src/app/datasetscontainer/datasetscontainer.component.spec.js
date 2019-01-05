import { async, TestBed } from '@angular/core/testing';
import { DatasetscontainerComponent } from './datasetscontainer.component';
describe('DatasetscontainerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DatasetscontainerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DatasetscontainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=datasetscontainer.component.spec.js.map