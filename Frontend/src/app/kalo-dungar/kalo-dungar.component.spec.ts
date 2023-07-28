import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaloDungarComponent } from './kalo-dungar.component';

describe('KaloDungarComponent', () => {
  let component: KaloDungarComponent;
  let fixture: ComponentFixture<KaloDungarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaloDungarComponent]
    });
    fixture = TestBed.createComponent(KaloDungarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
