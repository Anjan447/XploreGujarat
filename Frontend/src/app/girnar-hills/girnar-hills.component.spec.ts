import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirnarHillsComponent } from './girnar-hills.component';

describe('GirnarHillsComponent', () => {
  let component: GirnarHillsComponent;
  let fixture: ComponentFixture<GirnarHillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GirnarHillsComponent]
    });
    fixture = TestBed.createComponent(GirnarHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
