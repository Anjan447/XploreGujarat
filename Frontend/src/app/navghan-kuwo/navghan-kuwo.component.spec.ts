import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavghanKuwoComponent } from './navghan-kuwo.component';

describe('NavghanKuwoComponent', () => {
  let component: NavghanKuwoComponent;
  let fixture: ComponentFixture<NavghanKuwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavghanKuwoComponent]
    });
    fixture = TestBed.createComponent(NavghanKuwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
