import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolettecontainerComponent } from './polettecontainer.component';

describe('PolettecontainerComponent', () => {
  let component: PolettecontainerComponent;
  let fixture: ComponentFixture<PolettecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolettecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolettecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
