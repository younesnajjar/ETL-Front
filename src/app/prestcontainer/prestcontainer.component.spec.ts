import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestcontainerComponent } from './prestcontainer.component';

describe('PrestcontainerComponent', () => {
  let component: PrestcontainerComponent;
  let fixture: ComponentFixture<PrestcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
