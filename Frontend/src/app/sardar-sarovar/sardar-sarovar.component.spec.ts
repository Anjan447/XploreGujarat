import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SardarSarovarComponent } from './sardar-sarovar.component';

describe('SardarSarovarComponent', () => {
  let component: SardarSarovarComponent;
  let fixture: ComponentFixture<SardarSarovarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SardarSarovarComponent]
    });
    fixture = TestBed.createComponent(SardarSarovarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
