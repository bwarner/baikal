/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

const radioButtonInputStyle = css({
  opacity: 0,
  width: '1em',
  height: '1em',
  position: 'absolute',
});

const checkBoxLabelStyle = css`
  position: relative;
  & input:focus + span {
    box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
  }
`;

export default function ChoiceItem({
  id,
  name,
  className,
  children,
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
      {children({ checked, disabled, id })}
    </label>
  );
}

ChoiceItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
