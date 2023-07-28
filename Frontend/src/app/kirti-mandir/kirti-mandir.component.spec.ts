import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirtiMandirComponent } from './kirti-mandir.component';

describe('KirtiMandirComponent', () => {
  let component: KirtiMandirComponent;
  let fixture: ComponentFixture<KirtiMandirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KirtiMandirComponent]
    });
    fixture = TestBed.createComponent(KirtiMandirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
