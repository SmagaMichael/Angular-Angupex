import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampartComponent } from './rampart.component';

describe('RampartComponent', () => {
  let component: RampartComponent;
  let fixture: ComponentFixture<RampartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RampartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RampartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
