export interface MenuContext {
  label: string;
}

export interface MenuBar {
  icon: string;
  label: string;
  submenu: string[];
}

export interface Program {
  icon: string;
  title: string;
  program: string;
}
