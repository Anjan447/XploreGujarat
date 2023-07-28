import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamodarKundComponent } from './damodar-kund.component';

describe('DamodarKundComponent', () => {
  let component: DamodarKundComponent;
  let fixture: ComponentFixture<DamodarKundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DamodarKundComponent]
    });
    fixture = TestBed.createComponent(DamodarKundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
