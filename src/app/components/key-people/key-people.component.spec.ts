import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPeopleComponent } from './key-people.component';

describe('KeyPeopleComponent', () => {
  let component: KeyPeopleComponent;
  let fixture: ComponentFixture<KeyPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
