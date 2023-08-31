import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { CvFinder, Experience } from '@core/models/cv';
import { ApiService } from '@core/services/api.service';
import { RedirectService } from '@core/services/redirect.service';
import { WindowComponent } from '@app/shared/window/window.component';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
})
export class FinderComponent implements OnInit {
  data$: Observable<CvFinder> | undefined;

  constructor(
    private api: ApiService,
    private redirect: RedirectService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data$ = this.api.getData();
  }

  navigateUrl(url: string) {
    url ? this.redirect.navigate(url) : null;
  }
  openNotes(item: Experience): void {
    const dialogRef = this.dialog.open(WindowComponent, {
      data: {
        title: 'experience',
        icon: '',
        program: 'ExperienceComponent',
        data: item,
      },
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.info('The dialog was closed');
    });
  }
}
