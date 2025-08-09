import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Experience } from '@core/models/cv';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  imports: [NgFor],
})
export class NotesComponent {
  dialogRef = inject<MatDialogRef<NotesComponent>>(MatDialogRef);
  data = inject<Experience>(MAT_DIALOG_DATA);

  constructor() {}
}
