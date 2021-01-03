import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobaComponent } from './loba.component';

describe('LobaComponent', () => {
  let component: LobaComponent;
  let fixture: ComponentFixture<LobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
