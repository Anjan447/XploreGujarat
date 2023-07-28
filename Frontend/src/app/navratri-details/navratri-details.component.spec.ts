import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavratriDetailsComponent } from './navratri-details.component';

describe('NavratriDetailsComponent', () => {
  let component: NavratriDetailsComponent;
  let fixture: ComponentFixture<NavratriDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavratriDetailsComponent]
    });
    fixture = TestBed.createComponent(NavratriDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
