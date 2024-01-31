import {theme} from '.';

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
