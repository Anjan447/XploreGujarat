import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajchandraAshramComponent } from './rajchandra-ashram.component';

describe('RajchandraAshramComponent', () => {
  let component: RajchandraAshramComponent;
  let fixture: ComponentFixture<RajchandraAshramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RajchandraAshramComponent]
    });
    fixture = TestBed.createComponent(RajchandraAshramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
