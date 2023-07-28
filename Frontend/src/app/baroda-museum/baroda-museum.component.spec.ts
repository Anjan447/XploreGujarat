import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarodaMuseumComponent } from './baroda-museum.component';

describe('BarodaMuseumComponent', () => {
  let component: BarodaMuseumComponent;
  let fixture: ComponentFixture<BarodaMuseumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarodaMuseumComponent]
    });
    fixture = TestBed.createComponent(BarodaMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
