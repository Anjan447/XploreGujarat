import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChhariDhandComponent } from './chhari-dhand.component';

describe('ChhariDhandComponent', () => {
  let component: ChhariDhandComponent;
  let fixture: ComponentFixture<ChhariDhandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChhariDhandComponent]
    });
    fixture = TestBed.createComponent(ChhariDhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
