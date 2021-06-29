import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteProfileComponent } from './asistente-profile.component';

describe('AsistenteProfileComponent', () => {
  let component: AsistenteProfileComponent;
  let fixture: ComponentFixture<AsistenteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
