import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NargolBeachComponent } from './nargol-beach.component';

describe('NargolBeachComponent', () => {
  let component: NargolBeachComponent;
  let fixture: ComponentFixture<NargolBeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NargolBeachComponent]
    });
    fixture = TestBed.createComponent(NargolBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
