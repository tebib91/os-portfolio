import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-control-center',
  templateUrl: './control-center.component.html',
  styleUrls: ['./control-center.component.scss'],
  imports: [NgIf],
})
export class ControlCenterComponent implements OnInit, OnDestroy {
  @Input() visible!: boolean;

  @ViewChild('wrapper', { static: false }) wrapper!: ElementRef;
  private unlistener!: () => void;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.unlistener = this.renderer2.listen('document', 'click', (event) => {
      if (this.visible && !this.wrapper?.nativeElement.contains(event.target)) {
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
