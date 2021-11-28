/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const headerStyle = css`
  display: flex;
  flex-direction: row;
`;
export default function Menu({
  toggle,
  header,
  children,
}) {
  return (
    <ul>
      {children}
    </ul>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.func,
  toggle: PropTypes.func,
};

Menu.defaultTypes = {
  expanded: true,
};
