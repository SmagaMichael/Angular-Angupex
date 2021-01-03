import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WattsonComponent } from './wattson.component';

describe('WattsonComponent', () => {
  let component: WattsonComponent;
  let fixture: ComponentFixture<WattsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WattsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WattsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
