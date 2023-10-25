import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjKritikaComponent } from './uj-kritika.component';

describe('UjKritikaComponent', () => {
  let component: UjKritikaComponent;
  let fixture: ComponentFixture<UjKritikaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UjKritikaComponent]
    });
    fixture = TestBed.createComponent(UjKritikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
