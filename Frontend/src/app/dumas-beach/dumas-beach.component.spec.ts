import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumasBeachComponent } from './dumas-beach.component';

describe('DumasBeachComponent', () => {
  let component: DumasBeachComponent;
  let fixture: ComponentFixture<DumasBeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumasBeachComponent]
    });
    fixture = TestBed.createComponent(DumasBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
