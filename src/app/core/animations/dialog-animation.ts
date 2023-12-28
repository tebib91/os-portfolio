import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const dialogAnimation = trigger('dialogAnimation', [
  state(
    'void',
    style({
      transform: 'scale(0.5)',
      opacity: 0,
    }),
  ),
  state(
    '*',
    style({
      transform: 'scale(1)',
      opacity: 1,
    }),
  ),
  transition('void => *', animate('300ms ease-out')),
  transition('* => void', animate('300ms ease-in')),
]);
