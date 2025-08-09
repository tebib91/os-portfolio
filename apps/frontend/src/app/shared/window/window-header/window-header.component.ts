import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowHeaderComponent {
  readonly _onClose = output<void>();
  readonly _onMinimize = output<void>();
  readonly _onMaximize = output<void>();
}
