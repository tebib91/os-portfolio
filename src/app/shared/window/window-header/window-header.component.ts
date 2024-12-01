import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class WindowHeaderComponent {
  @Output() _onClose = new EventEmitter<void>();
  @Output() _onMinimize = new EventEmitter<void>();
  @Output() _onMaximize = new EventEmitter<void>();
}
