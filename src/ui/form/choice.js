/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import ChoiceItem from './choice-item';
import ThemeContext from '../css/theme-context';

// eslint-disable-next-line react/jsx-props-no-spreading,react/button-has-type
export function Choice({ selected, className, items }) {
  const {
    choice,
  } = useContext(ThemeContext);
  return (
    <div className={className}>
      {Object.entries(items).map(([key, value]) => (
        <ChoiceItem
          checked={selected === key}
          css={[choice.base]}
          key={key}
        >
          {({ checked, disabled }) => (
            <div
              css={[
                choice.base,
                checked && choice.selected,
                disabled && choice.disabled,
              ]}
            >
              {value}
            </div>
          )}
        </ChoiceItem>
      ))}
    </div>
  );
}

Choice.propTypes = {
  selected: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
