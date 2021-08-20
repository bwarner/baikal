/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ThreeLines from '../svg-extra/3-lines.svg';

const buttonInputStyle = css({
  opacity: 0,
  width: '1em',
  height: '1em',
  position: 'absolute',
});

const checkBoxLabelStyle = css`
  position: relative;
`;

export function ToggleSwitch({
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
    console.log('checked is ', event.target.checked);
    if (typeof onChange === 'function') {
      return onChange.call(this, event);
    }
    return true;
  };
  return (
    <label htmlFor={id} className={className} css={checkBoxLabelStyle}>
      <input
        css={[buttonInputStyle, disabled && { opacity: '50%' }]}
        type="checkbox"
        checked={isChecked}
        onChange={_onChanged}
        disabled={disabled}
        id={id}
        name={name}
        {...rest}
      />
      {content && (
        <span
          css={css`
            position: relative;
            top: -8px;
            padding-right: 0.5rem;
          `}
        >
          {content}
        </span>
      )}
      <div
        css={css({
          position: 'relative',
          display: 'inline-block',
          width: 47,
          height: 25,
          borderRadius: 40,
          backgroundColor: isChecked
            ? 'var(--fv-checkbox-color)'
            : 'var(--fv-grey-light)',
        })}
      >
        <div
          css={css({
            width: 21,
            height: 21,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-10.5px)',
            left: !isChecked && '2px',
            right: isChecked && '2px',
            backgroundRepeat: 'no-repeat',
            borderRadius: '50%',
            backgroundColor: 'white',
            backgroundPosition: 'center',
            backgroundImage: `url(${ThreeLines})`,
            transition: 'left 6s, right 6s',
          })}
        />
      </div>
      &nbsp;
    </label>
  );
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  content: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
