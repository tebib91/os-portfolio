import { CvFinder, Experience } from '@core/models/cv';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';
import { RedirectService } from '@core/services/redirect.service';
import { MatDialog } from '@angular/material/dialog';
import { NotesComponent } from '@app/shared/widgets/notes/notes.component';

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
    const dialogRef = this.dialog.open(NotesComponent, {
      data: item,
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.info('The dialog was closed', { item, result });
    });
  }
}
