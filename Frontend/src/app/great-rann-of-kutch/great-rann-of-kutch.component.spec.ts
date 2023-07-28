import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatRannOfKutchComponent } from './great-rann-of-kutch.component';

describe('GreatRannOfKutchComponent', () => {
  let component: GreatRannOfKutchComponent;
  let fixture: ComponentFixture<GreatRannOfKutchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatRannOfKutchComponent]
    });
    fixture = TestBed.createComponent(GreatRannOfKutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
