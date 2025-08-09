import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';
import { WindowComponent } from '@app/shared/window/window.component';
import { CvFinder, Experience } from '@core/models/cv';
import { ApiService } from '@core/services/api.service';
import { RedirectService } from '@core/services/redirect.service';
import { Observable } from 'rxjs';

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

  constructor() {}

  ngOnInit(): void {
    this.data$ = this.api.getData();
  }

  private formatExperienceTitle(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-');
  }

  navigateUrl(url: string) {
    if (url) {
      this.redirect.navigate(url);
    }
  }

  openNotes(item: Experience): void {
    // Format experience name for URL
    const experienceName = this.formatExperienceTitle(item.name);

    // Update URL with experience name for SEO
    window.history.pushState({}, '', `/desktop/experience/${experienceName}`);

    const dialogRef = this.dialog.open(WindowComponent, {
      data: {
        title: 'Experience',
        icon: item.projects[0].icon,
        program: 'ExperienceComponent',
        data: item,
      },
      hasBackdrop: true,
      panelClass: 'dialog-panel',
      maxHeight: '90vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Revert URL to desktop when dialog is closed
      window.history.pushState({}, '', '/desktop');

      console.log(`Dialog result: ${result}`);
    });
  }
}
