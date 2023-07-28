import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DholaviraComponent } from './dholavira.component';

describe('DholaviraComponent', () => {
  let component: DholaviraComponent;
  let fixture: ComponentFixture<DholaviraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DholaviraComponent]
    });
    fixture = TestBed.createComponent(DholaviraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
