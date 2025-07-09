import type { MouseEvent } from 'react';
import { type SvgIconComponent } from '@mui/icons-material';

type NavigationGroup = {
  [x: string]: any;
  navigationLabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
};

export interface NavigationCollapseProps {
  menu: NavigationGroup;
  level?: number;
  pathWithoutLastPart: any;
  pathDirect: any;
  hideMenu: any;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

type NavigationGroupItem = {
  navigationLabel?: boolean;
  subheader?: string;
};

export interface NavigationGroupProps {
  item: NavigationGroupItem;
  hideMenu: string | boolean;
}

export type NavigationItem = {
  [x: string]: any;
  id?: string;
  navigationLabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: SvgIconComponent;
  href?: any;
  children?: NavigationGroup[];
  chip?: string;
  chipColor?: any;
  variant?: string;
  external?: boolean;
  level?: number;
  onClick?: MouseEvent<HTMLButtonElement, MouseEvent>;
};

export interface NavigationItemProps {
  item: NavigationItem;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number;
  pathDirect: string;
}
