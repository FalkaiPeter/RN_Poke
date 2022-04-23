export type ThemeVariant = 'light' | 'dark';

export interface Theme {
  BACKGROUND_COLOR: string;
  TEXT_COLOR: string;

  BLACK: string;
  WHITE: string;

  PRIMARY_300: string;
  PRIMARY_500: string;
  PRIMARY_700: string;

  SECONDARY_300: string;
  SECONDARY_500: string;
  SECONDARY_700: string;

  NAVIGATION_300: string;
  NAVIGATION_500: string;
  NAVIGATION_700: string;

  NEUTRAL_300: string;
  NEUTRAL_500: string;
  NEUTRAL_700: string;
}
