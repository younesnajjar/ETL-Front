import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {CdkDrag,DragDropModule} from '@angular/cdk/drag-drop'

import { SelectDialogComponent } from './select-dialog.component';
TestBed.configureTestingModule({
  imports: [
       MatCheckboxModule,
       DragDropModule
  ],
  declarations: []
})
describe('SelectDialogComponent', () => {
  let component: SelectDialogComponent;
  let fixture: ComponentFixture<SelectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
