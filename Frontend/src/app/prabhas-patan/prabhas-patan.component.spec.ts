import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrabhasPatanComponent } from './prabhas-patan.component';

describe('PrabhasPatanComponent', () => {
  let component: PrabhasPatanComponent;
  let fixture: ComponentFixture<PrabhasPatanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrabhasPatanComponent]
    });
    fixture = TestBed.createComponent(PrabhasPatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
