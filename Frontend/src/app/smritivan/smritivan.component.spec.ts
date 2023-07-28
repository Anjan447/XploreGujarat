import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmritivanComponent } from './smritivan.component';

describe('SmritivanComponent', () => {
  let component: SmritivanComponent;
  let fixture: ComponentFixture<SmritivanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmritivanComponent]
    });
    fixture = TestBed.createComponent(SmritivanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
