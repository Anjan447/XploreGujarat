import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunTempleComponent } from './sun-temple.component';

describe('SunTempleComponent', () => {
  let component: SunTempleComponent;
  let fixture: ComponentFixture<SunTempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunTempleComponent]
    });
    fixture = TestBed.createComponent(SunTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
