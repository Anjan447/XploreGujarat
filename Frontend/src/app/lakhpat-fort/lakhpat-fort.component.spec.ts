import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakhpatFortComponent } from './lakhpat-fort.component';

describe('LakhpatFortComponent', () => {
  let component: LakhpatFortComponent;
  let fixture: ComponentFixture<LakhpatFortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LakhpatFortComponent]
    });
    fixture = TestBed.createComponent(LakhpatFortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
