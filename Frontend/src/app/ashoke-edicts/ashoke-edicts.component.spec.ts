import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshokeEdictsComponent } from './ashoke-edicts.component';

describe('AshokeEdictsComponent', () => {
  let component: AshokeEdictsComponent;
  let fixture: ComponentFixture<AshokeEdictsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AshokeEdictsComponent]
    });
    fixture = TestBed.createComponent(AshokeEdictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
