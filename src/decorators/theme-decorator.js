import React, { useContext, useEffect } from 'react';
import ThemeContext from '../ui/css/theme-provider';
import Typography from '../ui/css/typography';

export default function ThemeDecorator(storyFn) {
  const theme = useContext(ThemeContext);
  useEffect(() => Typography(theme), []);
  return <>{storyFn()}</>;
}
