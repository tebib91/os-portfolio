import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowComponent } from '@app/shared/window/window.component';
import { CvFinder, Experience } from '@core/models/cv';
import { ApiService } from '@core/services/api.service';
import { RedirectService } from '@core/services/redirect.service';
import { Observable } from 'rxjs';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
  imports: [NgIf, NgFor, MatTooltip, AsyncPipe],
})
export class FinderComponent implements OnInit {
  private api = inject(ApiService);
  private redirect = inject(RedirectService);
  dialog = inject(MatDialog);

  data$: Observable<CvFinder> | undefined;
  showTooltip = false;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    this.data$ = this.api.getData();
  }

  navigateUrl(url: string) {
    if (url) {
      this.redirect.navigate(url);
    }
  }

  openNotes(item: Experience): void {
    const dialogRef = this.dialog.open(WindowComponent, {
      data: {
        title: 'Experience',
        icon: item.projects[0].icon,
        program: 'ExperienceComponent',
        data: item,
      },
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.info('The dialog was closed', { item, result });
    });
  }
}
