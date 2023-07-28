import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitiyalaComponent } from './mitiyala.component';

describe('MitiyalaComponent', () => {
  let component: MitiyalaComponent;
  let fixture: ComponentFixture<MitiyalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MitiyalaComponent]
    });
    fixture = TestBed.createComponent(MitiyalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
