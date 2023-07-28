import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddhistCavesComponent } from './buddhist-caves.component';

describe('BuddhistCavesComponent', () => {
  let component: BuddhistCavesComponent;
  let fixture: ComponentFixture<BuddhistCavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuddhistCavesComponent]
    });
    fixture = TestBed.createComponent(BuddhistCavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
