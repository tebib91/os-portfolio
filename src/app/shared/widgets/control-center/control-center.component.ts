import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-control-center',
  templateUrl: './control-center.component.html',
  styleUrls: ['./control-center.component.scss'],
})
export class ControlCenterComponent {
  @Input() visible!: boolean;

  @ViewChild('wrapper', { static: false }) wrapper!: ElementRef;
  private unlistener!: () => void;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.unlistener = this.renderer2.listen('document', 'click', (event) => {
      console.log('click', this.visible);
      if (this.visible && !this.wrapper?.nativeElement.contains(event.target)) {
        // this.visible = false;
      }
    });
  }

  brightnessChange(e: any) {
    console.log('e', e.target.value);
    let brightnessValue = e.target.value || 100;
    const bodyElement = document.body;
    bodyElement.style.filter = `brightness(${brightnessValue + '%'})`;
  }

  soundChange(e: any) {
    console.log('e', e.target.value);
    let soundValue = e.target.value || 100;
  }

  ngOnDestroy() {
    this.unlistener();
  }
}
