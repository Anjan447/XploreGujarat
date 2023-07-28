import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedpurMandviComponent } from './ahmedpur-mandvi.component';

describe('AhmedpurMandviComponent', () => {
  let component: AhmedpurMandviComponent;
  let fixture: ComponentFixture<AhmedpurMandviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhmedpurMandviComponent]
    });
    fixture = TestBed.createComponent(AhmedpurMandviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
