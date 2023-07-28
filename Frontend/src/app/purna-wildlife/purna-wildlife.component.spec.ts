import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurnaWildlifeComponent } from './purna-wildlife.component';

describe('PurnaWildlifeComponent', () => {
  let component: PurnaWildlifeComponent;
  let fixture: ComponentFixture<PurnaWildlifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurnaWildlifeComponent]
    });
    fixture = TestBed.createComponent(PurnaWildlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
