/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import DownArrow from '../svg-extra/down-arrow.svg';
import UpArrow from '../svg-extra/up-arrow.svg';

export function Stepper({
  id,
  name,
  className,
  content,
  disabled,
  min,
  max,
  step,
  onChange,
  value,
  ...rest
}) {
  const inputEl = useRef(null);
  const [inputValue, setValue] = useState(value);
  // eslint-disable-next-line no-underscore-dangle
  const _onChanged = (event) => {
    setValue(event.target.value);
    if (typeof onChange === 'function') {
      return onChange.call(this, event);
    }
    return true;
  };
  return (
    <label
      className={className}
      htmlFor={id}
      css={{
        display: 'flex',
        flexFlow: 'row nowrap',
      }}
    >
      {content}
      <input
        css={css`
          text-align: center;
          background-color: var(--fv-input-background-color);
          border-radius: var(--fv-input-border-radius);
          border: none;
          width: inherit;   
          &:focus {
            border: var(--fv-input-border);
          }
        `}
        ref={inputEl}
        name={name}
        id={id}
        min={min}
        max={max}
        step={step}
        value={inputValue}
        type="text"
        onChange={_onChanged}
        {...rest}
      />
      <span
        css={{
          width: 20,
          position: 'relative',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          type="button"
          css={css`
            background-color: var(--fv-grey-dark);
            border-top-left-radius: 3px;
            border-top-right-radius: 5px;
            border: none;
            border-bottom: 1px solid var(--fv-grey-light);
            border-top: 1 solid var(--fv-grey-light);
            height: 16px;
            width: inherit;
          `}
          onClick={() => {
            if (inputValue + step <= max) {
              setValue(inputValue + step);
            }
          }}
        >
          <img src={UpArrow} alt="Up" />
        </button>
        <button
          type="button"
          css={css`
            background-color: var(--fv-grey-dark);
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 5px;
            border: none;
            border-top: 1px solid var(--fv-grey-light);
            border-top: 1 solid var(--fv-grey-light);
            height: 16px;
            width: inherit;
          `}
          onClick={() => {
            if (inputValue >= step) {
              setValue(inputValue - step);
            }
          }}
        >
          <img src={DownArrow} alt="Down" />
        </button>
      </span>
    </label>
  );
}

Stepper.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  content: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
