import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhalkaTirthComponent } from './bhalka-tirth.component';

describe('BhalkaTirthComponent', () => {
  let component: BhalkaTirthComponent;
  let fixture: ComponentFixture<BhalkaTirthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BhalkaTirthComponent]
    });
    fixture = TestBed.createComponent(BhalkaTirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
