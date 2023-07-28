import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadnagarComponent } from './vadnagar.component';

describe('VadnagarComponent', () => {
  let component: VadnagarComponent;
  let fixture: ComponentFixture<VadnagarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VadnagarComponent]
    });
    fixture = TestBed.createComponent(VadnagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
