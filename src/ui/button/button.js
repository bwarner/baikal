/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useContext } from 'react';
import { defaultProps, propTypes } from './prop-types';
import { baseButtonStyle } from './base-style';
import ThemeContext from '../css/theme-context';

export default function Button({
  styles,
  buttonType,
  outline,
  rounded,
  ...props
}) {
  const theme = useContext(ThemeContext);
  // eslint-disable-next-line react/jsx-props-no-spreading,react/button-has-type
  const buttonTheme = theme.buttons[buttonType];
  const buttonStyle = outline
    ? css`
        --button-color: ${buttonTheme.backgroundColor};
        --button-background-color: transparent;
        --button-border-color: currentcolor;
        --button-font-size: ${buttonTheme.fontSize};
        --button-line-height: ${buttonTheme.lineHeight};
        border-style: solid;
        border-width: 1px;
        border-color: var(--border-button-color);
        &:hover {
          opacity: var(--button-hover-opacity);
        }
      `
    : css`
        --button-color: ${buttonTheme.color};
        --button-background-color: ${buttonTheme.backgroundColor};
        --button-font-size: ${buttonTheme.fontSize};
        --button-line-height: ${buttonTheme.lineHeight};
        border-style: solid;
        border-width: 1px;
        border-color: var(--border-button-color);
        &:hover {
          opacity: var(--button-hover-opacity);
        }
      `;

  // eslint-disable-next-line react/button-has-type,react/jsx-props-no-spreading
  return (
    <button
      type="button"
      css={[baseButtonStyle, buttonStyle, rounded && theme.buttonRounded, styles]}
      {...props}
    />
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
