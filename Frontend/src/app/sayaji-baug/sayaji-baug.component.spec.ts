import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayajiBaugComponent } from './sayaji-baug.component';

describe('SayajiBaugComponent', () => {
  let component: SayajiBaugComponent;
  let fixture: ComponentFixture<SayajiBaugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SayajiBaugComponent]
    });
    fixture = TestBed.createComponent(SayajiBaugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
