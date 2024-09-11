import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowComponent } from '@app/shared/window/window.component';
import { CvFinder, Experience } from '@core/models/cv';
import { ApiService } from '@core/services/api.service';
import { RedirectService } from '@core/services/redirect.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
})
export class FinderComponent implements OnInit {
  data$: Observable<CvFinder> | undefined;
  showTooltip = false;

  constructor(
    private api: ApiService,
    private redirect: RedirectService,
    public dialog: MatDialog,
  ) {}

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
