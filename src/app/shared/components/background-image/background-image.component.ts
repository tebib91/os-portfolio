import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  template: `
   <div [style.background-image]="'url(' + imageUrl + ')'"
         [style.background-size]="size"
         [style.background-position]="position"
         [style.background-repeat]="repeat"
         class="full-screen-background">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./background-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundImageComponent {
  @Input() imageUrl!: string;
  @Input() size!: string;
  @Input() position!: string;
  @Input() repeat!: string;
}
