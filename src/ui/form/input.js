/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { InputErrorImage, InputSuccessImage } from '../svg-background';

const baseIndicatorStyle = {
  backgroundPosition: 'right 15px center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1rem',
  paddingRight: 32,
};

export const Styles = {
  Success: css({
    ...baseIndicatorStyle,
    backgroundImage: `url(${InputSuccessImage})`,
  }),
  Error: css({
    ...baseIndicatorStyle,
    backgroundImage: `url(${InputErrorImage})`,
  }),
  Disabled: {
    backgroundColor: '#E2E2E2',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
  },
};

const Input = ({className}) => (
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
    id="field1"
    name="field1"
  />
);

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
