import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatanPatolaComponent } from './patan-patola.component';

describe('PatanPatolaComponent', () => {
  let component: PatanPatolaComponent;
  let fixture: ComponentFixture<PatanPatolaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatanPatolaComponent]
    });
    fixture = TestBed.createComponent(PatanPatolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
