import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLegendComponent } from './one-legend.component';

describe('OneLegendComponent', () => {
  let component: OneLegendComponent;
  let fixture: ComponentFixture<OneLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLegendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
