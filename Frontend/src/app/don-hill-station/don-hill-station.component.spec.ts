import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonHillStationComponent } from './don-hill-station.component';

describe('DonHillStationComponent', () => {
  let component: DonHillStationComponent;
  let fixture: ComponentFixture<DonHillStationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonHillStationComponent]
    });
    fixture = TestBed.createComponent(DonHillStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
