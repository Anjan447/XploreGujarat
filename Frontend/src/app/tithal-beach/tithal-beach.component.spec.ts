import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TithalBeachComponent } from './tithal-beach.component';

describe('TithalBeachComponent', () => {
  let component: TithalBeachComponent;
  let fixture: ComponentFixture<TithalBeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TithalBeachComponent]
    });
    fixture = TestBed.createComponent(TithalBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
