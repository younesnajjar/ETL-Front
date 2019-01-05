import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscontainerComponent } from './transcontainer.component';

describe('TranscontainerComponent', () => {
  let component: TranscontainerComponent;
  let fixture: ComponentFixture<TranscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
