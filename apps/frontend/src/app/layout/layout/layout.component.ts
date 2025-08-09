import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { iconsDock } from '@core/data/data';
import { CvFinder, Experience } from '@core/models/cv';
import { Icons } from '@core/models/icons';
import { ApiService } from '@core/services/api.service';
import { WindowComponent } from '@shared/window/window.component';
import { version } from 'apps/frontend/src/version';
import { take } from 'rxjs/operators';
import { ThemeService } from '../../core/services/theme.service';
import { BackgroundImageComponent } from '../../shared/widgets/background-image/background-image.component';
import { ContextMenuComponent } from '../../shared/widgets/context-menu/context-menu.component';
import { HeaderComponent } from '../header/header.component';
import { TaskbarComponent } from '../taskbar/taskbar.component';
export interface TaskbarIcon {
  icon: string;
  label: string;
  id?: string;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ContextMenuComponent,
    BackgroundImageComponent,
    HeaderComponent,
    TaskbarComponent,
  ],
})
export class LayoutComponent implements OnInit {
  dialog = inject(MatDialog);
  themeService = inject(ThemeService);
  route = inject(ActivatedRoute);
  apiService = inject(ApiService);
  router = inject(Router);

  currentApplicationVersion = version;

  urlImage = '/assets/backgrounds/background-1.webp';
  lastRandomNumber!: number;
  folders: string[] = [];
  folderCounter = 0;
  iconsDock: Icons[];

  constructor() {
    this.handleProgram({
      icon: 'finder.png',
      label: 'Finder',
      id: 'FinderComponent',
    });
    this.iconsDock = iconsDock;
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe((params) => {
      const experienceName = params.get('experienceName');
      if (experienceName) {
        console.log('URL experience name:', experienceName);
        // Convert kebab-case URL to formatted title
        const formattedTitle = experienceName;
        console.log('Formatted title:', formattedTitle);

        // Get experiences and find the matching one
        this.apiService
          .getData()
          .pipe(take(1))
          .subscribe((cvData: CvFinder) => {
            console.log('CV data received:', cvData);
            const experiences = cvData.experiences;
            console.log('All experiences:', experiences);

            const matchingExperience = experiences.find((exp) => {
              const expFormatted = this.formatExperienceTitle(exp.name);
              console.log(
                `Comparing: "${expFormatted}" with "${formattedTitle}"`,
              );
              return expFormatted === formattedTitle;
            });

            console.log('Matching experience:', matchingExperience);

            if (matchingExperience) {
              this.openExperienceDialog(matchingExperience);
            } else {
              console.error(
                'No matching experience found for:',
                formattedTitle,
              );
            }
          });
      }
    });
  }

  private formatExperienceTitle(title: string): string {
    // For URL to title: convert kebab-case to normal case
    if (title.includes('-')) {
      return title
        .split('-')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(' ');
    }

    // For title to URL: convert normal case to kebab-case
    return title.toLowerCase().replace(/\s+/g, '-');
  }

  private openExperienceDialog(experience: Experience): void {
    console.log('Opening experience dialog with data:', experience);
    const dialogRef = this.dialog.open(WindowComponent, {
      data: {
        title: 'Experience',
        icon: 'experience.png',
        program: 'ExperienceComponent',
        data: experience,
      },
      hasBackdrop: true,
      panelClass: 'dialog-panel',
      maxHeight: '90vh',
    });

    // Add a class to the body to help with styling
    document.body.classList.add('experience-dialog-open');

    dialogRef.afterOpened().subscribe(() => {
      console.log('Dialog opened successfully');
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/desktop']);

      // Remove the class from the body when the dialog is closed
      document.body.classList.remove('experience-dialog-open');
    });
  }

  handleProgram(icon: Icons): void {
    const dialogRef = this.dialog.open(WindowComponent, {
      data: {
        title: icon.label,
        icon: icon.icon,
        program: icon.id,
      },
      hasBackdrop: false,
      panelClass: 'dialog-panel',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/desktop']);
    });
  }

  handleThemeToggle(isDarkTheme: boolean) {
    console.log('Dark theme enabled:', isDarkTheme);
    this.themeService.toggleDarkMode();
  }
}
