import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GujaratiThaliComponent } from './gujarati-thali.component';

describe('GujaratiThaliComponent', () => {
  let component: GujaratiThaliComponent;
  let fixture: ComponentFixture<GujaratiThaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GujaratiThaliComponent]
    });
    fixture = TestBed.createComponent(GujaratiThaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
