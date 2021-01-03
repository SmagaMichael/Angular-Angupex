import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirageComponent } from './mirage.component';

describe('MirageComponent', () => {
  let component: MirageComponent;
  let fixture: ComponentFixture<MirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
