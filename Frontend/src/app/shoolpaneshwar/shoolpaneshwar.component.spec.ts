import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoolpaneshwarComponent } from './shoolpaneshwar.component';

describe('ShoolpaneshwarComponent', () => {
  let component: ShoolpaneshwarComponent;
  let fixture: ComponentFixture<ShoolpaneshwarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoolpaneshwarComponent]
    });
    fixture = TestBed.createComponent(ShoolpaneshwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
