import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UparkotComponent } from './uparkot.component';

describe('UparkotComponent', () => {
  let component: UparkotComponent;
  let fixture: ComponentFixture<UparkotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UparkotComponent]
    });
    fixture = TestBed.createComponent(UparkotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
