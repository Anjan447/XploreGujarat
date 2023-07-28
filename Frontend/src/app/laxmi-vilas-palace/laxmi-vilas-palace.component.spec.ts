import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaxmiVilasPalaceComponent } from './laxmi-vilas-palace.component';

describe('LaxmiVilasPalaceComponent', () => {
  let component: LaxmiVilasPalaceComponent;
  let fixture: ComponentFixture<LaxmiVilasPalaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaxmiVilasPalaceComponent]
    });
    fixture = TestBed.createComponent(LaxmiVilasPalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
