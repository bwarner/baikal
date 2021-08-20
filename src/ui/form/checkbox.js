/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Checked from '../svg/icons/checkbox-checked';
import Unchecked from '../svg/icons/checkbox-unchecked';

const checkboxInputStyle = css({
  opacity: 0,
  width: '1em',
  height: '1em',
  position: 'absolute',
});

const checkedStyle = css`
  color: var(--fv-checkbox-color);
`;

const uncheckedStyle = css`
  color: var(--fv-grey-light);
  background-color: var(--fv-grey-light);
`;

const checkBoxLabelStyle = css`
  position: relative;
  & input:focus + span {
    box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
  }
`;

export function Checkbox({
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
    if (onChange) {
      return onChange(event);
    }
    return true;
  };
  return (
    <label htmlFor={id} className={className} css={checkBoxLabelStyle}>
      <input
        css={[checkboxInputStyle, disabled && { opacity: '50%' }]}
        type="checkbox"
        checked={isChecked}
        onChange={_onChanged}
        disabled={disabled}
        id={id}
        name={name}
        {...rest}
      />
      {isChecked ? (
        <Checked css={checkedStyle} />
      ) : (
        <Unchecked css={uncheckedStyle} />
      )}
      &nbsp;
      {content && <span>{content}</span>}
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  content: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
