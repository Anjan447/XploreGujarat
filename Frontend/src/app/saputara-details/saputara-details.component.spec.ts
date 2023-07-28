import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaputaraDetailsComponent } from './saputara-details.component';

describe('SaputaraDetailsComponent', () => {
  let component: SaputaraDetailsComponent;
  let fixture: ComponentFixture<SaputaraDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaputaraDetailsComponent]
    });
    fixture = TestBed.createComponent(SaputaraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
