import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaComponent } from './limpieza.component';

describe('LimpiezaComponent', () => {
  let component: LimpiezaComponent;
  let fixture: ComponentFixture<LimpiezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpiezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
