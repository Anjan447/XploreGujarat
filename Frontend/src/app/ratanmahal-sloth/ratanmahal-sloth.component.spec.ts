import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatanmahalSlothComponent } from './ratanmahal-sloth.component';

describe('RatanmahalSlothComponent', () => {
  let component: RatanmahalSlothComponent;
  let fixture: ComponentFixture<RatanmahalSlothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatanmahalSlothComponent]
    });
    fixture = TestBed.createComponent(RatanmahalSlothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
