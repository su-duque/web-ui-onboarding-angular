import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosComponent } from './studios.component';

describe('StudiosComponent', () => {
  let component: StudiosComponent;
  let fixture: ComponentFixture<StudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
