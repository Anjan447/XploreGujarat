import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoteshwarMahadevTempleComponent } from './koteshwar-mahadev-temple.component';

describe('KoteshwarMahadevTempleComponent', () => {
  let component: KoteshwarMahadevTempleComponent;
  let fixture: ComponentFixture<KoteshwarMahadevTempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KoteshwarMahadevTempleComponent]
    });
    fixture = TestBed.createComponent(KoteshwarMahadevTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
