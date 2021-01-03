import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathfinderComponent } from './pathfinder.component';

describe('PathfinderComponent', () => {
  let component: PathfinderComponent;
  let fixture: ComponentFixture<PathfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathfinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
