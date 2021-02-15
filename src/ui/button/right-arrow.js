/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Button from './button';
import { iconButtonStyle, iconStyle } from './base-style';
import { CircleRightIcon } from '../svg/icons';

export default function RightArrow({ className, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button
      buttonType="quaternary"
      className={className}
      css={css(iconButtonStyle)}
      {...props}
    >
      <CircleRightIcon style={iconStyle} />
    </Button>
  );
}

RightArrow.propTypes = {
  className: PropTypes.string,
};
