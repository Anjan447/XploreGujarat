import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurMuseumComponent } from './dinosaur-museum.component';

describe('DinosaurMuseumComponent', () => {
  let component: DinosaurMuseumComponent;
  let fixture: ComponentFixture<DinosaurMuseumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinosaurMuseumComponent]
    });
    fixture = TestBed.createComponent(DinosaurMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
