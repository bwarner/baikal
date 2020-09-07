/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import Input from './input';
import { CircleDownIcon } from '../svg/icons';

const InputButton = ({ className, tag: Tag, ...rest }) => (
  <Tag
    className={className}
    css={{
      position: 'relative',
      display: 'inline-block',
    }}
    {...rest}
  >
    <>
      <Input
        css={{
          padding: 0,
          paddingRight: 45,
          lineHeight: 'inherit',
          width: 'calc(100% - 45px)',
        }}
      />
      <button
        type="button"
        css={css({
          position: 'absolute',
          cursor: 'pointer',
          top: 0,
          bottom: 0,
          right: 0,
          width: 45,
          padding: 'inherit',
          marginTop: 5,
          color: 'var(--fv-input-foreground-color)',
          height: '100%',
          border: 'none',
          backgroundColor: 'var(--fv-input-background-color)',
        })}
      >
        <CircleDownIcon style={{ width: 'inherit', height: '100%' }} />
      </button>
    </>
  </Tag>
);

InputButton.defaultProps = {
  tag: 'label',
};

InputButton.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(PropTypes.string, PropTypes.func),
  // Input: PropTypes.element,
  // Button: PropTypes.element,
};

export default InputButton;
