import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadamDungriEcotourismComponent } from './padam-dungri-ecotourism.component';

describe('PadamDungriEcotourismComponent', () => {
  let component: PadamDungriEcotourismComponent;
  let fixture: ComponentFixture<PadamDungriEcotourismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadamDungriEcotourismComponent]
    });
    fixture = TestBed.createComponent(PadamDungriEcotourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
