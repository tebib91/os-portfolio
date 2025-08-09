import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experience } from '@app/core/models/cv';
import { Program } from '@app/core/models/menu';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [NgIf, NgFor],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
    trigger('staggerList', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            stagger('100ms', [
              animate(
                '300ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class ExperienceComponent {
  data = inject<Program>(MAT_DIALOG_DATA);

  experience: Experience | undefined;
  fallbackImageUrl =
    'https://img.icons8.com/?size=100&id=zGSj13jiurKj&format=png&color=000000';
  fallbackTechImageUrl =
    'https://img.icons8.com/?size=100&id=55494&format=png&color=000000';

  constructor() {
    const data = this.data;
    console.log('ExperienceComponent received data:', data);
    this.experience = data?.data;
    console.log('Experience set to:', this.experience);
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    const parentClass = imgElement.parentElement?.className;

    // Use different fallback images based on context
    if (parentClass?.includes('tech-avatar')) {
      imgElement.src = this.fallbackTechImageUrl;
    } else {
      imgElement.src = this.fallbackImageUrl;
    }

    // Add a class to indicate fallback image is used
    imgElement.classList.add('fallback-image');
  }
}
