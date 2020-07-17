import { addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ThemeDecorator from '../src/decorators/theme-decorator';

addDecorator(ThemeDecorator);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
