/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { InputErrorImage, InputSuccessImage } from '../svg-background';
import {
  User, Lock, CircleDown, CircleRight, Mail2,
} from '../svg/images';

const baseIndicatorStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1rem',
};

const baseIndicatorStyleRight = {
  ...baseIndicatorStyle,
  backgroundPosition: 'right 15px center',
  paddingRight: 32,
};

const baseIndicatorStyleLeft = {
  ...baseIndicatorStyle,
  backgroundPosition: 'left 15px center',
  paddingLeft: 32,
};

export const Styles = {
  Success: css({
    ...baseIndicatorStyleRight,
    backgroundImage: `url(${InputSuccessImage})`,
  }),
  Error: css({
    ...baseIndicatorStyleRight,
    backgroundImage: `url(${InputErrorImage})`,
  }),
  Disabled: {
    backgroundColor: '#E2E2E2',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
  },
  Username: css({
    ...baseIndicatorStyleLeft,
    backgroundImage: `url(${User})`,
  }),
  Password: css({
    ...baseIndicatorStyleRight,
    backgroundImage: `url(${Lock})`,
  }),
  SelectBox: css({
    ...baseIndicatorStyleRight,
    backgroundImage: `url(${CircleDown})`,
  }),
  WithButton: css({
    ...baseIndicatorStyleRight,
    backgroundImage: `url(${CircleRight})`,
    '.svg-font': {
      backgroundColor: 'green',
      color: 'white',
    },
  }),
  Email: css({
    ...baseIndicatorStyleRight,
    backgroundImage: `url(${Mail2})`,
  }),
};

const Input = ({ className, ...rest }) => (
  <input
    className={className}
    autoComplete="off"
    css={css`
      background-color: var(--fv-input-background-color);
      border-radius: var(--fv-input-border-radius);
      border: none;
      &:focus {
        border: var(--fv-input-border);
      }
      margin: 5px;
    `}
    {...rest}
  />
);

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
