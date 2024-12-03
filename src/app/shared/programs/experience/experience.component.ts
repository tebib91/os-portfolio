import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experience } from '@app/core/models/cv';
import { Program } from '@app/core/models/menu';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgFor],
})
export class ExperienceComponent {
  experience: Experience | undefined;
  fallbackImageUrl =
    'https://img.icons8.com/?size=100&id=zGSj13jiurKj&format=png&color=000000';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Program) {
    // Log the incoming data and the extracted experience
    console.log('Received data:', data);
    this.experience = data?.data;
    console.log('Extracted experience:', this.experience);
  }
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.fallbackImageUrl;
  }
}
