import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenantComponent } from './revenant.component';

describe('RevenantComponent', () => {
  let component: RevenantComponent;
  let fixture: ComponentFixture<RevenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
