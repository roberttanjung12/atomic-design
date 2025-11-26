export interface AppearanceSidebar {
  background: string;
  isCollapse: boolean;
  isMobile: boolean;
  isHover: boolean;
  itemColor: string;
  itemHoverBackground: string;
  itemHoverColor: string;
  itemSelectedBackground: string;
  itemSelectedColor: string;
  itemSelectedBorderColor: string;
  miniWidth: number;
  subheaderColor: string;
  subMenuHoverBackground: string;
  variant: string;
  width: number;
}

export interface Appearance {
  activeLanguage?: string;
  activeMode?: string;
  activeTheme?: string;
  borderRadius?: number;
  headerHeight?: number;
  isCardShadow?: boolean;
  isContainerFull?: boolean;
  sidebar: AppearanceSidebar;
}
