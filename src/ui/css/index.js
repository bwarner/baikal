import facepaint from 'facepaint';

export const mq = facepaint([
  '@media (min-width: 640px)',
  '@media (min-width: 768px)',
  '@media (min-width: 1024px)',
  '@media (min-width: 1280px)',
]);

export { default as ThemeContext } from './theme-context';
export { default as ThemeRoot } from './theme-root';
