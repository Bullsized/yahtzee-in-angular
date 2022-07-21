import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollEmComponent } from './roll-em.component';

describe('RollEmComponent', () => {
  let component: RollEmComponent;
  let fixture: ComponentFixture<RollEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
