import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarangaCavesComponent } from './taranga-caves.component';

describe('TarangaCavesComponent', () => {
  let component: TarangaCavesComponent;
  let fixture: ComponentFixture<TarangaCavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarangaCavesComponent]
    });
    fixture = TestBed.createComponent(TarangaCavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
