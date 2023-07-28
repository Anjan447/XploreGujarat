import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarbarDetailsComponent } from './darbar-details.component';

describe('DarbarDetailsComponent', () => {
  let component: DarbarDetailsComponent;
  let fixture: ComponentFixture<DarbarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarbarDetailsComponent]
    });
    fixture = TestBed.createComponent(DarbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
