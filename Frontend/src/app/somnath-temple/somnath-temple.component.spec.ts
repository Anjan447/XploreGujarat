import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomnathTempleComponent } from './somnath-temple.component';

describe('SomnathTempleComponent', () => {
  let component: SomnathTempleComponent;
  let fixture: ComponentFixture<SomnathTempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomnathTempleComponent]
    });
    fixture = TestBed.createComponent(SomnathTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
