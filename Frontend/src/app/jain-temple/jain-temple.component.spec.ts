import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JainTempleComponent } from './jain-temple.component';

describe('JainTempleComponent', () => {
  let component: JainTempleComponent;
  let fixture: ComponentFixture<JainTempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JainTempleComponent]
    });
    fixture = TestBed.createComponent(JainTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
