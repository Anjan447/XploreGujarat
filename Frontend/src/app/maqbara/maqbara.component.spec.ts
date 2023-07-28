import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaqbaraComponent } from './maqbara.component';

describe('MaqbaraComponent', () => {
  let component: MaqbaraComponent;
  let fixture: ComponentFixture<MaqbaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaqbaraComponent]
    });
    fixture = TestBed.createComponent(MaqbaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
