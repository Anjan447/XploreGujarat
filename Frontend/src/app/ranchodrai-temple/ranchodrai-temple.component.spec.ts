import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanchodraiTempleComponent } from './ranchodrai-temple.component';

describe('RanchodraiTempleComponent', () => {
  let component: RanchodraiTempleComponent;
  let fixture: ComponentFixture<RanchodraiTempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RanchodraiTempleComponent]
    });
    fixture = TestBed.createComponent(RanchodraiTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
