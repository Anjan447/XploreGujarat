import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirtiToranComponent } from './kirti-toran.component';

describe('KirtiToranComponent', () => {
  let component: KirtiToranComponent;
  let fixture: ComponentFixture<KirtiToranComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KirtiToranComponent]
    });
    fixture = TestBed.createComponent(KirtiToranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
