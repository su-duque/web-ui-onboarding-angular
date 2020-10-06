import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriforceComponent } from './triforce.component';

describe('TriforceComponent', () => {
  let component: TriforceComponent;
  let fixture: ComponentFixture<TriforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriforceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
