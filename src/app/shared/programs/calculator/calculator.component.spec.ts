import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
  });

  it('should add numbers correctly', () => {
    // test code
  });
});
