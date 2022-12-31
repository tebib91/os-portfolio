import { Icons } from 'src/app/core/models/icons';
import { MenuBar } from '../models/menu';

export const iconsDock: Icons[] = [
  { icon: 'finder.png', label: 'Finder', component: 'FinderComponent' },
  { icon: 'notes.png', label: 'Notes', component: 'FinderComponent' },
  { icon: 'maps.png', label: 'Maps', component: 'MapsComponent' },
  {
    icon: 'calculator.png',
    label: 'Calculator',
    component: 'CalculatorComponent',
  },
  { icon: 'mail.png', label: 'Mail', component: 'FinderComponent' },
  { icon: 'music.png', label: 'Music', component: 'FinderComponent' },
  {
    icon: 'preferences.png',
    label: 'System Preferences',
    component: 'FinderComponent',
  },
  { icon: 'bin.png', label: 'Bin', component: 'FinderComponent' },
];

export const menusBar: MenuBar[] = [
  {
    icon: 'assets/dock/bin.png',
    label: 'Finder',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/finder.png',
    label: 'File',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'Edit',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'View',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'Go',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'Window',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'Help',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
];
