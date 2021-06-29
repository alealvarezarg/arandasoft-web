import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorProfileComponent } from './administrador-profile.component';

describe('AdministradorProfileComponent', () => {
  let component: AdministradorProfileComponent;
  let fixture: ComponentFixture<AdministradorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
