import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootComponent } from './boot.component';
import { TranslateModule } from '@ngx-translate/core';

describe('BootComponent', () => {
  let component: BootComponent;
  let fixture: ComponentFixture<BootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
