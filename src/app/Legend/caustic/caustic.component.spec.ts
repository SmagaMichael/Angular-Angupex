import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausticComponent } from './caustic.component';

describe('CausticComponent', () => {
  let component: CausticComponent;
  let fixture: ComponentFixture<CausticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CausticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CausticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
