import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicePickerComponent } from './dice-picker.component';

describe('DicePickerComponent', () => {
  let component: DicePickerComponent;
  let fixture: ComponentFixture<DicePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
