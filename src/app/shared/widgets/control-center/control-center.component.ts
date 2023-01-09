import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-control-center',
  templateUrl: './control-center.component.html',
  styleUrls: ['./control-center.component.scss'],
})
export class ControlCenterComponent {
  @Input() visible!: boolean;

  @ViewChild('wrapper', { static: false }) wrapper!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    document.addEventListener('click', (event) => {
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
}
