import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JambughodaComponent } from './jambughoda.component';

describe('JambughodaComponent', () => {
  let component: JambughodaComponent;
  let fixture: ComponentFixture<JambughodaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JambughodaComponent]
    });
    fixture = TestBed.createComponent(JambughodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
