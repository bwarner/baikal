import React, { useContext, useEffect } from 'react';
import ThemeContext from '../ui/css/theme-context';
import ThemeRoot from '../ui/css/theme-root';

export default function ThemeDecorator(storyFn) {
  const theme = useContext(ThemeContext);
  useEffect(() => ThemeRoot(theme), []);
  return <>{storyFn()}</>;
}
