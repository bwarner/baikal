/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const menuItemStyle = {
  // minHeight: 44,
  // backgroundColor: 'currentColor',
  // borderColor: 'grey',
  // borderWidth: 1,
  // borderStyle: 'solid',
};

const menuItemSelectedStyle = {
  opacity: 0.5,
};

export default function MenuItem({
  children,
  selected,
  ...rest
}) {
  return (
    <li
      css={[menuItemStyle, selected && menuItemSelectedStyle]}
      role="presentation"
      {...rest}
    >
      {children}
    </li>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  selected: PropTypes.bool,
};
