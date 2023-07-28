import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiKadiVavComponent } from './adi-kadi-vav.component';

describe('AdiKadiVavComponent', () => {
  let component: AdiKadiVavComponent;
  let fixture: ComponentFixture<AdiKadiVavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdiKadiVavComponent]
    });
    fixture = TestBed.createComponent(AdiKadiVavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
