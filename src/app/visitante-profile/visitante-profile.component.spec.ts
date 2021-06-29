import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitanteProfileComponent } from './visitante-profile.component';

describe('VisitanteProfileComponent', () => {
  let component: VisitanteProfileComponent;
  let fixture: ComponentFixture<VisitanteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitanteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitanteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
