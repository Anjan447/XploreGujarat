import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddhistMonasteryComponent } from './buddhist-monastery.component';

describe('BuddhistMonasteryComponent', () => {
  let component: BuddhistMonasteryComponent;
  let fixture: ComponentFixture<BuddhistMonasteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuddhistMonasteryComponent]
    });
    fixture = TestBed.createComponent(BuddhistMonasteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
