import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatkeshwarTempleComponent } from './hatkeshwar-temple.component';

describe('HatkeshwarTempleComponent', () => {
  let component: HatkeshwarTempleComponent;
  let fixture: ComponentFixture<HatkeshwarTempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HatkeshwarTempleComponent]
    });
    fixture = TestBed.createComponent(HatkeshwarTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
