import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiousSitesComponent } from './religious-sites.component';

describe('ReligiousSitesComponent', () => {
  let component: ReligiousSitesComponent;
  let fixture: ComponentFixture<ReligiousSitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReligiousSitesComponent]
    });
    fixture = TestBed.createComponent(ReligiousSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
