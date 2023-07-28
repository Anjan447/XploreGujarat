import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachucharaMataTempleComponent } from './bachuchara-mata-temple.component';

describe('BachucharaMataTempleComponent', () => {
  let component: BachucharaMataTempleComponent;
  let fixture: ComponentFixture<BachucharaMataTempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BachucharaMataTempleComponent]
    });
    fixture = TestBed.createComponent(BachucharaMataTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
