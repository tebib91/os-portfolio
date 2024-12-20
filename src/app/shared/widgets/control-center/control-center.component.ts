import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  input,
  viewChild,
  inject,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-control-center',
  templateUrl: './control-center.component.html',
  styleUrls: ['./control-center.component.scss'],
  imports: [NgIf],
})
export class ControlCenterComponent implements OnInit, OnDestroy {
  private renderer2 = inject(Renderer2);

  readonly visible = input.required<boolean>();

  readonly wrapper = viewChild.required<ElementRef>('wrapper');
  private unlistener!: () => void;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    this.unlistener = this.renderer2.listen('document', 'click', (event) => {
      if (
        this.visible() &&
        !this.wrapper()?.nativeElement.contains(event.target)
      ) {
        // this.visible = false;
      }
    });
  }

  brightnessChange(event: Event) {
    const brightnessValue = (event.target as HTMLInputElement).value || 100;
    const bodyElement = document.body;
    bodyElement.style.filter = `brightness(${brightnessValue + '%'})`;
  }

  soundChange(event: Event) {
    const soundValue = (event.target as HTMLInputElement).value || 100;
    return soundValue;
  }

  ngOnDestroy() {
    this.unlistener();
  }
}
