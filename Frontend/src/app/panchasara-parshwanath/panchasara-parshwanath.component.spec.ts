import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchasaraParshwanathComponent } from './panchasara-parshwanath.component';

describe('PanchasaraParshwanathComponent', () => {
  let component: PanchasaraParshwanathComponent;
  let fixture: ComponentFixture<PanchasaraParshwanathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanchasaraParshwanathComponent]
    });
    fixture = TestBed.createComponent(PanchasaraParshwanathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
