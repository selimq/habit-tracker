import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitAddFormComponent } from './habit-add-form.component';

describe('HabitAddFormComponent', () => {
  let component: HabitAddFormComponent;
  let fixture: ComponentFixture<HabitAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
