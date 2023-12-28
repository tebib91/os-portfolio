import { Experience } from './cv';

export interface MenuBar {
  icon: string;
  label: string;
  submenu: string[];
}

export interface Program {
  icon: string;
  title: string;
  program: string;
  data: Experience;
}

export interface MenuContext {
  label: string;
  action: string;
}
