import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifelineComponent } from './lifeline.component';

describe('LifelineComponent', () => {
  let component: LifelineComponent;
  let fixture: ComponentFixture<LifelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
