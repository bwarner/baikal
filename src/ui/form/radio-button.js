/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Checked from '../svg/icons/radio-checked';
import Unchecked from '../svg/icons/radio-unchecked';

const radioButtonInputStyle = css({
  opacity: 0,
  width: '1em',
  height: '1em',
  position: 'absolute',
});

const iconStyle = css`
  color: var(--fv-checkbox-color);
`;

const checkBoxLabelStyle = css`
  position: relative;
  & input:focus + span {
    box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
  }
`;

export function RadioButton({
  id,
  name,
  className,
  content,
  checked,
  disabled,
  onChange,
  ...rest
}) {
  const [isChecked, setChecked] = useState(checked);
  // eslint-disable-next-line no-underscore-dangle
  const _onChanged = (event) => {
    setChecked(event.target.checked);
    if (typeof onChange === 'function') {
      return onChange.call(this, event);
    }
    return true;
  };
  return (
    <label htmlFor={id} className={className} css={checkBoxLabelStyle}>
      <input
        css={[radioButtonInputStyle, disabled && { opacity: '50%' }]}
        type="radio"
        checked={isChecked}
        onChange={_onChanged}
        disabled={disabled}
        id={id}
        name={name}
        {...rest}
      />
      {isChecked ? <Checked css={iconStyle} /> : <Unchecked css={iconStyle} />}
      &nbsp;
      {content && <span>{content}</span>}
    </label>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  content: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
