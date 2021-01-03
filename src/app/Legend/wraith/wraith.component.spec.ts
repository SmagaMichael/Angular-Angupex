import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WraithComponent } from './wraith.component';

describe('WraithComponent', () => {
  let component: WraithComponent;
  let fixture: ComponentFixture<WraithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WraithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WraithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
