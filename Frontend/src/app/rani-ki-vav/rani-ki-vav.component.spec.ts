import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaniKiVavComponent } from './rani-ki-vav.component';

describe('RaniKiVavComponent', () => {
  let component: RaniKiVavComponent;
  let fixture: ComponentFixture<RaniKiVavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaniKiVavComponent]
    });
    fixture = TestBed.createComponent(RaniKiVavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
