import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriveniSangamComponent } from './triveni-sangam.component';

describe('TriveniSangamComponent', () => {
  let component: TriveniSangamComponent;
  let fixture: ComponentFixture<TriveniSangamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriveniSangamComponent]
    });
    fixture = TestBed.createComponent(TriveniSangamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
