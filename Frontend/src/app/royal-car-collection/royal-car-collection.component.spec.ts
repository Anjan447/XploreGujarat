import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalCarCollectionComponent } from './royal-car-collection.component';

describe('RoyalCarCollectionComponent', () => {
  let component: RoyalCarCollectionComponent;
  let fixture: ComponentFixture<RoyalCarCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoyalCarCollectionComponent]
    });
    fixture = TestBed.createComponent(RoyalCarCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
