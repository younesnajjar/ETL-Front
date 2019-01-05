import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetscontainerComponent } from './datasetscontainer.component';

describe('DatasetscontainerComponent', () => {
  let component: DatasetscontainerComponent;
  let fixture: ComponentFixture<DatasetscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
