import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowHeaderComponent } from './window-header.component';

describe('HeaderComponent', () => {
  let component: WindowHeaderComponent;
  let fixture: ComponentFixture<WindowHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowHeaderComponent],
    });
    fixture = TestBed.createComponent(WindowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
