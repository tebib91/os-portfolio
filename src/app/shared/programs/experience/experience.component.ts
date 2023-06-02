import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experience } from '@app/core/models/cv';
import { Program } from '@app/core/models/menu';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experience: Experience;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(@Inject(MAT_DIALOG_DATA) public data: Program) {
    this.experience = data?.data;
  }
}
