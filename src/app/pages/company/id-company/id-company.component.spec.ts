import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCompanyComponent } from './id-company.component';

describe('IdCompanyComponent', () => {
  let component: IdCompanyComponent;
  let fixture: ComponentFixture<IdCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdCompanyComponent]
    });
    fixture = TestBed.createComponent(IdCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
