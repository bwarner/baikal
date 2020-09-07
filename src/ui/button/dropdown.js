/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Button from './button';
import { iconButtonStyle, iconStyle } from './base-style';
import { CircleDownIcon } from '../svg/icons';

export default function Dropdown({ className, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button
      buttonType="dropdown"
      className={className}
      css={css(iconButtonStyle, {
      })}
      {...props}
    >
      <CircleDownIcon style={iconStyle} />
    </Button>
  );
}

Dropdown.propTypes = {
  className: PropTypes.string,
};
