import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GibraltarComponent } from './gibraltar.component';

describe('GibraltarComponent', () => {
  let component: GibraltarComponent;
  let fixture: ComponentFixture<GibraltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GibraltarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GibraltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
