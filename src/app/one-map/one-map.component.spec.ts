import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMapComponent } from './one-map.component';

describe('OneMapComponent', () => {
  let component: OneMapComponent;
  let fixture: ComponentFixture<OneMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
