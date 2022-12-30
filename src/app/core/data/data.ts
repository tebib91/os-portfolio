import { Icons } from 'src/app/core/models/icons';
import { MenuBar } from '../models/menu';


export const iconsDock:Icons[] =[
  { icon: 'finder.png', label: 'Finder' },
  { icon: 'notes.png', label: 'Notes' },
  { icon: 'maps.png', label: 'Maps' },
  { icon: 'calculator.png', label: 'Calculator' },
  { icon: 'mail.png', label: 'Mail' },
  { icon: 'music.png', label: 'Music' },
  { icon: 'preferences.png', label: 'System Preferences' },
  { icon: 'bin.png', label: 'Bin' },

]


export const menusBar: MenuBar[] =[
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
]
