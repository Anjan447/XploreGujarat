import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirComponent } from './gir.component';

describe('GirComponent', () => {
  let component: GirComponent;
  let fixture: ComponentFixture<GirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GirComponent]
    });
    fixture = TestBed.createComponent(GirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
