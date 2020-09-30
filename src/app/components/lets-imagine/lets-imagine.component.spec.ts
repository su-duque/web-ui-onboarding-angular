import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsImagineComponent } from './lets-imagine.component';

describe('LetsImagineComponent', () => {
  let component: LetsImagineComponent;
  let fixture: ComponentFixture<LetsImagineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsImagineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsImagineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
