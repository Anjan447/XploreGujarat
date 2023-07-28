import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalDetailsComponent } from './festival-details.component';

describe('FestivalDetailsComponent', () => {
  let component: FestivalDetailsComponent;
  let fixture: ComponentFixture<FestivalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FestivalDetailsComponent]
    });
    fixture = TestBed.createComponent(FestivalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
