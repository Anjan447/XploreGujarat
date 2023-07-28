import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NironaComponent } from './nirona.component';

describe('NironaComponent', () => {
  let component: NironaComponent;
  let fixture: ComponentFixture<NironaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NironaComponent]
    });
    fixture = TestBed.createComponent(NironaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
