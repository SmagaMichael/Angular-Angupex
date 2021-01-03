import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodhoundComponent } from './bloodhound.component';

describe('BloodhoundComponent', () => {
  let component: BloodhoundComponent;
  let fixture: ComponentFixture<BloodhoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodhoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodhoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
