import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarayanSarovarComponent } from './narayan-sarovar.component';

describe('NarayanSarovarComponent', () => {
  let component: NarayanSarovarComponent;
  let fixture: ComponentFixture<NarayanSarovarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarayanSarovarComponent]
    });
    fixture = TestBed.createComponent(NarayanSarovarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
